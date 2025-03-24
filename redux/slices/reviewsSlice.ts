import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ReviewProps } from '@/types/ReviewProps';
import { getAllReviews, createReview, updateReview, deleteReview } from '@/api/reviewAPI';

// Async actions (thunks)
export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async (page: number = 1, thunkAPI) => {
    try {
      const data = await getAllReviews(page, 6);
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message || 'Something went wrong');
    }
  }
);

// Optional: Thunks cho create, update, delete cũng có thể viết ở đây
export const createReviewThunk = createAsyncThunk(
  'reviews/createReview',
  async ({ data, token }: { data: Partial<ReviewProps>; token: string }, thunkAPI) => {
    try {
      const newReview = await createReview(data, token);
      return newReview;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

type ReviewsState = {
  reviews: ReviewProps[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
};

const initialState: ReviewsState = {
  reviews: [],
  currentPage: 1,
  totalPages: 1,
  loading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
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
        state.reviews = action.payload.reviews;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.loading = false;
      })
      .addCase(fetchReviews.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Optional create/update/delete cases nếu muốn update local state
    builder.addCase(createReviewThunk.fulfilled, (state, action) => {
      state.reviews.unshift(action.payload);
    });
  },
});

export const { setPage } = reviewsSlice.actions;

export default reviewsSlice.reducer;
