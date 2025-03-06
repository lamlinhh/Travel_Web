"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button, Input } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import banner from "@/public/assets/ContactUs/banner.jpg";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleSubmit = () => {
    if (name && email && message) {
      console.log("Name:", name, "Email:", email, "Message:", message);
      setName("");
      setEmail("");
      setMessage("");
      alert("Message sent successfully!");
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <>
      <Header />
      <div className={styles.contact}>
        {/* Banner */}
        <div className={styles.banner} data-aos="fade-up">
          {/* <img src="/public/assets/ContactUs/banner.jpg" alt="Contact Us Banner" /> */}
          {/* <h1>Contact Us</h1> */}
        </div>

        {/* Thông tin liên hệ */}
        <div className={styles.infos}>
          <div className={styles.info} data-aos="fade-up">
            <h3>📍 Location</h3>
            <p>Travel Agency</p>
            <p>123 Sunset Beach</p>
          </div>

          <div className={styles.info} data-aos="fade-up">
            <h3>📞 Give us a call</h3>
            <p>+49 123 456 789</p>
            <p>+49 987 654 321</p>
          </div>

          <div className={styles.info} data-aos="fade-up">
            <h3>📧 Write for anything</h3>
            <p>info@travel.com</p>
            <p>quotes@travel.com</p>
          </div>
        </div>

        {/* Form Get in Touch */}
        <div className={styles.formContainer} data-aos="fade-up">
          <span>Plan your Next Trip</span>
          <h2>Get in Touch</h2>
          <p>
            Write to us for personalized travel advice or information on group
            travel.
          </p>

          <Input
            placeholder="Type your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Insert your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input.TextArea
            placeholder="Write your message..."
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button type="primary" className={styles.btn} onClick={handleSubmit}>
            Submit
          </Button>
        </div>

        {/* Google Map */}
        <div className={styles.map} data-aos="fade-up">
          <GoogleMap />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
