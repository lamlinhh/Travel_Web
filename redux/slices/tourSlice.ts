import axiosInstance from "@/axios/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Tour {
  TourName?: string;
  CategoryId?: string;
  TourLocation?: string;
  TourTime?: number;
  TourPrice?: number;
  TourDifficulty?: string;
  TourMinAge?: number;
  DescribeTour?: string;
  createdAt?: string;
  updatedAt?: string;
  TotalRating?: number;
  Image?: string;
  _id?: string;
}

interface TourState {
  tours: Tour[];
  selectedTour: Tour | null;
  selectedCategoryId: string | null;
  currentPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const initialState: TourState = {
  tours: [],
  selectedTour: null,
  selectedCategoryId: null,
  currentPage: 1,
  totalPages: 1,
  loading: false,
  error: null,
};

// Fetch tất cả các tour
export const fetchTours = createAsyncThunk("tour/fetchTours",
  async (page: number = 1, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(
        `/GetAllTours?page=${page}&limit=3`,
      );
      if (data.errCode !== 0) throw new Error(data.errMessage);
      return {
        tours: data.tours,
        totalPages: data.pagination?.pages || 1,
        currentPage: page,
      };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.errMessage || err.message || "Something went wrong",
      );
    }
  });

export const fetchTour = createAsyncThunk(
  "tour/fetchTour",
  async (id: string) => {
    const response = await axiosInstance.get(`/GetTour/${id}`);
    return response.data.tour;
  }
);

export const fetchToursByCategory = createAsyncThunk<
  { tours: Tour[]; totalPages: number; currentPage: number },
  { categoryId: string; page?: number; limit?: number },
  { rejectValue: string }
>(
  "tour/fetchToursByCategory",
  async ({ categoryId, page = 1, limit = 3 }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(
        `/category/${categoryId}/tours?page=${page}&limit=${limit}`
      );
      if (data.errCode !== 0) throw new Error(data.errMessage);
      return {
        tours: data.tours,
        totalPages: data.pagination?.pages || 1,
        currentPage: page,
      };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.errMessage || err.message || "Failed to fetch tours by category"
      );
    }
  }
);

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.tours = action.payload.tours; // Ghi đè dữ liệu thay vì "load more"
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.loading = false;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
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
      })

      .addCase(fetchToursByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchToursByCategory.fulfilled, (state, action) => {
        state.tours = action.payload.tours;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.selectedCategoryId = action.meta.arg.categoryId; // << thêm dòng này
        state.loading = false;
      })
      .addCase(fetchToursByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPage, setCategoryId } = tourSlice.actions;
export default tourSlice.reducer;
