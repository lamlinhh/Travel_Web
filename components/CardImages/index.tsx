import { Block, Section, Yard } from "@/libs";
import CardImage from "@/types/CardImage";
import Image from "next/image";
import styles from "./styles.module.scss";
import { HomeOutlined } from "@ant-design/icons";

const Index = (props: CardImage) => {
  const { img, name } = props;
  return (
    <Yard className={styles.yard}>
      <Section className={styles.imageContainer}>
        <Image src={img} alt="Tour Image" fill className={styles.img} />
        <Block className={styles.overlay}>
          <HomeOutlined className={styles.icon} />
          <span className={styles.text}>{name}</span>
        </Block>
      </Section>
    </Yard>
  );
};

export default Index;
