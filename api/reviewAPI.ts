import axios from 'axios';
import { ReviewProps } from '@/types/ReviewProps';

const BASE_URL = 'https://travel-website-service.onrender.com';

export const getAllReviews = async (
    page: number = 1,
    limit: number = 6
): Promise<{ reviews: ReviewProps[]; totalPages: number; currentPage: number }> => {
    try {
        const response = await axios.get(
            `${BASE_URL}/GetAllReviews?page=${page}&limit=${limit}`
        );

        if (response.data.errCode !== 0) {
            throw new Error(response.data.errMessage);
        }

        return {
            reviews: response.data.reviews,
            totalPages: response.data.totalPages,
            currentPage: page
        };
    } catch (error) {
        console.error('Failed to fetch all reviews', error);
        throw error;
    }
};

export const getReviewsByTourId = async (
    tourId: string,
    token?: string
): Promise<ReviewProps[]> => {
    try {
        const response = await axios.get(
            `${BASE_URL}/GetReviews/${tourId}`,
            // Comment header nếu chưa dùng token
            // {
            //   headers: {
            //     Authorization: `Bearer ${token}`,
            //   },
            // }
        );

        if (response.data.errCode !== 0) {
            throw new Error(response.data.errMessage);
        }

        return response.data.reviews;
    } catch (error) {
        console.error('Failed to fetch reviews', error);
        throw error;
    }
};

export const createReview = async (
    data: Partial<ReviewProps>,
    // token: string
): Promise<ReviewProps> => {
    try {
        const response = await axios.post<ReviewProps>(
            `${BASE_URL}/CreateNewReview`,
            data,
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        );
        return response.data;
    } catch (error) {
        console.error('Failed to create review', error);
        throw error;
    }
};

export const updateReview = async (
    id: string,
    data: Partial<ReviewProps>,
    token: string
): Promise<ReviewProps> => {
    try {
        const response = await axios.put<ReviewProps>(
            `${BASE_URL}/UpdateReview/${id}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Failed to update review', error);
        throw error;
    }
};

export const deleteReview = async (
    id: string,
    token: string
): Promise<{ message: string }> => {
    try {
        const response = await axios.delete<{ message: string }>(
            `${BASE_URL}/DeleteReview/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Failed to delete review', error);
        throw error;
    }
};

