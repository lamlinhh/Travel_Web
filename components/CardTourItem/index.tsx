"use client";

import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import styles from "./styles.module.scss";

type Tour = {
  _id?: string;
  Image?: string;
  TourName?: string;
  TourLocation?: string;
  TotalRating?: number;
  DescribeTour?: string;
  TourPrice?: number;
};

const CardTourItem = ({ tour }: { tour: Tour }) => {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      onClick={() => router.push(`/TourDetail/${tour._id}`)}
    >
      <div className={styles.imageContainer}>
        <img src={tour.Image} alt={tour.TourName} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.rating}>
          <p className={styles.location}>
            <FaMapMarkerAlt /> {tour.TourLocation}
          </p>
          <div className={styles.blockRating}>
            {Array.from({ length: tour.TotalRating ?? 0 }, (_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
        <h3 className={styles.titleCard}>{tour.TourName}</h3>
        <span className={styles.description}>{tour.DescribeTour}</span>
        <p className={styles.price}>From ${tour.TourPrice}</p>
      </div>
    </div>
  );
};

export default CardTourItem;
