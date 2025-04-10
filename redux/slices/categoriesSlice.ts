import axiosInstance from "@/axios/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Categorie {
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

interface CategoriState {
  categori: Categorie | null;
  loading: boolean;
  error: string | null;
}

const initialState: CategoriState = {
  categori: null,
  loading: false,
  error: null,
};

export const fetchcategori = createAsyncThunk(
  "categori/fetchcategori",
  async () => {
    const response = await axiosInstance.get(`/GetCategories`);
    return response.data?.categories;
  },
);

const tourSlice = createSlice({
  name: "categori",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchcategori.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchcategori.fulfilled, (state, action) => {
        state.loading = false;
        state.categori = action.payload;
      })
      .addCase(fetchcategori.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tours";
      });
  },
});

export default tourSlice.reducer;
