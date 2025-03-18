"use client";

import { fetchItems } from "@/redux/slices/itemSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ItemList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.item);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div>
      {items.map((item) => {
        return (
          <ul>
            <li key={item.name}>{item.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default ItemList;
