import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import ChiangMai from "@/public/assets/ImageDetail/ChiangMai.svg";
import {
  EnvironmentFilled,
  MailFilled,
  MergeFilled,
  ClockCircleFilled,
} from "@ant-design/icons";

const index = () => {
  return (
    <div className={styles.card}>
      <Image src={ChiangMai} alt="Chiang Mai" className={styles.cardImg} />

      <div className={styles.cardContent}>
        <div className={styles.infoBar}>
          <span>
            <ClockCircleFilled style={{ color: "#5d60ee", fontSize: "18px" }} />{" "}
            1 Week
          </span>
          <div className={styles.icons}>
            <span style={{ marginRight: "10px" }}>
              <MailFilled style={{ color: "#5d60ee", fontSize: "18px" }} />
            </span>
            <span>
              <MergeFilled style={{ color: "#5d60ee", fontSize: "18px" }} />
            </span>
          </div>
        </div>

        <h2 className={styles.cardTitle}>Chiang Mai</h2>
        <p className={styles.location}>
          <EnvironmentFilled style={{ color: "#5d60ee", fontSize: "18px" }} />{" "}
          Thailand
        </p>

        <p className={styles.description}>
          Visit the temples and the Chiang Mai Night Bazaar, a huge market
          located on Chiang Klan Road.
        </p>

        <div className={styles.cardFooter}>
          <button className={styles.detailsBtn}>Details</button>
          <p className={styles.price}>
            <span>$490</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
