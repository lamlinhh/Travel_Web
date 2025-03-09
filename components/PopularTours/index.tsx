import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./styles.module.scss";

const tours = [
  {
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fv1737605324%2Fnextravel%2Fred-telephone-booth_lt9tej.jpg&w=750&q=75",
    location: "Paris, France",
    title: "Cannes and Antibes Night Tour",
    rating: 4,
    reviews: 6,
    price: "$60",
    tag: "Likely to Sell Out",
  },
  {
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fv1737605686%2Fnextravel%2FVenice_cldsgh.jpg&w=640&q=75",
    location: "Venice, Italy",
    title: "Vinecy and Toul Night Tour",
    rating: 5,
    reviews: 9,
    price: "$215",
  },
  {
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fc_crop%2Car_4%3A3%2Fv1737605877%2Fnextravel%2Faquairum_f72yqn.jpg&w=1080&q=75",
    location: "Nha Trang, Vietnam",
    title: "Discover Nha Trang Diving Tour",
    rating: 3,
    reviews: 6,
    price: "$125",
    tag: "Likely to Sell Out",
  },
  {
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fv1737606264%2Fnextravel%2Fdubai_xgjtjo.jpg&w=750&q=75",
    location: "Dubai, United Arab Emirates",
    title: "Dubai full day city tour",
    rating: 5,
    reviews: 6,
    price: "$35",
  },
  {
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fv1739255468%2Fnextravel%2Fhonolulu_wut943.jpg&w=828&q=75",
    location: "Honolulu, Hawaii",
    title: "Honolulu City Highlights Tour",
    rating: 5,
    reviews: 6,
    price: "$35",
  },
  {
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Ft_blog1%2Fv1739255260%2Fnextravel%2Fsafari_tour_ktychp.jpg&w=750&q=75",
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
        View all tours →
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
