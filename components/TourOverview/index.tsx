"use client";
import { Area, Block, Text, Yard } from "@/libs";
import {
    HiOutlineInformationCircle,
    HiOutlineTrendingUp,
    HiOutlineUser,
    HiOutlineGlobeAlt,
    HiOutlineCheckCircle,
    HiOutlineLocationMarker,
    HiOutlineCalendar,
} from "react-icons/hi";
import styles from "./styles.module.scss";
import Link from "next/link";

const tourData = {
    difficulty: "Medium",
    minAge: 10,
    experience: "Explore the crystal-clear blue sea and white sandy beaches of Phu Quoc.",
    services: "Round-trip airfare, 4-star hotel, meals, and island tour.",
    location: "https://goo.gl/maps/abcxyz123",
    itinerary: [
        { day: 1, description: "Guest pickup - Visit Vinpearl." },
        { day: 2, description: "Scuba diving - Relax at the resort." },
    ],
};

const TourOverview = () => {
    return (
        <Yard className={styles.overviewWrapper}>
            <Area className={styles.overviewContainer}>
                <Block className={styles.tourdetail}>
                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineTrendingUp size={24} color="#ffa500" />
                            <h1>Difficulty</h1>
                        </div>
                        <div className={styles.difficultyLevels}>
                            <div className={`${styles.levelBox} ${styles.easy}`}>Easy</div>
                            <div className={`${styles.levelBox} ${styles.active} ${styles.medium}`}>{tourData.difficulty}</div>
                            <div className={`${styles.levelBox} ${styles.hard}`}>Hard</div>
                        </div>
                    </div>

                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineUser size={24} color="#ffa500" />
                            <h1>Min Age</h1>
                        </div>
                        <Text className={styles.text}>{tourData.minAge} Age</Text>
                    </div>
                </Block>

                <Block className={styles.tourIntro}>
                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineGlobeAlt size={24} color="#ffa500" />
                            <h1>Travel Experience:</h1>
                        </div>
                        <Text className={styles.overviewText}>{tourData.experience}</Text>
                    </div>
                </Block>

                <Block className={styles.tourIntro}>
                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineCheckCircle size={24} color="#ffa500" />
                            <h1>Included Services:</h1>
                        </div>
                        <Text className={styles.overviewText}>{tourData.services}</Text>
                    </div>
                </Block>

                <Block className={styles.tourIntro}>
                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineLocationMarker size={24} color="#ffa500" />
                            <h1>Location Map:</h1>
                        </div>
                        <Text className={styles.overviewText}>
                            <Link href={tourData.location} target="_blank" rel="noopener noreferrer">Google Maps Link</Link>
                        </Text>
                    </div>
                </Block>

                <Block className={styles.tourIntro}>
                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineCalendar size={24} color="#ffa500" />
                            <h1>Trip Itinerary:</h1>
                        </div>
                        <div className={styles.overviewText}>
                            <ul>
                                {tourData.itinerary.map((item, index) => (
                                    <li key={index}>
                                        <strong>Day {item.day}:</strong> {item.description}
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
