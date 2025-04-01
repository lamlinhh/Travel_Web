"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTours } from "@/redux/slices/tourSlice";
import { RootState, AppDispatch } from "@/redux/store";

type TourListProps = {
  destination: string;
  tours: { id: string; name: string; price: string }[];
};



const TourList: React.FC<TourListProps> = ({ destination }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { tours, loading, error } = useSelector((state: RootState) => state.tour);

  useEffect(() => {
    if (destination) {
      dispatch(fetchTours(destination));
    }
  }, [destination, dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>{destination} Tours</h1>

      {loading && <p>Loading tours...</p>}
      {error && <p style={{ color: "red" }}>Failed to fetch tours. Please try again.</p>}

      <ul>
        {tours.length > 0 ? (
          tours.map((tour) => (
            <li key={tour.id}>
              <h3>{tour.TourName}</h3>
              <p>Price: {tour.TourPrice} VND</p>
            </li>
          ))
        ) : (
          !loading && <li>No tours available.</li>
        )}
      </ul>
    </div>
  );
};

export default TourList;
