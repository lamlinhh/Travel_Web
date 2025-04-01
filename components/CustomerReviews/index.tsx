<<<<<<< HEAD
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

=======
import ReviewCard from "../ReviewCard";
import styles from "./styles.module.scss";
const reviews = [
  {
    avatar:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/pexels-pawan-yadav-1321878-2577274_v3fgsy.webp",
    name: "Greyson Decker",
    title: "Clean Cabin, Good Service",
    rating: 5,
    content:
      "The journey on the Lotus Train was characterized by a clean cabin and commendable service from the crew....",
  },
  {
    avatar:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/pexels-ionelceban-2577440_lpfpbd.webp",
    name: "Grace Houston",
    title: "Coastal to Capital: A Seamless Journey",
    rating: 5,
    content:
      "The journey from Da Nang’s coastal charm to the vibrant streets of Hanoi is made delightful aboard the Lotus Train...",
  },
  {
    avatar:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/pexels-te-lensfix-380994-1371360_bu9hxg.webp",
    name: "Lara Mcleod",
    title: "Scenic Serenity on Rails",
    rating: 5,
    content:
      "Traversing from the historic city of Hue to the bustling capital, Hanoi, the Lotus Train offers a harmonious blend of...",
  },
];

const CustomerReviews = () => {
>>>>>>> 38ae0f2e7e9c5029da5b34db238a3d4841cb457d
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Customer reviews</h2>
      <a href="#" className={styles.viewAll}>
        View all reviews →
      </a>
      <div className={styles.reviewGrid}>
<<<<<<< HEAD
        {reviews.length > 0 ? (
          reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review._id?.toString()} {...review} />
          ))
        ) : (
          <div>No reviews found.</div>
        )}
=======
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
>>>>>>> 38ae0f2e7e9c5029da5b34db238a3d4841cb457d
      </div>
    </div>
  );
};

export default CustomerReviews;
