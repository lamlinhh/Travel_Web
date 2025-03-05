"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import {
  SearchOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Area, Block, Container, Text } from "@/libs";
import CardDetails from "@/components/CardDetails";
import ChiangMai from "@/public/assets/ImageDetail/ChiangMai.svg";
import CardImages from "@/components/CardImages";
import mountain from "@/public/assets/ImageHome/mountain.svg";
import skyscraper from "@/public/assets/ImageHome/skyscraper.svg";
import tour from "@/public/assets/ImageHome/tour.svg";

const Home = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.overlay}></div>
          <Image
            src="/assets/ImageHome/banner.svg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className={styles.backgroundImage}
          />
          <div className={styles.subtitle}>
            <h3>LOVE TRAVEL THEME</h3>
            <h1>
              Adventure &<br /> Experience <br /> The Travel!
            </h1>
          </div>
          <div className={styles.searchbox}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <Link href="">
                  <SearchOutlined />
                </Link>
              </div>
              <div className={styles.info}>
                <h4>Search</h4>
                <p>Insert keyword</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <Link href="">
                  <EnvironmentOutlined />
                </Link>
              </div>
              <div className={styles.info}>
                <h4>Destinations</h4>
                <p>All Destinations</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <Link href="">
                  <GlobalOutlined />
                </Link>
              </div>
              <div className={styles.info}>
                <h4>Typologies</h4>
                <p>All Typologies</p>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.btn}>SEARCH</Button>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <Block className={styles.desc}>
            <span>Dream Vacation Destination</span>
            <h1>Plan the Trip of a Lifetime with Ease</h1>
            <Text fontSize={16} width="500px">
              Whether you are looking for a romantic getaway, a family-friendly
              adventure, or a solo journey to explore the world, a travel agency
              can provide you with a custom-tailored itinerary that exceeds your
              expectations.
            </Text>

            <div className={styles.buttonContainer}>
              <Button className={styles.btn} type="primary">More Info</Button>
            </div>
          </Block>

          <Area className={styles.card}>
            <Block>

            </Block>
            <Block gap={2} mBot={3.5}>
              <CardImages img={mountain} name="City Walks Tour" />
              <CardImages img={skyscraper} name="Electric Bikes" />
              <CardImages img={tour} name="Skyscrapers View" />
            </Block>
            <Block gap={2}>
              <CardDetails desc="Visit the temples and the Chiang Mai Night
Bazaar, a huge huge market located on
Chiang Klan Road." img={ChiangMai} name="Chiang Mai" location={"Thailand"} price="490" time="1 Week" colors="#14B9D5" />
              <CardDetails desc="Visit the temples and the Chiang Mai Night
Bazaar, a huge huge market located on
Chiang Klan Road." img={ChiangMai} name="Chiang Mai" location={"Thailand"} price="490" time="1 Week" colors="#14B9D5" />
              <CardDetails desc="Visit the temples and the Chiang Mai Night
Bazaar, a huge huge market located on
Chiang Klan Road." img={ChiangMai} name="Chiang Mai" location={"Thailand"} price="490" time="1 Week" colors="#14B9D5" />
            </Block>
          </Area>
        </div>
      </div>
    </Container>
  );
};
export default Home;
