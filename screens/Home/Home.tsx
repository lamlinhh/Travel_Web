import CustomerReviews from "@/components/CustomerReviews";
import PopularDestinations from "@/components/PopularDestinations";
import PopularTours from "@/components/PopularTours";
import SlideHeader from "@/components/SlideHeader";
import TravelBlog from "@/components/TravelBlog";
import WhyChooseUs from "@/components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <SlideHeader />
      <PopularDestinations />
      <WhyChooseUs />
      <PopularTours />
      <TravelBlog />
      <CustomerReviews />
    </>
  );
};
export default Home;
