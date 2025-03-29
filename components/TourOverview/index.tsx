"use client";
import { Area, Block, Text, Yard } from "@/libs";
import { HiOutlineInformationCircle, HiOutlineTrendingUp, HiOutlineUser } from "react-icons/hi";
import styles from "./styles.module.scss";

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
                            <div className={`${styles.levelBox} ${styles.active} ${styles.medium}`}>Medium</div>
                            <div className={`${styles.levelBox} ${styles.hard}`}>Hard</div>
                        </div>
                    </div>

                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineUser size={24} color="#ffa500" />
                            <h1>Min Age</h1>
                        </div>
                        <Text className={styles.text}>
                            10 Age
                        </Text>
                    </div>
                </Block>
                
                <Block className={styles.tourIntro}>
                    <div className={styles.overviewContent}>
                        <div className={styles.iconAndTitle}>
                            <HiOutlineInformationCircle size={24} color="#ffa500" />
                            <h1>Overview</h1>
                        </div>
                        <Text className={styles.overviewText}>
                            Canada is a vast and diverse country offering an unforgettable tour experience for travelers seeking natural beauty, vibrant cities, and rich cultural heritage. From the majestic Rocky Mountains in Alberta to the breathtaking Niagara Falls in Ontario, Canada’s landscapes are truly awe-inspiring. Visitors can explore cosmopolitan cities like Toronto, Vancouver, and Montreal, each known for its unique charm, culinary scene, and multicultural atmosphere. Outdoor enthusiasts can enjoy activities such as hiking, skiing, kayaking, and wildlife watching in pristine national parks. A Canada tour also offers opportunities to experience indigenous cultures, historic sites, and the magical Northern Lights in the Yukon or Northwest Territories. Whether you’re an adventure seeker or a leisure traveler, Canada promises a journey filled with wonder and discovery.
                        </Text>
                    </div>
                </Block>
            </Area>
        </Yard>
    )
}
export default TourOverview;