"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToursByCategory, setPage } from "@/redux/slices/tourSlice";
import { RootState, AppDispatch } from "@/redux/store";
import CardTourItem from "@/components/CardTourItem";
import { useParams } from "next/navigation";
import styles from "./styles.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ToursByCategoryForPageCategories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tours, loading, error, currentPage, totalPages } = useSelector(
    (state: RootState) => state.tour
  );

  const params = useParams();
  const categoryId = params?.id as string;

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchToursByCategory({ categoryId, page: currentPage, limit: 6 }));
    }
  }, [dispatch, categoryId, currentPage]);

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
    <div className={styles.container}>
      <div className={styles.reviewGrid}>
        {tours.length > 0 ? (
          tours.map((tour) => (
            <CardTourItem key={tour._id?.toString()} tour={tour} />
          ))
        ) : (
          <div>No tours found.</div>
        )}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          <FaChevronLeft />
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            disabled={page === currentPage}
            className={styles.paginationButton}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ToursByCategoryForPageCategories;
