import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/axios/axiosInstance";
import { PaymentProps } from "@/types/PaymentProps";

interface PaymentState {
  payments: PaymentProps[];
  payment?: PaymentProps;
  loading: boolean;
  error?: string;
}

const initialState: PaymentState = {
  payments: [],
  payment: undefined,
  loading: false,
};

// ==== Thunks ====

// GET: all payments
export const fetchPayments = createAsyncThunk("payment/fetchAll", async () => {
  const res = await axiosInstance.get("/GetAllPayments");
  return res.data;
});

// GET: one payment by ID
export const fetchPaymentById = createAsyncThunk("payment/fetchById", async (id: string) => {
  const res = await axiosInstance.get(`/GetPayment/${id}`);
  return res.data;
});

// POST: create new payment
export const createPayment = createAsyncThunk("payment/create", async (paymentData: Omit<PaymentProps, "_id">) => {
  const res = await axiosInstance.post("/CreateNewPayment", paymentData);
  return res.data;
});

// PUT: update payment
export const updatePayment = createAsyncThunk("payment/update", async (paymentData: PaymentProps) => {
  const res = await axiosInstance.put("/UpdatePayment", paymentData);
  return res.data;
});

// DELETE: payment
export const deletePayment = createAsyncThunk("payment/delete", async (id: string) => {
  await axiosInstance.delete(`/DeletePayment/${id}`);
  return id;
});

// POST: payment via Momo
export const processMomoPayment = createAsyncThunk("payment/momo", async (momoData: any) => {
  const res = await axiosInstance.post("/Payment/Momo", momoData);
  return res.data;
});

// POST: Momo callback
export const handleMomoCallback = createAsyncThunk("payment/momoCallback", async (callbackData: any) => {
  const res = await axiosInstance.post("/Payment/Callback", callbackData);
  return res.data;
});

// ==== Slice ====

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all payments
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

      // Fetch by ID
      .addCase(fetchPaymentById.fulfilled, (state, action: PayloadAction<PaymentProps>) => {
        state.payment = action.payload;
      })

      // Create new payment
      .addCase(createPayment.fulfilled, (state, action: PayloadAction<PaymentProps>) => {
        state.payments.push(action.payload);
      })

      // Update payment
      .addCase(updatePayment.fulfilled, (state, action: PayloadAction<PaymentProps>) => {
        const index = state.payments.findIndex(p => p._id === action.payload._id);
        if (index !== -1) state.payments[index] = action.payload;
      })

      // Delete payment
      .addCase(deletePayment.fulfilled, (state, action: PayloadAction<string>) => {
        state.payments = state.payments.filter(p => p._id !== action.payload);
      })

      // Momo payment
      .addCase(processMomoPayment.fulfilled, (_, action) => {
        console.log("Momo Response:", action.payload);
      })

      // Momo callback
      .addCase(handleMomoCallback.fulfilled, (_, action) => {
        console.log("Momo Callback:", action.payload);
      });
  },
});

export default paymentSlice.reducer;
