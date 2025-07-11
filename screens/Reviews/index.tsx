"use client";
import JapanReviews from "@/assets/Images/japan_reviews_gzqch8.webp";
import ReviewsForPageReviews from "@/components/ReviewsForPageReviews";
import { Area, Block, Text, Yard } from "@/libs";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

const Reviews = () => {
  return (
    <div className={styles.container}>
      <Yard className={styles.nav}>
        <Image
          src={JapanReviews}
          alt="JapanReviews"
          className={styles.nav_img}
        />
        <Block className={styles.nav_text}>
          <Text className={styles.navTitleText}>Customer Reviews</Text>
          <Text className={styles.navContentText}>
            Real feedback from our travelers
          </Text>
        </Block>
      </Yard>

      <Yard className={styles.content}>
        <Area className={styles.topArea}>
          <Text className={styles.titleContent}>
            Glimpse the joy of real travelers here
          </Text>
        </Area>

        <Area className={styles.bottomArea}>
          <ReviewsForPageReviews />
        </Area>
      </Yard>
    </div>
  );
};

export default Reviews;
