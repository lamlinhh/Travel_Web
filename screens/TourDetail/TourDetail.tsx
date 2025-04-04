"use client";
import ReviewForm from "@/components/ReviewForm";
import ReviewsForTour from "@/components/ReviewsForTour";
import TourBooking from "@/components/TourBooking";
import TourFeatures from "@/components/TourFeatures";
import TourInfo from "@/components/TourInfo";
import TourOverview from "@/components/TourOverview";
import { Block, Section } from "@/libs";
import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { fetchTourDetail } from "@/redux/slices/tourDetail";

const TourDetail = () => {
  const { id } = useParams() as { id?: string };
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(fetchTourDetail(id as string));
    }
  }, []);
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
          <ReviewsForTour tourId="67d04be19fa89cc86085404b" />
        </Block>
      </Section>
    </div>
  );
};

export default TourDetail;
