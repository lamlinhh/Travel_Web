import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/axios/axiosInstance";
import { MyToursPaymentProps } from "@/types/MyToursPaymentProps"; 

interface MyToursState {
  tours: MyToursPaymentProps[]; 
  loading: boolean;
  error?: string;
}

const initialState: MyToursState = {
  tours: [],
  loading: false,
};
export const fetchToursByUserId = createAsyncThunk(
  "myTours/fetchByUserId",
  async (userId: string, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/GetPaymentsByUserId/${userId}`);
      if (res.data && Array.isArray(res.data.data)) {
        return res.data.data; 
      } else {
        throw new Error(res.data.errMessage || "Dữ liệu không hợp lệ từ API");
      }
    } catch (error: any) {
      console.error("API Error:", error); // Log lỗi từ API
      return thunkAPI.rejectWithValue(
        error.response?.data?.errMessage || "Không thể tải dữ liệu"
      );
    }
  }
);

const myToursSlice = createSlice({
  name: "myTours",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchToursByUserId.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchToursByUserId.fulfilled, (state, action: PayloadAction<MyToursPaymentProps[]>) => {
        state.loading = false;
        state.tours = action.payload;
      })
      .addCase(fetchToursByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default myToursSlice.reducer;