import axiosInstance from "@/axios/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BookTourProps } from "@/types/BookTourProps";

interface BookTourState {
    bookTour: BookTourProps | null;
    loading: boolean;
    error: string | null;
}

const initialState: BookTourState = {
    bookTour: null,
    loading: false,
    error: null,
};

// Tạo một BookTour mới
export const createBookTour = createAsyncThunk(
    "bookTour/createBookTour",
    async (newBookTour: Omit<BookTourProps, "_id">, thunkAPI) => {
        try {
            const { data } = await axiosInstance.post("/CreateNewBooktour", newBookTour);
            if (data.errCode !== 0) throw new Error(data.errMessage);
            return data.data;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.response?.data?.errMessage || err.message);
        }
    }
);

export const fetchBookTour = createAsyncThunk(
    "bookTour/fetchBookTour",
    async (id: string, thunkAPI) => {
        try {
            const { data } = await axiosInstance.get(`/GetBooktour/${id}`);
            if (data.errCode !== 0) throw new Error(data.errMessage);
            return data.data;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.response?.data?.errMessage || err.message);
        }
    }
);

const bookTourSlice = createSlice({
    name: "bookTour",
    initialState,
    reducers: {
        resetBookTour: (state) => {
            state.bookTour = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBookTour.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createBookTour.fulfilled, (state, action) => {
                state.bookTour = action.payload;
                state.loading = false;
            })
            .addCase(createBookTour.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchBookTour.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBookTour.fulfilled, (state, action) => {
                state.bookTour = action.payload;
                state.loading = false;
            })
            .addCase(fetchBookTour.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetBookTour } = bookTourSlice.actions;
export default bookTourSlice.reducer;
