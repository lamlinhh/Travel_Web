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
    </div>
  );
};

export default ReviewCard;
