"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { createPayment, processMomoPayment } from "@/redux/slices/paymentSlice";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchBookTour } from "@/redux/slices/bookTourSlice";
import { fetchTour } from "@/redux/slices/tourSlice";
import Modal from "@/components/ModalNotification";
import { UserOutlined, MailOutlined, PhoneOutlined, DollarOutlined, ProfileOutlined, CreditCardOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Image from "next/image";

const PaymentForm = () => {
  const searchParams = useSearchParams();
  const tourId = searchParams?.get("tourId") || "";
  const bookTourId = searchParams?.get("bookTourId") || "";

  const dispatch: AppDispatch = useDispatch();

  const { loading, error } = useSelector((state: RootState) => state.payment);
  const { tours } = useSelector((state: RootState) => state.tour);
  const { bookTour } = useSelector((state: RootState) => state.bookTour);

  const [userId, setUserId] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState<any>(null);
  const [paymentStatus, setPaymentStatus] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("MOMO");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser._id);
      setUserDetails(parsedUser);
    }
  }, []);

  useEffect(() => {
    if (bookTourId) dispatch(fetchBookTour(bookTourId));
    if (tourId) dispatch(fetchTour(tourId));
  }, [bookTourId, tourId, dispatch]);

  const bookTourData = bookTour;
  const tour = tours.find((item) => item._id === tourId);

  const handleMomoPayment = async () => {
    if (!userId || !bookTourId) {
      setModalMessage("Thiếu thông tin thanh toán MOMO.");
      setShowModal(true);
      return;
    }

    const momoData = { BookTourId: bookTourId, UserId: userId };

    try {
      const momoResult = await dispatch(processMomoPayment(momoData));
      if (momoResult?.payload?.payUrl) {
        window.location.href = momoResult.payload.payUrl;
      } else {
        setModalMessage("Không nhận được đường dẫn thanh toán MOMO.");
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage("Có lỗi xảy ra khi xử lý thanh toán MOMO.");
      setShowModal(true);
    }
  };

  const handleOfflinePayment = async () => {
    if (!userId || !bookTourId || !tour || !bookTourData) {
      setModalMessage("Thiếu thông tin thanh toán OFFLINE.");
      setShowModal(true);
      return;
    }

    const amount = bookTourData.TotalPrice;

    const paymentData = {
      BookTourId: bookTourId,
      UserId: userId,
      PaymentMethod: "OFFLINE",
      PaymentStatus: paymentStatus,
      tourName: tour.TourName,
      Amount: amount,
    };

    try {
      const result = await dispatch(createPayment(paymentData));
      if (result?.payload?.errCode === 0) {
        setModalMessage("Thanh toán tại quầy đã được ghi nhận. Vui lòng đến quầy để hoàn tất.");
      } else {
        setModalMessage("Có lỗi xảy ra khi tạo thanh toán OFFLINE.");
      }
      setShowModal(true);
    } catch (error) {
      setModalMessage("Có lỗi xảy ra khi xử lý thanh toán OFFLINE.");
      setShowModal(true);
    }
  };

  const handleCreatePayment = () => {
    if (paymentMethod === "MOMO") {
      handleMomoPayment();
    } else if (paymentMethod === "OFFLINE") {
      handleOfflinePayment();
    } else {
      setModalMessage("Vui lòng chọn hình thức thanh toán hợp lệ.");
      setShowModal(true);
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={styles.banner}>
        <div className={styles.blockImage}>
          <Image
            src={
              "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/vu/assets/Images/logo.webp"
            }
            alt="Logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.blockTitle}>
          <h2 className={styles.title}>Thanh Toán</h2>
        </div>
      </div>

      {loading && <p>Đang tải...</p>}
      {error && <p style={{ color: "red" }}>Có lỗi xảy ra: {error}</p>}

      <div className={styles.row}>
        <span className={styles.label}><UserOutlined /> Username:</span>
        <span className={styles.value}>{userDetails?.UserName || "Loading..."}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}><MailOutlined /> Email:</span>
        <span className={styles.value}>{userDetails?.Email || "Loading..."}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}><PhoneOutlined /> Phone:</span>
        <span className={styles.value}>{userDetails?.Phone || "Loading..."}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}><ProfileOutlined /> Tên tour:</span>
        <span className={styles.value}>{tour ? tour.TourName : "Loading..."}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}><DollarOutlined /> Số tiền:</span>
        <span className={styles.value}>{bookTourData?.TotalPrice ? `${bookTourData.TotalPrice} $` : "Loading..."}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}><CreditCardOutlined /> Hình thức thanh toán:</span>
        <select
          className={styles.select}
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="MOMO">MOMO</option>
          <option value="OFFLINE">Thanh toán tại quầy</option>
        </select>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Trạng thái:</span>
        <span className={styles.value}>{paymentStatus ? "Đã thanh toán" : "Chưa thanh toán"}</span>
      </div>

      <div className={styles.paymentButtons}>
        <motion.button
          className={styles.payButton}
          onClick={handleCreatePayment}
          disabled={loading || !userId || !bookTourId || !tour || !bookTourData}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
        >
          {loading ? "Đang xử lý..." : "Thanh Toán"}
        </motion.button>
      </div>

      {/* Modal for notifications */}
      {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} onConfirm={() => setShowModal(false)} />}
    </motion.div>
  );
};

export default PaymentForm;