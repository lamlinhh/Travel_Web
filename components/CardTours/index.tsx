import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import {
  FaStar,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import React from "react";
import { fetchTours } from "@/redux/slices/tourSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";


const itemsPerPage = 3;

const CardTour = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tours } = useSelector((state: RootState) => state.tour);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTours, setCurrentTours] = useState(
    tours.slice(0, itemsPerPage),
  );
  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  const totalPages = Math.ceil(tours.length / itemsPerPage);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentTours(tours.slice(start, end));
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page !== "number" || page === currentPage) return;
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const totalNumbers = 5;

    if (totalPages <= totalNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      pages.push(1);

      if (startPage > 2) {
        pages.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.grid}>
        {tours.map((tour, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={tour.image} alt={tour.title} className={styles.image} />
            </div>
            <div className={styles.content}>
              <p className={styles.location}>
                <FaMapMarkerAlt /> {tour?.TourLocation}
              </p>
              <h3 className={styles.titleCard}>{tour?.TourName}</h3>
              <div className={styles.rating}>
                {Array.from({ length: tour.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
                <span> {tour?.DescribeTour}</span>
              </div>
              <p className={styles.price}>from ${tour?.TourPrice}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={styles.paginationButton}>
          <FaChevronLeft />
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(page)}
            disabled={page === currentPage}
            className={styles.paginationButton}>
            {page}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CardTour;


