import {
  ClockCircleFilled,
  EnvironmentFilled,
  MailFilled,
  MergeFilled,
} from "@ant-design/icons";
import Image from "next/image";
import styles from "./styles.module.scss";
import CardDetail from "@/types/CardDetail";

const index = (props: CardDetail) => {
  const { name, location, desc, price, img, time, colors } = props;

  return (
    <div className={styles.card}>
      <Image src={img} alt="Chiang Mai" className={styles.cardImg} />

      <div className={styles.cardContent}>
        <div className={styles.infoBar}>
          <span>
            <span style={{ marginRight: "6px" }}>
              <ClockCircleFilled style={{ color: colors, fontSize: "18px" }} />
            </span>
            <span>{time}</span>
          </span>
          <div className={styles.icons}>
            <span style={{ marginRight: "10px" }}>
              <MailFilled style={{ color: colors, fontSize: "18px" }} />
            </span>
            <span>
              <MergeFilled style={{ color: colors, fontSize: "18px" }} />
            </span>
          </div>
        </div>

        <h2 className={styles.cardTitle}>{name}</h2>
        <p className={styles.location}>
          <EnvironmentFilled style={{ color: colors, fontSize: "18px" }} />
          {location}
        </p>

        <p className={styles.description}>{desc}</p>

        <div className={styles.cardFooter}>
          <button
            className={styles.detailsBtn}
            style={{ backgroundColor: colors }}>
            Details
          </button>
          <p className={styles.price}>
            <span>${price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
