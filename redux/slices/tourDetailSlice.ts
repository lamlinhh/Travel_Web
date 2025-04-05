import axiosInstance from "@/axios/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TourDetailProps } from "@/types/TourDetailProps";

interface TourDetailState {
    list: TourDetailProps[];
    selected: TourDetailProps | null;
    loading: boolean;
    error: string | null;
}

const initialState: TourDetailState = {
    list: [],
    selected: null,
    loading: false,
    error: null,
};

// === Thunks ===

// Get all TourDetails
export const fetchTourDetails = createAsyncThunk(
    "tourDetail/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { data } = await axiosInstance.get("/GetAllTourDetails");
            if (data.errCode !== 0) throw new Error(data.errMessage);
            return data.data;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.response?.data?.errMessage || err.message);
        }
    }
);

// Get by TourId
export const fetchTourDetailByTourId = createAsyncThunk(
    "tourDetail/fetchByTourId",
    async (tourId: string, thunkAPI) => {
        try {
            const { data } = await axiosInstance.get(`/GetTourDetail/${tourId}`);
            if (data.errCode !== 0) throw new Error(data.errMessage);
            return data.data;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.response?.data?.errMessage || err.message);
        }
    }
);

// Create new detail
export const createTourDetail = createAsyncThunk(
    "tourDetail/create",
    async (newData: Partial<TourDetailProps>, thunkAPI) => {
        try {
            const { data } = await axiosInstance.post("/CreateTourDetail", newData);
            return data.data;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.response?.data?.errMessage || err.message);
        }
    }
);

// Update
export const updateTourDetail = createAsyncThunk(
    "tourDetail/update",
    async (
        { id, updatedData }: { id: string; updatedData: Partial<TourDetailProps> },
        thunkAPI
    ) => {
        try {
            const { data } = await axiosInstance.put(`/UpdateTourDetail/${id}`, updatedData);
            return data.data;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.response?.data?.errMessage || err.message);
        }
    }
);

// Delete
export const deleteTourDetail = createAsyncThunk(
    "tourDetail/delete",
    async (id: string, thunkAPI) => {
        try {
            await axiosInstance.delete(`/DeleteTourDetail/${id}`);
            return id;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.response?.data?.errMessage || err.message);
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

            // === Fetch all
            .addCase(fetchTourDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTourDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchTourDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // === Fetch by ID
            .addCase(fetchTourDetailByTourId.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.selected = null;
            })
            .addCase(fetchTourDetailByTourId.fulfilled, (state, action) => {
                state.loading = false;
                state.selected = action.payload;
            })
            .addCase(fetchTourDetailByTourId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.selected = null;
            })

            // === Create
            .addCase(createTourDetail.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })

            // === Update
            .addCase(updateTourDetail.fulfilled, (state, action) => {
                state.list = state.list.map((item) =>
                    item._id === action.payload._id ? action.payload : item
                );
                if (state.selected?._id === action.payload._id) {
                    state.selected = action.payload;
                }
            })

            // === Delete
            .addCase(deleteTourDetail.fulfilled, (state, action) => {
                state.list = state.list.filter((item) => item._id !== action.payload);
                if (state.selected?._id === action.payload) {
                    state.selected = null;
                }
            });
    },
});

export const { clearSelectedTourDetail } = tourDetailSlice.actions;
export default tourDetailSlice.reducer;
