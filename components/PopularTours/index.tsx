"use client";

import { fetchTours } from "@/redux/slices/tourSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PopularTours = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tours } = useSelector((state: RootState) => state.tour);
  const router = useRouter();

  const handleTourClick = (tourID: any) => {
    router.push(`/TourDetail/${tourID}`);
  };

  useEffect(() => {
    dispatch(fetchTours(1));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Tours</h2>

      <Link href="/Tours" className={styles.viewAll}>
        View all tour →
      </Link>

      <div className={styles.grid}>
        {tours?.slice(0, 6).map((tour, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleTourClick(tour._id)}
          >
            <div className={styles.imageContainer}>
              <img src={tour.Image} alt={tour.TourName} className={styles.image} />
            </div>
            <div className={styles.content}>
              <p className={styles.location}>
                <FaMapMarkerAlt /> {tour?.TourLocation}
              </p>
              <h3 className={styles.titleCard}>{tour?.TourName}</h3>
              <div className={styles.rating}>
                {Array.from({ length: tour?.TotalRating ?? 0 }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className={styles.price}>from ${tour?.TourPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTours;