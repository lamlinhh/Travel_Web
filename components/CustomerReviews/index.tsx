import ReviewCard from "../ReviewCard";
import styles from "./styles.module.scss";
const reviews = [
  {
    avatar:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fc_pad%2Cw_400%2Fv1737656275%2Fnextravel%2Ftravelers%2Fpexels-pawan-yadav-1321878-2577274_v3fgsy.jpg&w=128&q=75",
    name: "Greyson Decker",
    title: "Clean Cabin, Good Service",
    rating: 5,
    content:
      "The journey on the Lotus Train was characterized by a clean cabin and commendable service from the crew....",
  },
  {
    avatar:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fc_pad%2Cw_400%2Fv1737656270%2Fnextravel%2Ftravelers%2Fpexels-ionelceban-2577440_lpfpbd.jpg&w=128&q=75",
    name: "Grace Houston",
    title: "Coastal to Capital: A Seamless Journey",
    rating: 5,
    content:
      "The journey from Da Nang’s coastal charm to the vibrant streets of Hanoi is made delightful aboard the Lotus Train...",
  },
  {
    avatar:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fc_pad%2Cw_400%2Fv1737656271%2Fnextravel%2Ftravelers%2Fpexels-te-lensfix-380994-1371360_bu9hxg.jpg&w=64&q=75",
    name: "Lara Mcleod",
    title: "Scenic Serenity on Rails",
    rating: 5,
    content:
      "Traversing from the historic city of Hue to the bustling capital, Hanoi, the Lotus Train offers a harmonious blend of...",
  },
];

const CustomerReviews = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Customer reviews</h2>
      <a href="#" className={styles.viewAll}>
        View all reviews →
      </a>
      <div className={styles.reviewGrid}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
