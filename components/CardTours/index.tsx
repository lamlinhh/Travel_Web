import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { FaStar, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const tours = [
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/red-telephone-booth_lt9tej.webp",
    location: "Paris, France",
    title: "Cannes and Antibes Night Tour",
    rating: 4,
    reviews: 6,
    price: "$60",
    tag: "Likely to Sell Out",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/Venice_cldsgh.webp",
    location: "Venice, Italy",
    title: "Vinecy and Toul Night Tour",
    rating: 5,
    reviews: 9,
    price: "$215",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/aquairum_f72yqn.webp",
    location: "Nha Trang, Vietnam",
    title: "Discover Nha Trang Diving Tour",
    rating: 3,
    reviews: 6,
    price: "$125",
    tag: "Likely to Sell Out",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/dubai_xgjtjo.webp",
    location: "Dubai, United Arab Emirates",
    title: "Dubai full day city tour",
    rating: 5,
    reviews: 6,
    price: "$35",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/honolulu_wut943.webp",
    location: "Honolulu, Hawaii",
    title: "Honolulu City Highlights Tour",
    rating: 5,
    reviews: 6,
    price: "$35",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/safari_tour_ktychp.webp",
    location: "Arusha, Tanzania",
    title: "Safari Adventure Tour",
    rating: 5,
    reviews: 6,
    price: "$35",
  },
];

const itemsPerPage = 3; // Tùy chỉnh số item mỗi trang

const CardTour = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTours, setCurrentTours] = useState(tours.slice(0, itemsPerPage));

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
        {currentTours.map((tour, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={tour.image} alt={tour.title} className={styles.image} />
              {tour.tag && <span className={styles.tag}>{tour.tag}</span>}
            </div>
            <div className={styles.content}>
              <p className={styles.location}>
                <FaMapMarkerAlt /> {tour.location}
              </p>
              <h3 className={styles.titleCard}>{tour.title}</h3>
              <div className={styles.rating}>
                {Array.from({ length: tour.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
                <span> {tour.reviews}</span>
              </div>
              <p className={styles.price}>from {tour.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          <FaChevronLeft />
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(page)}
            disabled={page === currentPage}
            className={styles.paginationButton}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CardTour;
