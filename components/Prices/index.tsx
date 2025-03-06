"use client";
import styles from "./styles.module.scss";
import { Button } from "antd";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

const offers = [
  {
    Image: "/assets/Prices/pr1.svg", // Removed /public from path
    title: "Travel Insurance",
    price: "$50.00",
    unit: "/Trip",
    desc: "Coverage for loss of luggage or trip cancellation without justification.",
    features: ["Trip Cancellation", "Baggage Loss", "Flexible Dates"],
    btnText: "More Info",
  },
  {
    Image: "/assets/Prices/pr2.svg",
    title: "Medical Insurance",
    price: "$65.00",
    unit: "/Person",
    desc: "When you are sick abroad the costs can be very high but we cover it.",
    features: ["Doctor Available", "Return Costs", "Hospital Costs"],
    btnText: "Request Now",
  },
  {
    Image: "/assets/Prices/pr3.svg",
    title: "Full Coverage",
    price: "$73.00",
    unit: "/Trip",
    desc: "Carefree travel with global coverage from medical expenses.",
    features: ["Return Costs", "Baggage Loss", "Cancellation"],
    btnText: "Read More",
  },
];

const Prices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <div className={styles.prices}>
        <div className={styles.banner} data-aos="fade-up">
          {/* <h1>Prices</h1> */}
        </div>

        <div className={styles.title} data-aos="fade-up">
          <span>Our Offers</span>
          <h2>Travel Safe & Secure</h2>
          <p>
            Discover our offers for global coverage of your trip to make you
            travel without worries and to be able to enjoy your trip.
          </p>
        </div>
      
        
        <div className={styles.cards}>
          {offers.map((offer, index) => (
            <div className={styles.card} key={index} data-aos="fade-up">
              <Image 
                src={offer.Image} 
                alt={offer.title} 
                width={300} 
                height={200} 
                style={{ objectFit: "cover" }} 
              />
              <div className={styles.content}>
                <h3>{offer.title}</h3>
                <h2>
                  {offer.price} <span>{offer.unit}</span>
                </h2>
                <p>{offer.desc}</p>
                <ul>
                  {offer.features.map((feature, idx) => (
                    <li key={idx}>✔ {feature}</li>
                  ))}
                </ul>
                <Button>{offer.btnText}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Prices;
