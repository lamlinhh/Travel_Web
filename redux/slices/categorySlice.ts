import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/axios/axiosInstance";
import axios from "axios";

export interface CategoryProps {
  _id: string;
  CategoryName: string;
  Description: string;
  createdAt: string;
  updatedAt: string;
}

interface CategoryState {
  categories: CategoryProps[];
  currentCategory: CategoryProps | null;
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  currentCategory: null,
  loading: false,
  error: null,
};

// Get all categories
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/GetCategories");
      
      if (response.data.errCode !== 0) {
        throw new Error(response.data.errMessage || "Lỗi khi lấy danh sách categories");
      }
      
      return response.data.categories;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Get category by ID
export const fetchCategoryById = createAsyncThunk(
  "categories/fetchCategoryById",
  async (id: string, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/GetCategory/${id}`);
      if (response.data.errCode !== 0) {
        throw new Error(response.data.errMessage);
      }
      return response.data.category;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create new category
export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (categoryData: { categoryName: string; description: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/CreateCategory", categoryData);
      if (response.data.errCode !== 0) {
        throw new Error(response.data.errMessage);
      }
      return response.data.category;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update category
export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async (
    {
      id,
      categoryData,
    }: {
      id: string;
      categoryData: { categoryName: string; description: string };
    },
    thunkAPI
  ) => {
    try {
      const response = await axiosInstance.put(
        `/UpdateCategory/${id}`,
        categoryData
      );
      if (response.data.errCode !== 0) {
        throw new Error(response.data.errMessage);
      }
      return response.data.category;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Delete category
export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id: string, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(`/DeleteCategory/${id}`);
      if (response.data.errCode !== 0) {
        throw new Error(response.data.errMessage);
      }
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    clearCurrentCategory: (state) => {
      state.currentCategory = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch single category
      .addCase(fetchCategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCategory = action.payload;
      })
      .addCase(fetchCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Create category
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Update category
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.categories.findIndex(
          (category) => category._id === action.payload._id
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
        if (state.currentCategory?._id === action.payload._id) {
          state.currentCategory = action.payload;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Delete category
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.filter(
          (category) => category._id !== action.payload
        );
        if (state.currentCategory?._id === action.payload) {
          state.currentCategory = null;
        }
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCurrentCategory } = categorySlice.actions;
export default categorySlice.reducer; 