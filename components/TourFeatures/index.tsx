"use client";
import { Area, Block, Yard } from "@/libs";
import styles from "./styles.module.scss";
import {  FaClock, FaShuttleVan, FaMobileAlt } from "react-icons/fa";



const TourFeatures = () => {
    return (
        <Yard className={styles.features}>
                <Area className={styles.tourFeatures}>
                    <Block className={styles.featureItem}>
                        <FaClock className={styles.icon} />
                        <span>3 hours</span>
                    </Block>
                    <Block className={styles.featureItem}>
                        <FaShuttleVan className={styles.icon} />
                        <span>Pickup offers</span>
                    </Block>
                    <Block className={styles.featureItem}>
                        <FaMobileAlt className={styles.icon} />
                        <span>Mobile ticket</span>
                    </Block>
                </Area>
            </Yard>
    )
}
export default TourFeatures;