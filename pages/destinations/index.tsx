"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTours } from "@/redux/slices/tourSlice";
import { RootState, AppDispatch } from "@/redux/store";

const AllToursPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { tours, loading, error } = useSelector((state: RootState) => state.tour);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  console.log("Tours từ Redux store:", tours);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Tours</h1>
      {loading && <p>Loading tours...</p>}
      {error && <p>Error: {error}</p>}
      {Array.isArray(tours) && tours.length > 0 ? (
        <ul>
          {tours.map((tour, index) => (
            <li key={index}>
              <h3>{tour.TourName || "No Name"}</h3>
              <p>Price: {tour.TourPrice || "N/A"}</p>
              <p>Location: {tour.TourLocation || "N/A"}</p>
              <p>Difficulty: {tour.TourDifficulty || "N/A"}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tours available.</p>
      )}
    </div>
  );
};

export default AllToursPage;
