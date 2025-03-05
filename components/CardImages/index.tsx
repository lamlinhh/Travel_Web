import { Yard } from "@/libs";
import CardImage from "@/type/cardImage";
import Image from "next/image";
import styles from "./styles.module.scss";
import { HomeOutlined } from '@ant-design/icons';

const Index = (props: CardImage) => {
    const { img, name } = props;
    return (
        <Yard className={styles.yard}>
            <div className={styles.imageContainer}>
                <Image src={img} alt="Tour Image" fill className={styles.img} />
                <div className={styles.overlay}>
                    <HomeOutlined className={styles.icon} />
                    <span className={styles.text}>{name}</span>
                </div>
            </div>
        </Yard>
    );
};

export default Index;
