<<<<<<< HEAD
"use client";

import { useState } from "react";
import { ReviewProps } from "@/types/ReviewProps";
import styles from "./styles.module.scss";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const ReviewCard = ({
  avatar,
  UserName,
  Title,
  Rating,
  Comment = "",
}: ReviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldTruncate = Comment.length > 100;

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

  const [randomAvatar] = useState(() => getRandomAvatar());

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img
          src={avatar || randomAvatar}
          alt={UserName}
          className={styles.avatar}
        />
        <h3 className={styles.UserName}>{UserName}</h3>
      </div>

      <h4 className={styles.Title}>{Title}</h4>

      <div className={styles.Rating}>
        {"⭐".repeat(Rating || 0)}
      </div>

      <p className={styles.Comment}>
        {isExpanded
          ? Comment
          : Comment.slice(0, 100) + (shouldTruncate ? "..." : "")}
      </p>

      {shouldTruncate && (
        <div className={styles.BlockReadMore}>
          <button onClick={toggleContent} className={styles.readMore}>
            <span>{isExpanded ? "Read less" : "Read more"}</span>
            {isExpanded ? (
              <HiChevronUp size={20} color="gray" />
            ) : (
              <HiChevronDown size={20} color="gray" />
            )}
          </button>
        </div>
      )}
=======
import { ReviewProps } from "@/types/ReviewProps";
import styles from "./styles.module.scss";

const ReviewCard = ({ avatar, name, title, rating, content }: ReviewProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.name}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <h3 className={styles.name}>{name}</h3>
      </div>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.rating}>{"⭐".repeat(rating)}</div>
      <p className={styles.content}>{content}</p>
      <a href="#" className={styles.readMore}>
        Read more v
      </a>
>>>>>>> 38ae0f2e7e9c5029da5b34db238a3d4841cb457d
    </div>
  );
};

export default ReviewCard;
