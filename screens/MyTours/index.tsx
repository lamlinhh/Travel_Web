"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToursByUserId } from "@/redux/slices/myToursSlice";
import { RootState, AppDispatch } from "@/redux/store";
import styles from "./styles.module.scss";

const MyTours = () => {
  const dispatch: AppDispatch = useDispatch();
  const { tours, loading, error } = useSelector(
    (state: RootState) => state.myTours,
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      dispatch(fetchToursByUserId(parsedUser._id));
    }
  }, [dispatch]);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p style={{ color: "red" }}>Lỗi: {error}</p>;

  if (!Array.isArray(tours)) {
    return <p style={{ color: "red" }}>Dữ liệu không hợp lệ.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Danh sách tour đã đặt</h1>
      {tours.length === 0 ? (
        <p>Bạn chưa đặt tour nào.</p>
      ) : (
        <ul className={styles.tourList}>
          {tours.map((payment) => (
            <li key={payment._id} className={styles.tourItem}>
              <p>
                <strong>Tên tour:</strong>{" "}
                {payment.BookTourId?.TourId?.TourName || "Không có tên"}
              </p>
              <p>
                <strong>Ngày khởi hành:</strong>{" "}
                {payment.BookTourId?.DepartureDate
                  ? new Date(
                      payment.BookTourId.DepartureDate,
                    ).toLocaleDateString()
                  : "Không có ngày"}
              </p>
              <p>
                <strong>Số người lớn:</strong>{" "}
                {payment.BookTourId?.QuantityAdults || 0}
              </p>
              <p>
                <strong>Số trẻ em:</strong>{" "}
                {payment.BookTourId?.QuantityChildren || 0}
              </p>
              <p>
                <strong>Tổng tiền:</strong> {payment.Amount || 0} VNĐ
              </p>
              <p>
                <strong>Hình thức thanh toán:</strong>{" "}
                {payment.PaymentMethod || "Không có thông tin"}
              </p>
              <p>
                <strong>Trạng thái:</strong>{" "}
                {payment.PaymentStatus ? "Đã thanh toán" : "Chưa thanh toán"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyTours;
