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
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  DollarOutlined,
  ProfileOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
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
      setModalMessage("Missing MOMO payment information.");
      setShowModal(true);
      return;
    }

    const momoData = { BookTourId: bookTourId, UserId: userId };

    try {
      const momoResult = await dispatch(processMomoPayment(momoData));
      if (momoResult?.payload?.payUrl) {
        window.location.href = momoResult.payload.payUrl;
      } else {
        setModalMessage("Could not retrieve MOMO payment URL.");
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage("An error occurred while processing MOMO payment.");
      setShowModal(true);
    }
  };

  const handleOfflinePayment = async () => {
    if (!userId || !bookTourId || !tour || !bookTourData) {
      setModalMessage("Missing OFFLINE payment information.");
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
        setModalMessage("Your offline payment has been recorded. Please complete payment at the counter.");
      } else {
        setModalMessage("An error occurred while creating the offline payment.");
      }
      setShowModal(true);
    } catch (error) {
      setModalMessage("An error occurred while processing offline payment.");
      setShowModal(true);
    }
  };

  const handleCreatePayment = () => {
    if (paymentMethod === "MOMO") {
      handleMomoPayment();
    } else if (paymentMethod === "OFFLINE") {
      handleOfflinePayment();
    } else {
      setModalMessage("Please select a valid payment method.");
      setShowModal(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.yard}>
        <motion.div
          className={styles.area}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className={styles.banner}>
            <div className={styles.blockImage}>
              <Image
                src="https://raw.githubusercontent.com/lamlinhh/Travel_Web/hau/assets/Images/banner_payment.jpeg"
                alt="Payment Banner"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.blockTitle}>
              <h2 className={styles.title}>PAYMENT FOR TOUR</h2>
            </div>
          </div>

          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}

          <div className={styles.row}>
            <span className={styles.label}>
              <UserOutlined style={{ color: "#e65c2e" }} /> Username:
            </span>
            <span className={styles.value}>{userDetails?.UserName || "Loading..."}</span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>
              <MailOutlined style={{ color: "#e65c2e" }} /> Email:
            </span>
            <span className={styles.value}>{userDetails?.Email || "Loading..."}</span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>
              <PhoneOutlined style={{ color: "#e65c2e" }} /> Phone:
            </span>
            <span className={styles.value}>{userDetails?.Phone || "Loading..."}</span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>
              <ProfileOutlined style={{ color: "#e65c2e" }} /> Tour Name:
            </span>
            <span className={styles.value}>{tour ? tour.TourName : "Loading..."}</span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>
              <DollarOutlined style={{ color: "#e65c2e" }} /> Amount:
            </span>
            <span className={styles.value}>
              {bookTourData?.TotalPrice ? `${bookTourData.TotalPrice} $` : "Loading..."}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>
              <CreditCardOutlined style={{ color: "#e65c2e" }} /> Payment Method:
            </span>
            <select
              className={styles.select}
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="MOMO">MOMO</option>
              <option value="OFFLINE">Pay at Counter</option>
            </select>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>Status:</span>
            <span className={styles.value}>{paymentStatus ? "Paid" : "Unpaid"}</span>
          </div>

          <div className={styles.paymentButtons}>
            <motion.button
              className={styles.payButton}
              onClick={handleCreatePayment}
              disabled={loading || !userId || !bookTourId || !tour || !bookTourData}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
            >
              {loading ? "Processing..." : "Pay Now"}
            </motion.button>
          </div>

          {showModal && (
            <Modal
              message={modalMessage}
              onClose={() => setShowModal(false)}
              onConfirm={() => setShowModal(false)}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentForm;
