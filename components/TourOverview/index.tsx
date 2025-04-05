"use client";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchTourDetailByTourId } from "@/redux/slices/tourDetailSlice";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { HiOutlineGlobeAlt, HiOutlineCheckCircle, HiOutlineTrendingUp, HiOutlineUser, HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import { Area, Block, Text, Yard } from "@/libs";
import Link from "next/link";
import styles from "./styles.module.scss";

const TourOverview = () => {
    const { selected, loading, error } = useSelector((state: RootState) => state.tourDetail);
    const dispatch = useDispatch<AppDispatch>();
    const params = useParams();
    const tourId = params?.id as string;

    const [tourDetails, setTourDetails] = useState<any>(null);

    useEffect(() => {
        if (tourId) {
            dispatch(fetchTourDetailByTourId(tourId));
        }
    }, [tourId, dispatch]);

    useEffect(() => {
        if (selected) {
            setTourDetails(selected);
        }
    }, [selected]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!tourDetails) return <div>No tour details found.</div>;

    return (
        <Yard className={styles.overviewWrapper}>
            <Area className={styles.overviewContainer}>
                {/* Difficulty */}
                <Block className={styles.tourdetail}>
                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineTrendingUp size={24} color="#ffa500" />
                            <h1>Difficulty</h1>
                        </div>
                        <div className={styles.difficultyLevels}>
                            <div className={`${styles.levelBox} ${tourDetails.TourId.TourDifficulty === 'Easy' ? styles.active : styles.easy}`}>
                                Easy
                            </div>
                            <div className={`${styles.levelBox} ${tourDetails.TourId.TourDifficulty === 'Medium' ? styles.active : styles.medium}`}>
                                Medium
                            </div>
                            <div className={`${styles.levelBox} ${tourDetails.TourId.TourDifficulty === 'Hard' ? styles.active : styles.hard}`}>
                                Hard
                            </div>
                        </div>
                    </div>

                    {/* Min Age */}
                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineUser size={24} color="#ffa500" />
                            <h1>Min Age</h1>
                        </div>
                        <Text className={styles.text}>{tourDetails.TourId.TourMinAge} Age</Text>
                    </div>
                </Block>

                {/* Travel Experience */}
                <Block className={styles.tourIntro}>
                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineGlobeAlt size={24} color="#ffa500" />
                            <h1>Travel Experience:</h1>
                        </div>
                        <Text className={styles.overviewText}>{tourDetails.Des_Enjoy}</Text>
                    </div>
                </Block>

                {/* Included Services */}
                <Block className={styles.tourIntro}>
                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineCheckCircle size={24} color="#ffa500" />
                            <h1>Included Services:</h1>
                        </div>
                        <Text className={styles.overviewText}>{tourDetails.Des_Included}</Text>
                    </div>
                </Block>

                {/* Location Map */}
                <Block className={styles.tourIntro}>
                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineLocationMarker size={24} color="#ffa500" />
                            <h1>Location Map:</h1>
                        </div>
                        <Text className={styles.overviewText}>
                            <Link href={tourDetails.Des_Map} target="_blank" rel="noopener noreferrer">
                                Google Maps Link
                            </Link>
                        </Text>
                    </div>
                </Block>

                {/* Trip Itinerary */}
                <Block className={styles.tourIntro}>
                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineCalendar size={24} color="#ffa500" />
                            <h1>Trip Itinerary:</h1>
                        </div>
                        <div className={styles.overviewText}>
                            <ul>
                                {tourDetails.Des_Itinerary.split("\n").map((item: string, index: number) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Block>
            </Area>
        </Yard>
    );
};

export default TourOverview;
