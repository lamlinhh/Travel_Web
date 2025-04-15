import bookTourReducer from "@/redux/slices/bookTourSlice";
import categoriesReducer from "@/redux/slices/categoriesSlice";
import paymentReducer from "@/redux/slices/paymentSlice";
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import userReducer from "./slices/getUserSlice";
import itemReducer from "./slices/itemSlice";
import reviewsReducer from "./slices/reviewsSlice";
import tourDetailReducer from "./slices/tourDetailSlice";
import tourReducer from "./slices/tourSlice";
import tourDifficultyReducer from "./slices/tourDifficultySlice";
import myToursReducer from "./slices/myToursSlice";
export const store = configureStore({
  reducer: {
    item: itemReducer,
    user: userReducer,
    tour: tourReducer,
    category: categoryReducer,
    review: reviewsReducer,
    tourDetail: tourDetailReducer,
    bookTour: bookTourReducer,
    payment: paymentReducer,
    categorie: categoriesReducer,
    tourDifficulty: tourDifficultyReducer,
    myTours: myToursReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;