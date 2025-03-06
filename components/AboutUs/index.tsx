"use client";
import styles from "./styles.module.scss";
import { Button } from "antd";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";


const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.banner} data-aos="fade-up"></div>

      <div className={styles.introSection} data-aos="fade-right">
        <div className={styles.textContent}>
          <p className={styles.title}>Explore the world with us, one adventure at a time.</p>
          <h2>
            The perfect <span>vacation</span> come true with our Travel Agency
          </h2>
          <p className={styles.description}>
            We are a team of experienced travel experts who specialize in planning and organizing unforgettable travel experiences for our clients.
          </p>
          <div className={styles.progress}>
            Local travel guides
            <div className={styles.progressBar}></div>
          </div>
          <Button type="primary" className={styles.btn}>More Info</Button>
        </div>

        <div className={styles.imageHoverGallery}>
          {["/assets/AboutUs/Sec1.svg", "/assets/AboutUs/Sec2.svg", "/assets/AboutUs/Sec3.svg", "/assets/AboutUs/Sec4.svg", "/assets/AboutUs/Sec5.svg"].map((src, index) => (
            <div key={index} className={styles.imageItem} data-aos="fade-left">
              <Image src={src} alt={`Gallery ${index}`} width={300} height={200} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <Image
          src="/assets/AboutUs/Sec1.svg"
          alt="nen1"
          width={800}
          height={500}
          data-aos="fade-right"
          style={{ objectFit: "cover" }}
        />
        <p className={styles.title} data-aos="fade-left">Explore the world with us, one adventure at a time.</p>
        <h2 data-aos="fade-up">The perfect <span>vacation</span> come true with our Travel Agency</h2>
        <p className={styles.description} data-aos="fade-up">We are a team of experienced travel experts who specialize in planning and organizing unforgettable travel experiences for our clients.</p>
        <Button type="primary" className={styles.btn} data-aos="fade-up">More Info</Button>
      </div>

      <div className={styles.services}>
        {[{
          Image: "/assets/AboutUs/sec1.svg",
          title: "Airline Tickets",
          desc: "Providing the best deals on airline tickets."
        }, {
          Image: "/assets/AboutUs/sec2.svg",
          title: "Ocean Cruises",
          desc: "Luxurious and comfortable way of travel."
        }, {
          Image: "/assets/AboutUs/sec3.svg",
          title: "Means of Transport",
          desc: "Variety of means of transport to get you around."
        }, {
          Image: "/assets/AboutUs/sec4.svg",
          title: "Travel Itineraries",
          desc: "Planning and logistics with detailed itinerary."
        }, {
          Image: "/assets/AboutUs/sec5.svg",
          title: "Travel Insurance",
          desc: "Peace of mind and protection for any trip."
        }, {
          Image: "/assets/AboutUs/sec6.svg",
          title: "Local Guide",
          desc: "Guides who will show you their city."
        }].map((service, index) => (
          <div data-aos="zoom-in" className={styles.service} key={index}>
            <Image src={service.Image} alt={service.title} width={300} height={200} style={{ objectFit: "cover" }} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      <div className={styles.banner} data-aos="fade-up">
        <div className={styles.text}>
          <span>Exclusive travel deals</span>
          <h2>Book your dream vacation today!</h2>
        </div>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default AboutUs;
