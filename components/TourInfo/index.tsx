"use client";
import { Area, Block, Text, Yard } from "@/libs";
import styles from "./styles.module.scss";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const TourInfo = () => {
  const totalStars = 5;
  const { tourDetail } = useSelector((state: RootState) => state.tourDetail);

  return (
    <Yard className={styles.content}>
      <Area className={styles.tourInfo}>
        <Block className={styles.tourinfoName}>
          <Text fontSize={"24px"} bold>
            {tourDetail?.TourName}
          </Text>
          <div className={styles.review}>
            <span className={styles.rating}>
              {[...Array(totalStars)].map((_, index) => (
                <FaStar
                  key={index}
                  color={index < (tourDetail?.Rating ?? 0) ? "gold" : "gray"}
                />
              ))}
            </span>
          </div>
        </Block>
      </Area>
    </Yard>
  );
};

export default TourInfo;
