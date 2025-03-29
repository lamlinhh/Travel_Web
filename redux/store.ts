import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./slices/itemSlice";
import userReducer from "./slices/getUserSlice";
import tourReducer from "./slices/tourSlice";

export const store = configureStore({
  reducer: {
    item: itemReducer,
    user: userReducer,
    tour: tourReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
