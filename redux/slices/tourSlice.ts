import axiosInstance from "@/axios/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Tour {
  TourName?: string;
  CategoryName?: string;
  TourLocation?: string;
  TourTime?: number;
  TourPrice?: number;
  TourDifficulty?: string;
  TourMinAge?: number;
  DescribeTour?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface TourState {
  tours: Tour[];
  loading: boolean;
  error: string | null;
}

const initialState: TourState = {
  tours: [],
  loading: false,
  error: null,
};

export const fetchTours = createAsyncThunk("tour/fetchTours", async () => {
  const response = await axiosInstance.get("/GetAllTours");
  return response.data.tours;
});

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.loading = false;
        state.tours = action.payload;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tours";
      });
  },
});

export default tourSlice.reducer;
