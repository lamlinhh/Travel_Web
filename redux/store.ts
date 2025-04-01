import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./slices/itemSlice";
import userReducer from "./slices/getUserSlice";
import tourReducer from "./slices/tourSlice";
<<<<<<< HEAD
import reviewsReducer from './slices/reviewsSlice';
=======
>>>>>>> 38ae0f2e7e9c5029da5b34db238a3d4841cb457d

export const store = configureStore({
  reducer: {
    item: itemReducer,
    user: userReducer,
    tour: tourReducer,
<<<<<<< HEAD
    review: reviewsReducer,
=======
>>>>>>> 38ae0f2e7e9c5029da5b34db238a3d4841cb457d
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
