"use client";

import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

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
  const [randomAvatar, setRandomAvatar] = useState<string | null>(null);

  useEffect(() => {
    const avatar = getRandomAvatar();
    setRandomAvatar(avatar);
  }, []);

  if (!randomAvatar) return null; // Hoặc có thể render skeleton/loading gì đó

  return (
    <form className={styles.reviewForm}>
      <h2 className={styles.reviewForm__title}>Tour Reviews</h2>

      <div className={styles.reviewForm__user}>
        {/* Avatar user */}
        <img
          src={randomAvatar}
          alt="Avatar"
          className={styles.reviewForm__avatar}
        />
        <span><strong>Name of user</strong></span>
      </div>

      <div className={styles.reviewForm__stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={styles.star}>★</span>
        ))}
      </div>

      <div className={styles.reviewForm__group}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          placeholder="Input title..."
          className={styles.reviewForm__input}
        />
      </div>

      <div className={styles.reviewForm__group}>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          placeholder="Share your experience..."
          rows={4}
          className={styles.reviewForm__textarea}
        />
      </div>

      <button type="button" className={styles.reviewForm__button}>
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
