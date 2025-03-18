import { useEffect, useState } from "react";
import { ReviewProps } from '@/types/ReviewProps';
import { getAllReviews } from "@/api/reviewAPI";
import ReviewCard from "../ReviewCard";
import styles from "./styles.module.scss";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ReviewsForPageReviews = () => {
    const [reviews, setReviews] = useState<ReviewProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const LIMIT = 6; 

    useEffect(() => {
        const fetchAllReviews = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getAllReviews(currentPage, LIMIT);

                setReviews(data.reviews);
                setTotalPages(data.totalPages);
            } catch (err: any) {
                console.error('Error fetching all reviews:', err);
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchAllReviews();
    }, [currentPage]);

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const handlePageClick = (page: number | string) => {
        if (typeof page !== 'number' || page === currentPage) return;

        setCurrentPage(page);
    };

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const totalNumbers = 5; // Số page button hiển thị (trừ First/Last và ...)

        if (totalPages <= totalNumbers) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(totalPages - 1, currentPage + 1);

            pages.push(1);

            if (startPage > 2) {
                pages.push('...');
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < totalPages - 1) {
                pages.push('...');
            }

            pages.push(totalPages);
        }

        return pages;
    };

    if (loading) return <div>Loading reviews...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={styles.container}>
            <div className={styles.reviewGrid}>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <ReviewCard key={review._id} {...review} />
                    ))
                ) : (
                    <div>No reviews found.</div>
                )}
            </div>

            {/* Pagination */}
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
                        disabled={page === '...'}
                        className={`${styles.pageNumber} ${currentPage === page ? styles.activePage : ''}`}
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

export default ReviewsForPageReviews;
