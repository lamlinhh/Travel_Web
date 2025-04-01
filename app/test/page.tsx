"use client";

import { fetchReviews } from "@/redux/slices/reviewsSlice";
import { AppDispatch, RootState } from "@/redux/store";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ItemList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { reviews } = useSelector(
    (state: RootState) => state.review || { reviews: [] },
  );

  useEffect(() => {
    dispatch(fetchReviews(1));
  }, [dispatch]);

  return (
    <div>
      {reviews?.map((review: any) => (
        <ul key={review?._id}>
          <li>{review?.Title}</li>
        </ul>
      ))}
    </div>
  );
};

export default ItemList;
