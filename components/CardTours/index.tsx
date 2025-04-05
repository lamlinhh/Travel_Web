import { fetchTours } from "@/redux/slices/tourSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const CardTour = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tours } = useSelector((state: RootState) => state.tour);
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  const handleTourClick = (tourID: any) => {
    router.push(`/TourDetail/${tourID}`);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.grid}>
        {tours?.map((tour, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => {
              handleTourClick(tour?._id);
            }}>
            <div className={styles.imageContainer}>
              <img src={tour.image} alt={tour.TourName} className={styles.image} />
            </div>
            <div className={styles.content}>
              <p className={styles.location}>
                <FaMapMarkerAlt /> {tour?.TourLocation}
              </p>
              <h3 className={styles.titleCard}>{tour?.TourName}</h3>
              <div className={styles.rating}>
                {Array.from({ length: tour?.Rating ?? 0 }, (_, i) => (
                  <FaStar key={i} />
                ))}
                <span> {tour?.DescribeTour}</span>
              </div>
              <p className={styles.price}>from ${tour?.TourPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTour;
