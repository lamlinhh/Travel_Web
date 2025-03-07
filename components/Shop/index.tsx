"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Button } from "antd";

const productsData = [
  {
    id: 1,
    Image: "/assets/Shops/baggage.svg",
    title: "Baggage Insurance",
    oldPrice: "$50.00",
    newPrice: "$45.00",
    width: 400,
    height: 400,
  },
  {
    id: 2,
    Image: "/assets/Shops/health.svg",
    title: "Health Insurance",
    newPrice: "$220.00",
    width: 400,
    height: 400,
  },
  {
    id: 3,
    Image: "/assets/Shops/medical.svg",
    title: "Medical Insurance",
    oldPrice: "$78.00",
    newPrice: "$45.00",
    width: 400,
    height: 400,
  },
  {
    id: 4,
    Image: "/assets/Shops/tourOpera.svg",
    title: "Tour Operator Liability",
    oldPrice: "$70.00",
    newPrice: "$45.00",
    width: 400,
    height: 400,
  },
  {
    id: 5,
    Image: "/assets/Shops/tripcancellation.svg",
    title: "Trip Cancellation Insurance",
    newPrice: "$39.00",
    width: 400,
    height: 400,
  },
  {
    id: 6,
    Image: "/assets/Shops/visitor.svg",
    title: "Visitor Insurance",
    newPrice: "$60.00 - $80.00",
    width: 400,
    height: 400,
    hasOption: true,
  },
];

const Shop = () => {
  const router = useRouter();
  const [products, setProducts] = useState(productsData);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const goToDetail = (id: number, hasOption: boolean) => {
    if (hasOption) {
      router.push(`/shop/${id}`);
    }
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let sortedProducts = [...productsData];

    if (value === "lowToHigh") {
      sortedProducts.sort((a, b) =>
        parseFloat(a.newPrice.replace(/[^0-9.]/g, "")) -
        parseFloat(b.newPrice.replace(/[^0-9.]/g, ""))
      );
    } else if (value === "highToLow") {
      sortedProducts.sort((a, b) =>
        parseFloat(b.newPrice.replace(/[^0-9.]/g, "")) -
        parseFloat(a.newPrice.replace(/[^0-9.]/g, ""))
      );
    }
    setProducts(sortedProducts);
  };

  return (
    <>
      <Header />
      <div className={styles.shop}>
        <div className={styles.banner} data-aos="fade-up">
          <h1>Shop</h1>
        </div>
        <div className={styles.sorting} style={{ textAlign: "right", marginBottom: "20px" }}>
          <label>Sort by: </label>
          <select onChange={handleSort} aria-label="Sort by">
            <option value="">Default sorting</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
        <div className={styles.products}>
          {products.map((product) => (
            <div
              key={product.id}
              className={styles.product}
              data-aos="fade-up"
              onClick={() => goToDetail(product.id, product.hasOption || false)}
            >
              <Image
                src={product.Image}
                alt={product.title}
                width={product.width}
                height={product.height}
                objectFit="cover"
              />
              <div className={styles.content}>
                <h3>{product.title}</h3>
                {product.oldPrice && (
                  <p>
                    <span className={styles.oldPrice} style={{ textDecoration: "line-through", color: "#888" }}>
                      {product.oldPrice}
                    </span>{" "}
                    <span className={styles.newPrice} style={{ fontWeight: "bold", color: "#ff0000" }}>
                      {product.newPrice}
                    </span>
                  </p>
                )}
                {!product.oldPrice && <p className={styles.price}>{product.newPrice}</p>}
                {product.hasOption && (
                  <select className={styles.selectOption} onClick={(e) => e.stopPropagation()}>
                    <option>Select Option</option>
                  </select>
                )}
                <Button className={styles.addToCart} style={{ marginTop: "20px", display: "block", textAlign: "center" }} onClick={(e) => e.stopPropagation()}>
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;