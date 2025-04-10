import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "@/axios/axiosInstance";
import { PaymentProps } from "@/types/PaymentProps";

interface PaymentState {
  payments: PaymentProps[];
  payment?: PaymentProps;
  searchResult: PaymentProps[];
  loading: boolean;
  error?: string;
}

const initialState: PaymentState = {
  payments: [],
  payment: undefined,
  searchResult: [],
  loading: false,
};

export const fetchAllPayments = createAsyncThunk("payment/fetchAllPayments", async () => {
  const response = await axios.get("https://travel-website-service.onrender.com/GetAllPayments");
  return response.data.data; // Trả về danh sách các thanh toán
});

export const fetchPayments = createAsyncThunk("payment/fetchAll", async () => {
  const res = await axiosInstance.get("/GetAllPayments");
  return res.data;
});

export const fetchPaymentById = createAsyncThunk("payment/fetchById", async (id: string) => {
  const res = await axiosInstance.get(`/GetPayment/${id}`);
  return res.data;
});

export const fetchPaymentsByUserId = createAsyncThunk("payment/fetchByUserId", async (userId: string) => {
  const res = await axiosInstance.get(`/GetPaymentsByUserId/${userId}`);
  return res.data;
});

export const fetchSearch = createAsyncThunk(
  "payment/fetchSearch",
  async (keyword: string, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/Search?keyword=${keyword}`);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || "Search failed");
    }
  }
);

export const createPayment = createAsyncThunk("payment/create", async (paymentData: Omit<PaymentProps, "_id">) => {
  const res = await axiosInstance.post("/CreateNewPayment", paymentData);
  return res.data;
});

export const updatePayment = createAsyncThunk("payment/update", async (paymentData: PaymentProps) => {
  const res = await axiosInstance.put("/UpdatePayment", paymentData);
  return res.data;
});

export const deletePayment = createAsyncThunk("payment/delete", async (id: string) => {
  await axiosInstance.delete(`/DeletePayment/${id}`);
  return id;
});

export const processMomoPayment = createAsyncThunk("payment/momo", async (momoData: any) => {
  const res = await axiosInstance.post("/Payment/Momo", momoData);
  return res.data;
});

export const handleMomoCallback = createAsyncThunk("payment/momoCallback", async (callbackData: any) => {
  const res = await axiosInstance.post("/Payment/Callback", callbackData);
  return res.data;
});

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPayments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPayments.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = action.payload;
      })
      .addCase(fetchAllPayments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchPayments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPayments.fulfilled, (state, action: PayloadAction<PaymentProps[]>) => {
        state.loading = false;
        state.payments = action.payload;
      })
      .addCase(fetchPayments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchPaymentById.fulfilled, (state, action: PayloadAction<PaymentProps>) => {
        state.payment = action.payload;
      })

      .addCase(fetchPaymentsByUserId.fulfilled, (state, action: PayloadAction<PaymentProps[]>) => {
        state.payments = action.payload;
      })

      .addCase(fetchSearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearch.fulfilled, (state, action: PayloadAction<PaymentProps[]>) => {
        state.loading = false;
        state.searchResult = action.payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(createPayment.fulfilled, (state, action: PayloadAction<PaymentProps>) => {
        state.payments.push(action.payload);
      })

      .addCase(updatePayment.fulfilled, (state, action: PayloadAction<PaymentProps>) => {
        const index = state.payments.findIndex(p => p._id === action.payload._id);
        if (index !== -1) state.payments[index] = action.payload;
      })

      .addCase(deletePayment.fulfilled, (state, action: PayloadAction<string>) => {
        state.payments = state.payments.filter(p => p._id !== action.payload);
      })

      .addCase(processMomoPayment.fulfilled, (_, action) => {
        console.log("Momo Response:", action.payload);
      })

      .addCase(handleMomoCallback.fulfilled, (_, action) => {
        console.log("Momo Callback:", action.payload);
      });
  },
});

export default paymentSlice.reducer;
