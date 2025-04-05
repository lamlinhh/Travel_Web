// "use client";

// import "aos/dist/aos.css";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import PopularDestinations from "@/components/PopularDestinations";

// const DestinationComponent = () => {
//   return (
//     <>
//       <Header />
//       <PopularDestinations />
//       <Footer />
//     </>
//   );
// };

// export default DestinationComponent;
// export const metadata = {
//   title: "Destinations",
//   description: "Explore our travel destinations",
// };
"use client";

import "aos/dist/aos.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PopularDestinations from "@/components/PopularDestinations";

const DestinationsPage = () => {
  return (
    <>
      <Header />
      <PopularDestinations />
      <Footer />
    </>
  );
};

export default DestinationsPage;
