import axiosInstance from "@/axios/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface TourDifficulty {
  _id: number;
  DifficultyLabel: string;
}

interface TourDifficultyState {
  tourDifficulty: TourDifficulty[];
  selectedTour: TourDifficulty | null;
  selectedCategoryId: string | null;
  currentPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const initialState: TourDifficultyState = {
  tourDifficulty: [],
  selectedTour: null,
  selectedCategoryId: null,
  currentPage: 1,
  totalPages: 1,
  loading: false,
  error: null,
};

// Fetch tất cả các tour
export const fetchTourDifficulty = createAsyncThunk(
  "tourDifficulty/fetchTourDifficulty",
  async () => {
    const response = await axiosInstance.get(`/GetTourDifficulty`);
    return response.data.options;
  },
);

const tourDifficultySlice = createSlice({
  name: "tourDifficulty",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTourDifficulty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTourDifficulty.fulfilled, (state, action) => {
        state.loading = false;
        state.tourDifficulty = action.payload;
      })
      .addCase(fetchTourDifficulty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tours";
      });
  },
});

export default tourDifficultySlice.reducer;
