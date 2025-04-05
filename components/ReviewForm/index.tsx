"use client";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '@/redux/slices/reviewsSlice';
import { RootState, AppDispatch } from '@/redux/store';
import styles from './styles.module.scss';
import { createReviewThunk } from '@/redux/slices/reviewsSlice';
import { useParams } from "next/navigation";

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

  const params = useParams();
  const tourId = params?.id as string;

  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored User:", storedUser); 

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log("Parsed User:", parsedUser); 
      setUserId(parsedUser._id); 
      setUserName(parsedUser.UserName || "Anonymous"); 
    }
  }, []);

  const [randomAvatar, setRandomAvatar] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    setRandomAvatar(getRandomAvatar());
  }, []);

  const handleSubmit = async () => {
    if (!tourId || !userId) return;

    try {
      const newReview = {
        TourId: tourId,
        UserId: userId,
        UserName: userName,
        avatar: randomAvatar || undefined,
        Title: title,
        Comment: comment,
        Rating: rating,
      };

      await dispatch(createReviewThunk(newReview)).unwrap();

      setTitle('');
      setComment('');
      setRating(0);

      dispatch(fetchReviews(currentPage));
    } catch (err: any) {
      console.error('Error creating review:', err);
      alert(err.message || 'Failed to submit review!');
    }
  };

  if (!randomAvatar) return null; 

  return (
    <form className={styles.reviewForm}>
      <h2 className={styles.reviewForm__title}>Tour Reviews</h2>

      <div className={styles.reviewForm__user}>
        <img
          src={randomAvatar}
          alt="Avatar"
          className={styles.reviewForm__avatar}
        />
        <span><strong>{userName}</strong></span> 
      </div>

      <div className={styles.reviewForm__stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`${styles.star} ${star <= rating ? styles.active : ''}`}
            onClick={() => setRating(star === rating ? star - 1 : star)}
            style={{ cursor: 'pointer' }}
          >
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
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience..."
          rows={4}
          className={styles.reviewForm__textarea}
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className={styles.reviewForm__button}
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
