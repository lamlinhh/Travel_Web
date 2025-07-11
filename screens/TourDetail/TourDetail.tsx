"use client";
import ReviewForm from "@/components/ReviewForm";
import ReviewsForTour from "@/components/ReviewsForTour";
import TourBooking from "@/components/TourBooking";
import TourFeatures from "@/components/TourFeatures";
import TourInfo from "@/components/TourInfo";
import TourOverview from "@/components/TourOverview";
import { Block, Section } from "@/libs";
import styles from "./styles.module.scss";

const TourDetail = () => {
  return (
    <div className={styles.container}>
      <TourInfo />
      <TourBooking />
      <TourFeatures />
      <Section className={styles.sectiontop}>
        <Block className={styles.blockleft}>
          <TourOverview />
        </Block>
        <Block className={styles.blockright}>
          <ReviewForm />
        </Block>
      </Section>
      <Section className={styles.sectionbottom}>
        <Block className={styles.blocktop}>
          <h1>Tour Reviews</h1>
        </Block>
        <Block className={styles.blockbottom}>
          <ReviewsForTour />
        </Block>
      </Section>
    </div>
  );
};

export default TourDetail;