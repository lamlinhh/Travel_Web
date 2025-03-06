import { Block, Section, Yard } from "@/libs";
import styles from "./styles.module.scss";
import Image from "next/image";
import CardDestination from "@/type/CardDestination";

const index = (props: CardDestination) => {
  const { img, name, desc } = props;
  return (
    <Yard className={styles.yard}>
      <Section className={styles.imageContainer}>
        <Image src={img} alt="Tour Image" fill className={styles.img} />
        <Block className={styles.overlay}>
          <h2 className={styles.text}>{name}</h2>
          <span className={styles.description}>{desc}</span>
        </Block>
      </Section>
    </Yard>
  );
};

export default index;
