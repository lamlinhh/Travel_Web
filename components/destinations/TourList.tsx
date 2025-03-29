import React from "react";

interface Tour {
  id: string;
  name: string;
  price: string;
}

interface TourListProps {
  destination: string;
  tours: Tour[];
}

const TourList: React.FC<TourListProps> = ({ destination, tours }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>{destination} Tours</h1>
      <ul>
        {tours.length > 0 ? (
          tours.map((tour) => (
            <li key={tour.id}>
              <h3>{tour.name}</h3>
              <p>{tour.price}</p>
            </li>
          ))
        ) : (
          <li>No tours available.</li>
        )}
      </ul>
    </div>
  );
};

export default TourList;
