"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import {
  SearchOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Area, Block, Container, Text } from "@/libs";
import CardDetails from "@/components/CardDetails";
import ChiangMai from "@/public/assets/ImageDetail/ChiangMai.svg";
import CardImages from "@/components/CardImages";
import mountain from "@/public/assets/ImageHome/mountain.svg";
import skyscraper from "@/public/assets/ImageHome/skyscraper.svg";
import tour from "@/public/assets/ImageHome/tour.svg";
import CardDestinations from "@/components/CardDestinations";
import Greece from "@/public/assets/ImageHome/Greece.svg";
import Egypt from "@/public/assets/ImageHome/Egypt.svg";
import Africa from "@/public/assets/ImageHome/Africa.svg";
import France from "@/public/assets/ImageHome/France.svg";
import React, { useState } from "react";

const images = [Egypt, Africa, France];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <Container className={styles.container}>
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.overlay}></div>
          <Image
            src="/assets/ImageHome/banner.svg"
            alt="Background Image"
            fill
            objectFit="cover"
            priority
            className={styles.backgroundImage}
          />
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
              marginLeft: "200px",
              marginTop: "100px",
            }}>
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
        </div>

        <div className={styles.contentText}>
          <Block className={styles.desc} mBot={3} mTop={5}>
            <span>Dream Vacation Destination</span>
            <h1>Plan the Trip of a Lifetime with Ease</h1>
            <Text fontSize={16} width="500px">
              Whether you are looking for a romantic getaway, a family-friendly
              adventure, or a solo journey to explore the world, a travel agency
              can provide you with a custom-tailored itinerary that exceeds your
              expectations.
            </Text>

            <div className={styles.buttonContainer}>
              <Button className={styles.btn} type="primary">
                More Info
              </Button>
            </div>
          </Block>

          <Area className={styles.card}>
            <Block></Block>
            <Block gap={2} mBot={3.5}>
              <CardImages img={mountain} name="City Walks Tour" />
              <CardImages img={skyscraper} name="Electric Bikes" />
              <CardImages img={tour} name="Skyscrapers View" />
            </Block>
            <Block gap={2}>
              <CardDetails
                desc="Visit the temples and the Chiang Mai Night Bazaar, a huge huge market located on
                    Chiang Klan Road."
                img={ChiangMai}
                name="Chiang Mai"
                location={"Thailand"}
                price="490"
                time="1 Week"
                colors="#14B9D5"
              />
              <CardDetails
                desc="Visit the temples and the Chiang Mai Night Bazaar, a huge huge market located on
                    Chiang Klan Road."
                img={ChiangMai}
                name="Chiang Mai"
                location={"Thailand"}
                price="490"
                time="1 Week"
                colors="#14B9D5"
              />
              <CardDetails
                desc="Visit the temples and the Chiang Mai Night Bazaar, a huge huge market located on
                    Chiang Klan Road."
                img={ChiangMai}
                name="Chiang Mai"
                location={"Thailand"}
                price="490"
                time="1 Week"
                colors="#14B9D5"
              />
            </Block>
          </Area>
        </div>

        <div className={styles.contentSearch}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "150px",
            }}>
            <div className={styles.subtitle}>
              <h1>Start your Vacation Now</h1>
              <Text center>
                Looking for your dream vacation destination but know where to
                start? With the help of <br />
                experienced and knowledgeable travel agents, you can plan the
                trip of a lifetime with ease.
              </Text>
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
        </div>

        <div className={styles.contentDestination}>
          <Block className={styles.desc} mBot={3} mTop={5}>
            <span>Next Adventure</span>
            <h1>Plan the Trip of a Lifetime with Ease</h1>
            <Text fontSize={16} width="500px">
              We have compiled a list of top destinations across the globe,
              scoured the world for the most alluring and fascinating places to
              visit. From the beautiful beaches of the Caribbean to the majestic
              mountains of Europe and the vibrant cities of Asia, our
              destination list has something for everyone.
            </Text>
          </Block>

          <Block gap={2} mBot={3.5}>
            <CardDestinations
              img={Greece}
              name="Greece"
              desc="Experience the ancient history & beaches"
            />
            <CardDestinations
              img={Egypt}
              name="Egypt"
              desc="Discover the land of pharaohs & pyramids"
            />
            <CardDestinations
              img={Africa}
              name="Africa"
              desc="Embark on a journey for your lifetime"
            />
            <CardDestinations
              img={France}
              name="France"
              desc="Indulge in the art, culture, and cuisine"
            />
          </Block>
        </div>

        <div className={styles.contentServices}>
          <Block>
            <div className={styles.slider}>
              {images.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={500}
                  height={300}
                  className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
                />
              ))}
            </div>
            <button className={styles.prev} onClick={prevSlide}>
              ❮
            </button>
            <button className={styles.next} onClick={nextSlide}>
              ❯
            </button>
          </Block>
          <Block className={styles.textBlock}>
            <span>Adventure Travel</span>
            <h1>Embrace the Thrill of the Unknown</h1>
            <Text fontSize={16} width="500px">
              Are you tired of the typical tourist destinations and looking to
              step out of your comfort zone? Adventure travel may be the perfect
              solution for you! Here are four reasons why you should book an
              adventure travel experience :
            </Text>
            <ul className={styles.list}>
              <li>
                <span>
                  <CheckOutlined />
                </span>{" "}
                Connect with nature
              </li>
              <li>
                <span>
                  <CheckOutlined />
                </span>{" "}
                Experience other cultures
              </li>
              <li>
                <span>
                  <CheckOutlined />
                </span>{" "}
                Create unforgettable memories
              </li>
            </ul>
            <div className={styles.buttonContainer}>
              <Button className={styles.btn} type="primary">
                All Services
              </Button>
            </div>
          </Block>
        </div>
      </div>
    </Container>
  );
};
export default Home;
