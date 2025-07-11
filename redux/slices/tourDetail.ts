import axiosInstance from "@/axios/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface TourDetail {
  Rating?: number;
  _id?: string;
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

interface TourDetailState {
  tourDetail: TourDetail | null;
  loading: boolean;
  error: string | null;
}

const initialState: TourDetailState = {
  tourDetail: null,
  loading: false,
  error: null,
};

export const fetchTourDetail = createAsyncThunk(
  "tourDetail/fetchTourDetail",
  async (tourId: string) => {
    const response = await axiosInstance.get(`/GetTour/${tourId}`);
    return response.data.tour;
  },
);

const tourSlice = createSlice({
  name: "tourDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTourDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTourDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.tourDetail = action.payload;
      })
      .addCase(fetchTourDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tours";
      });
  },
});

export default tourSlice.reducer;
