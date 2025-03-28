"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "@/redux/slices/reviewsSlice";
import { RootState, AppDispatch } from "@/redux/store";
import ReviewCard from "../ReviewCard";
import styles from "./styles.module.scss";

const CustomerReviews = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { reviews, loading, error } = useSelector((state: RootState) => state.review);

  useEffect(() => {
    dispatch(fetchReviews(1)); // Luôn lấy dữ liệu trang đầu tiên
  }, [dispatch]);

  if (loading) return <div>Loading reviews...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Customer reviews</h2>
      <a href="#" className={styles.viewAll}>
        View all reviews →
      </a>
      <div className={styles.reviewGrid}>
        {reviews.length > 0 ? (
          reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review._id?.toString()} {...review} />
          ))
        ) : (
          <div>No reviews found.</div>
        )}
      </div>
    </div>
  );
};

export default CustomerReviews;
