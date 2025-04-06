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
import { useEffect, useState } from "react";

const TourDetail = () => {
    // Mock tour data for testing - this should be replaced with actual API call
    const [tourData, setTourData] = useState({
        id: "67d04be19fa89cc86085404b",
        name: "Ha Long Bay Premium Tour",
        price: 150 // $150 per adult
    });

    useEffect(() => {
        // TODO: Fetch tour data from API
        // const fetchTourData = async () => {
        //     const response = await fetch(`/api/tours/${tourId}`);
        //     const data = await response.json();
        //     setTourData(data);
        // };
        // fetchTourData();
    }, []);

    return (
        <div className={styles.container}>
            <BreadcrumbHeader />
            <TourInfo />
            <TourBooking tourData={tourData} />
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
                    <ReviewsForTour tourId={tourData.id} />
                </Block>
            </Section>
        </div>
    );
};

export default TourDetail;
