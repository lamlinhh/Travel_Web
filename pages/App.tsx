import "@/styles/globals.scss"; // Import Global CSS
import Header from "@/components/header";
import Footer from "@/components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "@/components/AboutUs";
import Prices from "@/components/Prices";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MyApp() {
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
