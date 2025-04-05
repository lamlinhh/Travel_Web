"use client";
import styles from "./styles.module.scss";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import TourInfo from "@/components/TourInfo";
import TourBooking from "@/components/TourBooking";
import TourFeatures from "@/components/TourFeatures";
import TourOverview from "@/components/TourOverview";
import ReviewForm from "@/components/ReviewForm";
import ReviewsForTour from "@/components/ReviewsForTour"
import { Section, Block } from "@/libs";

const TourDetail = () => {

    return (
        <div className={styles.container}>
            <BreadcrumbHeader />
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
                    <ReviewsForTour tourId="67efb56855121a3862121cd4" />
                </Block>
            </Section>
        </div>
    );
};

export default TourDetail;
