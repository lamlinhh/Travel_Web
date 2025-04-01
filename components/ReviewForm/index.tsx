"use client";

import { createReviewThunk, fetchReviews } from "@/redux/slices/reviewsSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";

const defaultAvatars = [
  "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/th.webp",
  "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/cat2.webp",
  "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/cat3.webp",
  "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/cat4.webp",
  "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/cat5.webp",
];

const getRandomAvatar = () => {
  const randomIndex = Math.floor(Math.random() * defaultAvatars.length);
  return defaultAvatars[randomIndex];
};

const ReviewForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentPage } = useSelector((state: RootState) => state.review);

  const [randomAvatar, setRandomAvatar] = useState<string | null>(null);
  const [userName, setUserName] = useState("QuangHau");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    setRandomAvatar(getRandomAvatar());
  }, []);

  const handleSubmit = async () => {
    try {
      const newReview = {
        TourId: "67d04be19fa89cc86085404b",
        UserId: "67d81b9dab7c48f921c70973",
        UserName: userName,
        avatar: randomAvatar || undefined,
        Title: title,
        Comment: comment,
        Rating: rating,
      };

      await dispatch(createReviewThunk(newReview)).unwrap();

      // Reset form sau khi gửi thành công
      setTitle("");
      setComment("");
      setRating(0);

      // Cập nhật danh sách review
      dispatch(fetchReviews(currentPage));
    } catch (err: any) {
      console.error("Error creating review:", err);
      alert(err.message || "Failed to submit review!");
    }
  };

  if (!randomAvatar) return null; // loading avatar

  return (
    <form className={styles.reviewForm}>
      <h2 className={styles.reviewForm__title}>Tour Reviews</h2>

      <div className={styles.reviewForm__user}>
        <img
          src={randomAvatar}
          alt="Avatar"
          className={styles.reviewForm__avatar}
        />
        <span>
          <strong>{userName}</strong>
        </span>
      </div>

      <div className={styles.reviewForm__stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`${styles.star} ${star <= rating ? styles.active : ""}`}
            onClick={() => setRating(star === rating ? star - 1 : star)}
            style={{ cursor: "pointer" }}>
            ★
          </span>
        ))}
      </div>

      <div className={styles.reviewForm__group}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Input title..."
          className={styles.reviewForm__input}
        />
      </div>

      <div className={styles.reviewForm__group}>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => {
            console.log(e.target.value.length); // Kiểm tra độ dài
            setComment(e.target.value);
          }}
          placeholder="Share your experience..."
          rows={4}
          className={styles.reviewForm__textarea}
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className={styles.reviewForm__button}>
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
