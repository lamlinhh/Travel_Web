import { fetchTours, setPage } from "@/redux/slices/tourSlice";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import {
  FaStar,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

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

const itemsPerPage = 3;

const CardTour = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tours, loading, error, currentPage, totalPages } = useSelector(
    (state: RootState) => state.tour,
  );
  const router = useRouter();

  const handleTourClick = (tourID: any) => {
    router.push(`/TourDetail/${tourID}`);
  };

  useEffect(() => {
    dispatch(fetchTours(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    if (page !== currentPage) dispatch(setPage(page));
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const totalNumbers = 5;

    if (totalPages <= totalNumbers) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      pages.push(1);
      if (startPage > 2) pages.push("...");
      for (let i = startPage; i <= endPage; i++) pages.push(i);
      if (endPage < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  if (loading) return <div>Loading tours...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.grid}>
        {tours.length > 0 ? (
          tours.map((tour) => (
            <div
              key={tour._id}
              className={styles.card}
              onClick={() => handleTourClick(tour._id)}>
              <div className={styles.imageContainer}>
                <img
                  src={tour.Image}
                  alt={tour.TourName}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.location}>
                  <FaMapMarkerAlt /> {tour.TourLocation}
                </p>
                <h3 className={styles.titleCard}>{tour.TourName}</h3>
                <div className={styles.rating}>
                  {Array.from({ length: tour.TotalRating ?? 0 }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span> {tour.DescribeTour}</span>
                </div>
                <p className={styles.price}>from ${tour.TourPrice}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No tours found.</div>
        )}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.paginationButton}>
          <FaChevronLeft />
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            disabled={page === currentPage}
            className={styles.paginationButton}>
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}>
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.pagination}>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={styles.paginationButton}
          title="Previous page">
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
          className={styles.paginationButton}
          title="Next page">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CardTour;
