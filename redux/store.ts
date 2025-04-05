import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./slices/itemSlice";
import userReducer from "./slices/getUserSlice";
import tourReducer from "./slices/tourSlice";
import reviewsReducer from "@/redux/slices/reviewsSlice";
import bookTourReducer from "@/redux/slices/bookTourSlice";
import tourDetailReducer from "@/redux/slices/tourDetailSlice"

export const store = configureStore({
  reducer: {
    item: itemReducer,
    user: userReducer,
    tour: tourReducer,
    review: reviewsReducer,
    bookTour: bookTourReducer,
    tourDetail: tourDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
