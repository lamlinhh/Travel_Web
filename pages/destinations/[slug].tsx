"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axiosInstance from "@/axios/axiosInstance"; 
import Header from "@/components/header";
import Footer from "@/components/footer";
import TourList from "@/components/destinations/TourList";
// Removed unused imports for Provider and store
const DestinationDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [tours, setTours] = useState<{ id: number; name: string; price: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchTours = async () => {
        try {
          const response = await axiosInstance.get(`/tours?destination=${slug}`);
          setTours(response.data);
        } catch {
          setError("Failed to fetch tours. Please try again.");
        } finally {
          setLoading(false);
        }
      };

      fetchTours();
    }
  }, [slug]);

  if (!slug) return <p>Loading...</p>;

  return (
    <>
      <Header />
      {loading && <p>Loading tours...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <TourList
          destination={slug as string}
          tours={tours.map((tour) => ({ ...tour, id: tour.id.toString() }))}
        />
      )}
      <Footer />
    </>
  );
};

export default DestinationDetail;
