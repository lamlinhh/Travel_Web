"use client";

import "aos/dist/aos.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PopularDestinations from "../PopularDestinations";




const DestinationComponent = () => {
  return (
    <>
      <Header />
      <PopularDestinations />
      <Footer />
    </>
  );
};

export default DestinationComponent;


