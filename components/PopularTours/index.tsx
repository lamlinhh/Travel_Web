import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./styles.module.scss";

const tours = [
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/red-telephone-booth_lt9tej.webp",
    location: "Paris, France",
    title: "Cannes and Antibes Night Tour",
    rating: 4,
    reviews: 6,
    price: "$60",
    tag: "Likely to Sell Out",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/Venice_cldsgh.webp",
    location: "Venice, Italy",
    title: "Vinecy and Toul Night Tour",
    rating: 5,
    reviews: 9,
    price: "$215",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/aquairum_f72yqn.webp",
    location: "Nha Trang, Vietnam",
    title: "Discover Nha Trang Diving Tour",
    rating: 3,
    reviews: 6,
    price: "$125",
    tag: "Likely to Sell Out",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/dubai_xgjtjo.webp",
    location: "Dubai, United Arab Emirates",
    title: "Dubai full day city tour",
    rating: 5,
    reviews: 6,
    price: "$35",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/honolulu_wut943.webp",
    location: "Honolulu, Hawaii",
    title: "Honolulu City Highlights Tour",
    rating: 5,
    reviews: 6,
    price: "$35",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/safari_tour_ktychp.webp",
    location: "Arusha, Tanzania",
    title: "Safari Adventure Tour",
    rating: 5,
    reviews: 6,
    price: "$35",
  },
];

const PopularTours = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Tours</h2>
      
      <a href="#" className={styles.viewAll}>
        View all tour →
      </a>
      <div className={styles.grid}>
        {tours.map((tour, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={tour.image} alt={tour.title} className={styles.image} />
              {tour.tag && <span className={styles.tag}>{tour.tag}</span>}
            </div>
            <div className={styles.content}>
              <p className={styles.location}>
                <FaMapMarkerAlt /> {tour.location}
              </p>
              <h3 className={styles.titleCard}>{tour.title}</h3>
              <div className={styles.rating}>
                {Array.from({ length: tour.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
                <span> {tour.reviews}</span>
              </div>
              <p className={styles.price}>from {tour.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTours;
