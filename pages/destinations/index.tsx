"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TourList from "@/components/destinations/TourList";

const AllToursPage = () => {
  const [selectedDestination, setSelectedDestination] = useState("Tokyo");
//selectedDestination: Lưu địa điểm được chọn.
  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <h1>All Tours</h1>
        
        {/* Chọn địa điểm để lọc tour */}
        <select onChange={(e) => setSelectedDestination(e.target.value)} value={selectedDestination}>
          <option value="Tokyo">Tokyo</option>
          <option value="Sydney">Sydney</option>
          <option value="Moscow">Moscow</option>
          <option value="Phuket">Phuket</option>
          <option value="Singapore">Singapore</option>
          <option value="Hoi An">Hoi An</option>
        </select>

        {/* Hiển thị danh sách tour dựa trên địa điểm đã chọn */}
        <TourList destination={selectedDestination} tours={[]} />
      </div>
      <Footer />
    </>
  );
};

export default AllToursPage;
