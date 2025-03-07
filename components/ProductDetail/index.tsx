"use client";
import React from "react";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./styles.module.scss";
import Image from "next/image";

const products = [
  {
    id: 1,
    img: "/images/product1.jpg",
    title: "Travel Package A",
    desc: "Discover the best beaches in the world.",
    price: "$6700",
    location: "USA",
  },
  {
    id: 2,
    img: "/images/product2.jpg",
    title: "Adventure Package B",
    desc: "Explore mountains and nature trails.",
    price: "$6200",
    location: "India",
  },
  {
    id: 3,
    img: "/images/product3.jpg",
    title: "City Tour Package C",
    desc: "Discover vibrant cities with our guides.",
    price: "$6700",
    location: "Australia",
  },
  {
    id: 4,
    img: "/images/product2.jpg",
    title: "Adventure Package B",
    desc: "Explore mountains and nature trails.",
    price: "$6200",
    location: "US",
  },
  {
    id: 5,
    img: "/images/product3.jpg",
    title: "City Tour Package C",
    desc: "Discover vibrant cities with our guides.",
    price: "$6700",
    location: "United States",
  },
  {
    id: 6,
    img: "/images/product2.jpg",
    title: "Adventure Package B",
    desc: "Explore mountains and nature trails.",
    price: "$6200",
    location: "California",
  },
];

const ProductDetail = () => {
  const { id } = useParams() as { id: string };
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className={styles.notFound}>Product Not Found</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.detail}>
        <div className={styles.banner}>
          <h1>{product.title}</h1>
        </div>
        <div className={styles.content}>
          <Image src={product.img} alt={product.title} />
          <div className={styles.info}>
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <span>Location: {product.location}</span>
            <div className={styles.price}>{product.price}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
