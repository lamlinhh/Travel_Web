"use client";
import { Area, Block, Yard, Text } from "@/libs";
import styles from "./styles.module.scss";
import Link from "next/link";
import React from "react";
import TourFilter from "@/components/TourFilter";
import CardTours from "@/components/CardTours";

const Tour = () => {
  return (
    <div className={styles.container}>
      <Yard className={styles.banner}>
        <h1 className={styles.title}>Paris Tours and Activities</h1>
        <img
          src="https://github.com/lamlinhh/Travel_Web/blob/main/assets/Images/pexels-jarod-17350906_wqirdn.jpg?raw=true"
          alt="Paris"
        />
      </Yard>
      <Yard className={styles.tourContent}>
        <Area className={styles.bread}>
          <Block>
            <Text fontSize={"16px"}>
              <span>
                <Link href={"/"}>Home</Link>
              </span>
              <span>/</span>
              <span>France / Paris / Tours</span>
            </Text>
          </Block>
          <Block>
            <Text fontSize={"24px"} bold>
              All Tours and Activities in Paris
            </Text>
          </Block>
        </Area>

        <Area className={styles.main}>
          <Block className={styles.filter}>
            <TourFilter />
          </Block>

          <Block className={styles.results}>
            <div className={styles.header}>
              <div className={styles.info}>
                <span>6 results</span>
                <Link href={"/"}>Clear all filters</Link>
              </div>
              <div className={styles.textOption}>
                <select name="sort" id="sort">
                  <option value="Featured">Featured</option>
                  <option value="Price ( High to Low )">
                    Price ( High to Low )
                  </option>
                  <option value="Price ( Low to High )">
                    Price ( Low to High )
                  </option>
                </select>
              </div>
            </div>
            <div className={styles.card}>
              <CardTours />
            </div>
          </Block>
        </Area>
      </Yard>
    </div>
  );
};

export default Tour;
