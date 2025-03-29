"use client";
import { Area, Block, Text, Yard } from "@/libs";
import styles from "./styles.module.scss";
import { FaStar } from "react-icons/fa";


const TourInfo = () => {
    const totalStars = 5;
    const filledStars = 4;

    return (
        <Yard className={styles.content}>
            <Area className={styles.tourInfo}>
                <Block className={styles.tourinfoName}>
                    <Text fontSize={"24px"} bold>
                        Cannes and Antibes Night Tour
                    </Text>
                    <div className={styles.review}>
                        <span className={styles.rating}>
                            {[...Array(totalStars)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    color={index < filledStars ? "gold" : "gray"} // 4 sao vàng, 1 sao xám
                                />
                            ))}
                        </span>
                        <span>6 Reviews | Paris, France</span>
                    </div>
                </Block>
            </Area>
        </Yard>
    )
}

export default TourInfo;