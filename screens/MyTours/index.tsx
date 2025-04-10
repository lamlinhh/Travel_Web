"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPayments } from "@/redux/slices/paymentSlice";
import { RootState, AppDispatch } from "@/redux/store";
import styles from "./styles.module.scss";

const MyTours = () => {
  const dispatch: AppDispatch = useDispatch();
  const { payments, loading, error } = useSelector((state: RootState) => state.payment);

  useEffect(() => {
    dispatch(fetchAllPayments());
  }, [dispatch]);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p style={{ color: "red" }}>Lỗi: {error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Danh sách tour đã đặt</h1>
      {Array.isArray(payments) && payments.length === 0 ? (
        <p>Bạn chưa đặt tour nào.</p>
      ) : (
        <ul className={styles.tourList}>
          {Array.isArray(payments) &&
            payments.map((payment) => (
              <li key={payment._id} className={styles.tourItem}>
                <p><strong>Tên tour:</strong> {payment.BookTourId.TourId.TourName}</p>
                <p><strong>Ngày khởi hành:</strong> {new Date(payment.BookTourId.DepartureDate).toLocaleDateString()}</p>
                <p><strong>Số người lớn:</strong> {payment.BookTourId.QuantityAdults}</p>
                <p><strong>Số trẻ em:</strong> {payment.BookTourId.QuantityChildren}</p>
                <p><strong>Tổng tiền:</strong> {payment.Amount} VNĐ</p>
                <p><strong>Hình thức thanh toán:</strong> {payment.PaymentMethod}</p>
                <p><strong>Trạng thái:</strong> {payment.PaymentStatus ? "Đã thanh toán" : "Chưa thanh toán"}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MyTours;