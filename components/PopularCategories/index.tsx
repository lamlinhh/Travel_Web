"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchCategories } from "@/redux/slices/categorySlice";
import { Container, Yard } from "@/libs";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

const PopularCategories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { categories, loading, error } = useSelector((state: RootState) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryID: string) => {
    router.push(`/ToursByCategory/${categoryID}`);
  };

  return (
    <Container className={styles.container}>
      <Yard className={styles.header}>
        <h2>Popular Categories</h2>
        <Link href="/Categories" className={styles.viewAll}>
          View all tour →
        </Link>
      </Yard>

      {loading && <div>Loading categories...</div>}
      {error && <div className={styles.error}>Error: {error}</div>}

      <Yard className={styles.grid}>
        {categories.length > 0 ? (
          categories.slice(0, 6).map((category) => (
            <div
              key={category._id}
              className={styles.card}
              onClick={() => handleCategoryClick(category._id)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={category.Image || "/assets/placeholder.jpg"}
                  alt={category.CategoryName}
                  width={400}
                  height={250}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.text}>
                <h3>{category.CategoryName}</h3>
                <p>{category.Description}</p>
              </div>
            </div>
          ))
        ) : (
          !loading && <div>No categories found.</div>
        )}
      </Yard>
    </Container>
  );
};

export default PopularCategories;
