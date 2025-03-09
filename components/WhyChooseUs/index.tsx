import { Container } from "@/libs";
import styles from "./styles.module.scss";

import {
  FaRegHandshake,
  FaRegSmile,
  FaHandsHelping,
  FaRegClock,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaRegHandshake className={styles.icon} />,
    title: "Authentic Experiences",
    text: "Experience the destination's true character through genuine encounters and traditional activities.",
  },
  {
    icon: <FaRegSmile className={styles.icon} />,
    title: "Local Expertise",
    text: "Deeply knowledgeable, offering tailored experiences that highlight the region's best through genuine local insights.",
  },
  {
    icon: <FaHandsHelping className={styles.icon} />,
    title: "24/7 Local Support",
    text: "Relax and explore with peace of mind. We offer 24/7 support and local assistance throughout your trip.",
  },
  {
    icon: <FaRegClock className={styles.icon} />,
    title: "Free Cancellation",
    text: "You'll receive a full refund if you cancel at least 24 hours in advance of most experiences.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Why Choose Us</h2>
      <div className={styles.grid}>
        {benefits.map((item, index) => (
          <div key={index} className={styles.card}>
            {item.icon}
            <h3 className={styles.titleCard}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
