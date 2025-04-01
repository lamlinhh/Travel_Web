import axiosInstance from "@/axios/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Tour {
  id?: string;
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

// Giữ lại fetchTours để call API cho Destinations
export const fetchTours = createAsyncThunk(
  "tour/fetchTours",
  async (destination?: string) => {
    try {
      const url = destination
        ? `/GetAllTours?destination=${destination}`
        : "/GetAllTours";
      const response = await axiosInstance.get(url);

      if (!Array.isArray(response.data.tours)) {
        console.error("Expected an array but got:", response.data);
        return [];
      }

      return response.data.tours;
    } catch (error) {
      console.error("Error fetching tours:", error);
      throw new Error("Failed to fetch tours");
    }
  },
);

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
