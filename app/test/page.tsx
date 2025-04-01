"use client";

<<<<<<< HEAD
import { fetchReviews } from "@/redux/slices/reviewsSlice";
import { AppDispatch, RootState } from "@/redux/store";

=======
import { fetchItems } from "@/redux/slices/itemSlice";
import { AppDispatch, RootState } from "@/redux/store";
>>>>>>> 1143dfd74bd1f14c76b16ef40b80bc78089ac82a
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ItemList = () => {
  const dispatch = useDispatch<AppDispatch>();
<<<<<<< HEAD

  const { reviews } = useSelector((state: RootState) => state.review || { reviews: [] });

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
=======
  const { items } = useSelector((state: RootState) => state.item);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div>
      {items.map((item) => {
        return (
          <ul key={item.name}>
            <li>{item.name}</li>
          </ul>
        );
      })}
>>>>>>> 1143dfd74bd1f14c76b16ef40b80bc78089ac82a
    </div>
  );
};

<<<<<<< HEAD
export default ItemList;
=======
export default ItemList;
>>>>>>> 1143dfd74bd1f14c76b16ef40b80bc78089ac82a
