import axiosInstance from "@/axios/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TourDetailProps } from "@/types/TourDetailProps";

interface TourDetailState {             
    selected: TourDetailProps | null;   
    loading: boolean;
    error: string | null;
}

const initialState: TourDetailState = {
    selected: null,
    loading: false,
    error: null,
};

// === Thunk ===
export const fetchTourDetailByTourId = createAsyncThunk(
    "tourDetail/fetchByTourId",
    async (tourId: string, thunkAPI) => {
        try {
            const { data } = await axiosInstance.get(`/GetDetailByTourId/${tourId}`);

            if (data.errCode !== 0) {
                throw new Error(data.errMessage);
            }

            if (!data.detail) {
                throw new Error("Detail not found");
            }

            return data.detail; // object, không phải array
        } catch (err: any) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.errMessage || err.message || "Unknown error"
            );
        }
    }
);

// === Slice ===
const tourDetailSlice = createSlice({
    name: "tourDetail",
    initialState,
    reducers: {
        clearSelectedTourDetail: (state) => {
            state.selected = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTourDetailByTourId.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.selected = null;
            })
            .addCase(fetchTourDetailByTourId.fulfilled, (state, action) => {
                state.loading = false;
                state.selected = action.payload; // đã là object
            })
            .addCase(fetchTourDetailByTourId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.selected = null;
            });
    },
});

export const { clearSelectedTourDetail } = tourDetailSlice.actions;
export default tourDetailSlice.reducer;
