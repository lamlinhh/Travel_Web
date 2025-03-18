import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from './slices/reviewsSlice';

export const store = configureStore({
  reducer: {
    review: reviewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
