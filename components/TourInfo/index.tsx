"use client";

import { fetchTour } from "@/redux/slices/tourSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { useParams } from "next/navigation";

const TourInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedTour } = useSelector((state: RootState) => state.tour);
  const params = useParams();
  const tourId = params?.id as string;

  useEffect(() => {
    if (tourId) dispatch(fetchTour(tourId));
  }, [dispatch, tourId]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className={styles.starIcon} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className={styles.starIcon} />);
      } else {
        stars.push(<FaRegStar key={i} className={styles.starIcon} />);
      }
    }

    return stars;
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.grid}>
        {selectedTour && (
          <>
            <div className={styles.ratingCard}>
              <div className={styles.ratingSimple}>
                <span className={styles.ratingNumber}>
                  {selectedTour.TotalRating?.toFixed(1) ?? "0.0"}
                </span>
                {renderStars(selectedTour.TotalRating ?? 0)}
              </div>
            </div>
            <div className={styles.nameCard}>
              <h3 className={styles.titleCard}>{selectedTour.TourName}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TourInfo;
