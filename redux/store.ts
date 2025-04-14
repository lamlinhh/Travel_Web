import bookTourReducer from "@/redux/slices/bookTourSlice";
import categoriesReducer from "@/redux/slices/categoriesSlice";
import paymentReducer from "@/redux/slices/paymentSlice";
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import userReducer from "./slices/getUserSlice";
import itemReducer from "./slices/itemSlice";
import reviewsReducer from "./slices/reviewsSlice";
import tourDetailReducer from "./slices/tourDetailSlice";
<<<<<<< HEAD
import bookTourReducer from "@/redux/slices/bookTourSlice";
import paymentReducer from "@/redux/slices/paymentSlice";

=======
import tourReducer from "./slices/tourSlice";
import tourDifficultyReducer from "./slices/tourDifficultySlice";
>>>>>>> e20a4607c4f39657161abcb44fb4ff56e28bb8a4

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
<<<<<<< HEAD
  
=======
    categorie: categoriesReducer,
    tourDifficulty: tourDifficultyReducer,
>>>>>>> e20a4607c4f39657161abcb44fb4ff56e28bb8a4
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
