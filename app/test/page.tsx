"use client";

import { fetchItems } from "@/redux/slices/itemSlice";
import { AppDispatch } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ItemList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: any) => state?.item);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div>
      {items?.reviews?.map((item: any) => {
        return (
          <ul key={item?._id}>
            <li >{item?.Title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default ItemList;
