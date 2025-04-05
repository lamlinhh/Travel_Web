import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./slices/itemSlice";
import userReducer from "./slices/getUserSlice";
import tourReducer from "./slices/tourSlice";
import reviewsReducer from "./slices/reviewsSlice";
import tourDetailReducer from "./slices/tourDetailSlice";
import bookTourReducer from "@/redux/slices/bookTourSlice"

export const store = configureStore({
  reducer: {
    item: itemReducer,
    user: userReducer,
    tour: tourReducer,
    review: reviewsReducer,
    tourDetail: tourDetailReducer,
    bookTour: bookTourReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
