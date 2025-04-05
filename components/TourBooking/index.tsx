"use client";
import * as React from "react";
import { useState } from "react";
import { createBookTour } from '@/redux/slices/bookTourSlice';
import { RootState, AppDispatch } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
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
];

const TourBooking = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [departureDate, setDepartureDate] = useState("2025-03-18");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, bookTour } = useSelector((state: RootState) => state.bookTour);

  const handleBooking = () => {
    try {
      const newBooking = {
        TourId: "67efb56855121a3862121cd4",
        UserId: "67d81b9dab7c48f921c70973",
        DepartureDate: departureDate,
        QuantityAdults: adults,
        QuantityChildren: children,
      };

      dispatch(createBookTour(newBooking));

      setAdults(0);
      setChildren(0);

    } catch (err: any) {
      console.error('Error creating Booking:', err);
      alert(err.message || 'Failed to submit Booking!');
    }
  };

  return (
    <Container className={styles.container}>
      <Yard className={styles.cannes}>
        <Area className={styles.imageGallery}>
          {/* Main Image Swiper */}
          <Swiper
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            slidesPerView={1}
            className={styles.mainImage}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image src={img} alt={`Tour ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Swiper */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={2}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.thumbnailList}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className={styles.thumbnail}>
                <Image src={img} alt={`Thumbnail ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Area>

        {/* Booking Section */}
        <Area className={styles.bookingSection}>
          <Block className={styles.bookingCard}>
            <span className={styles.badge}>Likely to Sell Out</span>
            <Text fontSize="20px" bold>
              From <span className={styles.price}>$60</span>
            </Text>
            <Text fontSize="20px" bold>Select Date and Travelers</Text>

            <div className={styles.datePicker}>
              <label className={styles.spanTitle}>Departure Date</label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className={styles.inputField}
              />
            </div>

            <div className={styles.quantityAdults}>
              <label className={styles.spanTitle}>Adults</label>
              <input
                type="number"
                value={adults}
                min="1"
                onChange={(e) => setAdults(Number(e.target.value))}
                className={styles.inputField}
              />
            </div>

            <div className={styles.quantityChildren}>
              <label className={styles.spanTitle}>Children</label>
              <input
                type="number"
                value={children}
                min="0"
                onChange={(e) => setChildren(Number(e.target.value))}
                className={styles.inputField}
              />
            </div>

            <button className={styles.bookBtn} onClick={handleBooking}>Book Tour</button>
            <p className={styles.freeCancel}>Free Cancellation</p>
            <p className={styles.reserveNow}>Reserve Now - Secure your spot while staying flexible</p>
          </Block>
        </Area>
      </Yard>
    </Container>
  );
};

export default TourBooking;
