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
  Rating?: number;
  Image?: string;
  _id?: string;
}

interface TourState {
  tours: Tour[];
  selectedTour: Tour | null;
  loading: boolean;
  error: string | null;
}

const initialState: TourState = {
  tours: [],
  selectedTour: null, // Thêm state cho tour được chọn
  loading: false,
  error: null,
};

// Fetch tất cả các tour
export const fetchTours = createAsyncThunk("tour/fetchTours", async () => {
  const response = await axiosInstance.get("/GetAllTours");
  return response.data.tours;
});

// Fetch tour theo ID
export const fetchTour = createAsyncThunk(
  "tour/fetchTour",
  async (id: string) => {
    const response = await axiosInstance.get(`/GetTour/${id}`);
    return response.data; // Giả sử API trả về thông tin tour dưới dạng đối tượng
  }
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
      })
      // Xử lý fetchTour
      .addCase(fetchTour.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTour.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedTour = action.payload; // Cập nhật selectedTour khi thành công
      })
      .addCase(fetchTour.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tour";
      });
  },
});

export default tourSlice.reducer;
