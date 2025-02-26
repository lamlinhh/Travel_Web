import React from "react";
import styles from "./About.module.scss";
import bambooForest from "../assets/images/About1.jpg";
import beachImage from "../assets/images/About2.jpg";
import mountainImage from "../assets/images/About3.jpg";
import cityImage from "../assets/images/About4.jpg";
import greatWallImage from "../assets/images/About5.jpg";

const About: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Banner */}
      <section className={styles.banner}>
        <h1>About Us</h1>
      </section>

      {/* Nội dung chính */}
      <section className={styles.aboutSection}>
        <div className={styles.textContainer}>
          <p className={styles.subheading}>Explore the world with us, one adventure at a time.</p>
          <h2>
            The perfect <span className={styles.highlight}>vacation</span> come true with our Travel Agency
          </h2>
          <p>
            We are a team of experienced travel experts who specialize in planning and organizing unforgettable
            travel experiences for our clients with a wide range of services, including flight bookings, hotel
            reservations, and more.
          </p>
          <button className={styles.btn} type="button">MORE INFO</button>
        </div>

        {/* Hình ảnh */}
        <div className={styles.imageContainer}>
          <img src={bambooForest.src} alt="Bamboo Forest" className={styles.mainImage} />
          <div className={styles.decorationImages}>
            <img src={beachImage.src} alt="Beach" className={styles.smallImage} />
            <img src={mountainImage.src} alt="Mountain" className={styles.smallImage} />
            <img src={cityImage.src} alt="City" className={styles.smallImage} />
          </div>
        </div>
      </section>

      {/* Slider hình ảnh */}
      <section className={styles.slider}>
        <img src={greatWallImage.src} alt="Great Wall" className={styles.sliderImage} />
      </section>
    </div>
  );
};

export default About;
