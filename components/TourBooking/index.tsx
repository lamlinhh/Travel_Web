"use client";
import * as React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper"; // Import đúng kiểu dữ liệu Swiper
import { Area, Block, Container, Text, Yard } from "@/libs";
import { Image } from "antd";
import styles from "./styles.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [
    "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/honolulu_wut943.webp",
    "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/singapore_qihqqs_ehracs.webp",
    "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/honolulu_wut943.webp",
    "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/singapore_qihqqs_ehracs.webp",
];

const TourBooking = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    const handleSetThumbsSwiper = (swiper: SwiperType) => {
        if (swiper && !swiper.destroyed) {
            setThumbsSwiper(swiper);
        }
    };

    return (
        <Container className={styles.container}>
            <Yard className={styles.cannes}>
                <Area className={styles.imageGallery}>
                    {/* Main Image Swiper */}
                    <Swiper
                        // direction="vertical"
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        slidesPerView={1}
                        className={styles.mainImage}
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <Image src={img} alt="Main Tour" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnail Swiper */}
                    <Swiper
                        // direction="vertical"
                        onSwiper={handleSetThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className={styles.thumbnailList}
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index} className={styles.thumbnail}>
                                <Image src={img} alt={`Tour ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Area>

                {/* Booking Section */}
                <Area className={styles.bookingSection}>
                    <Block className={styles.bookingCard}>
                        <span className={styles.badge}>Likely to Sell Out</span>
                        <Text fontSize={"20px"} bold>
                            From <span className={styles.price}>$60</span>
                        </Text>
                        <Text fontSize={"20px"} bold>
                            Select Date and Travelers
                        </Text>
                        <div className={styles.datePicker}>
                            <span className={styles.spanTitle}>Departure Date</span>
                            <input type="date" defaultValue="2025-03-18" className={styles.inputField} />
                        </div>
                        <div className={styles.quantityAdults}>
                            <span className={styles.spanTitle}>Quantity Adults</span>
                            <input type="number" defaultValue="1" min="1" className={styles.inputField} />
                        </div>
                        <div className={styles.quantityChildren}>
                            <span className={styles.spanTitle}>Quantity Children</span>
                            <input type="number" defaultValue="1" min="1" className={styles.inputField} />
                        </div>
                        <button className={styles.bookBtn}>Book Tour</button>
                        <p className={styles.freeCancel}>Free Cancellation</p>
                        <p className={styles.reserveNow}>Reserve Now - Secure your spot while staying flexible</p>
                    </Block>
                </Area>
            </Yard>
        </Container>
    );
};

export default TourBooking;