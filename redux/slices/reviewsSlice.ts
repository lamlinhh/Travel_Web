import axiosInstance from "@/axios/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ReviewProps } from "@/types/ReviewProps";

interface ReviewsState {
  reviews: ReviewProps[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const initialState: ReviewsState = {
  reviews: [],
  currentPage: 1,
  totalPages: 1,
  loading: false,
  error: null,
};

// Fetch reviews with pagination
export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (page: number = 1, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(`/GetAllReviews?page=${page}&limit=6`);
      if (data.errCode !== 0) throw new Error(data.errMessage);
      return { reviews: data.reviews, totalPages: data.totalPages, currentPage: page };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.errMessage || err.message || "Something went wrong"
      );
    }
  }
);

// Fetch reviews by tour ID with pagination
export const fetchReviewsByTourId = createAsyncThunk(
  "reviews/fetchReviewsByTourId",
  async ({ tourId, page = 1, limit = 6 }: { tourId: string; page: number; limit: number }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(`/GetReviews/${tourId}?page=${page}&limit=${limit}`);
      if (data.errCode !== 0) throw new Error(data.errMessage);
      return { reviews: data.reviews, totalPages: data.totalPages, currentPage: page };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.errMessage || err.message);
    }
  }
);

// Create a new review
export const createReviewThunk = createAsyncThunk(
  "reviews/createReview",
  async (data: Partial<ReviewProps>, thunkAPI) => {
    try {
      const { data: response } = await axiosInstance.post("/CreateNewReview", data);
      return response.review; // Trả về dữ liệu review mới
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.errMessage || err.message);
    }
  }
);

// Update a review
export const updateReviewThunk = createAsyncThunk(
  "reviews/updateReview",
  async ({ id, data }: { id: string; data: Partial<ReviewProps> }, thunkAPI) => {
    try {
      const { data: response } = await axiosInstance.put(`/UpdateReview/${id}`, data);
      return response;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.errMessage || err.message);
    }
  }
);

// Delete a review
export const deleteReviewThunk = createAsyncThunk(
  "reviews/deleteReview",
  async (id: string, thunkAPI) => {
    try {
      const { data } = await axiosInstance.delete(`/DeleteReview/${id}`);
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.errMessage || err.message);
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload.reviews; // Ghi đè dữ liệu thay vì "load more"
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.loading = false;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchReviewsByTourId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviewsByTourId.fulfilled, (state, action) => {
        state.reviews = action.payload.reviews; // Ghi đè thay vì load thêm
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.loading = false;
      })
      .addCase(fetchReviewsByTourId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createReviewThunk.fulfilled, (state, action) => {
        state.reviews.unshift(action.payload);
      })
      .addCase(deleteReviewThunk.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter((review) => review._id !== action.payload.id);
      });
  },
});

export const { setPage } = reviewsSlice.actions;
export default reviewsSlice.reducer;

import axiosInstance from "@/axios/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ReviewProps } from "@/types/ReviewProps";

interface ReviewsState {
  reviews: ReviewProps[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const initialState: ReviewsState = {
  reviews: [],
  currentPage: 1,
  totalPages: 1,
  loading: false,
  error: null,
};

// Fetch reviews with pagination
export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (page: number = 1, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(
        `/GetAllReviews?page=${page}&limit=6`,
      );
      if (data.errCode !== 0) throw new Error(data.errMessage);
      return {
        reviews: data.reviews,
        totalPages: data.totalPages,
        currentPage: page,
      };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.errMessage || err.message || "Something went wrong",
      );
    }
  },
);

// Fetch reviews by tour ID with pagination
export const fetchReviewsByTourId = createAsyncThunk(
  "reviews/fetchReviewsByTourId",
  async (
    {
      tourId,
      page = 1,
      limit = 6,
    }: { tourId: string; page: number; limit: number },
    thunkAPI,
  ) => {
    try {
      const { data } = await axiosInstance.get(
        `/GetReviews/${tourId}?page=${page}&limit=${limit}`,
      );
      if (data.errCode !== 0) throw new Error(data.errMessage);
      return {
        reviews: data.reviews,
        totalPages: data.totalPages,
        currentPage: page,
      };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.errMessage || err.message,
      );
    }
  },
);

// Create a new review
export const createReviewThunk = createAsyncThunk(
  "reviews/createReview",
  async (data: Partial<ReviewProps>, thunkAPI) => {
    try {
      const { data: response } = await axiosInstance.post(
        "/CreateNewReview",
        data,
      );
      return response.review; // Trả về dữ liệu review mới
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.errMessage || err.message,
      );
    }
  },
);

// Update a review
export const updateReviewThunk = createAsyncThunk(
  "reviews/updateReview",
  async (
    { id, data }: { id: string; data: Partial<ReviewProps> },
    thunkAPI,
  ) => {
    try {
      const { data: response } = await axiosInstance.put(
        `/UpdateReview/${id}`,
        data,
      );
      return response;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.errMessage || err.message,
      );
    }
  },
);

// Delete a review
export const deleteReviewThunk = createAsyncThunk(
  "reviews/deleteReview",
  async (id: string, thunkAPI) => {
    try {
      const { data } = await axiosInstance.delete(`/DeleteReview/${id}`);
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.errMessage || err.message,
      );
    }
  },
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload.reviews; // Ghi đè dữ liệu thay vì "load more"
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.loading = false;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchReviewsByTourId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviewsByTourId.fulfilled, (state, action) => {
        state.reviews = action.payload.reviews; // Ghi đè thay vì load thêm
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.loading = false;
      })
      .addCase(fetchReviewsByTourId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createReviewThunk.fulfilled, (state, action) => {
        state.reviews.unshift(action.payload);
      })
      .addCase(deleteReviewThunk.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter(
          (review) => review?._id !== action.payload.id,
        );
      });
  },
});

export const { setPage } = reviewsSlice.actions;
export default reviewsSlice.reducer;
