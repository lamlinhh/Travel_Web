"use client";
import { useState } from "react";
import { ReviewProps } from "@/types/ReviewProps";
import styles from "./styles.module.scss";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const ReviewCard = ({ avatar, name, title, rating, content }: ReviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.name}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <h3 className={styles.name}>{name}</h3>
      </div>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.rating}>{"⭐".repeat(rating)}</div>

      <p className={styles.content}>
        {isExpanded ? content : content.slice(0, 100) + (content.length > 100 ? "..." : "")}
      </p>

      {content.length > 100 && (
        <button onClick={toggleContent} className={styles.readMore}>
          <span>{isExpanded ? "Read less" : "Read more"}</span>
          {isExpanded ? (
            <HiChevronUp size={20} color="gray" />
          ) : (
            <HiChevronDown size={20} color="gray" />
          )}
        </button>
      )}
    </div>
  );
};

export default ReviewCard;
