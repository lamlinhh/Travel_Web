"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import "aos/dist/aos.css";
import Header from "@/components/header";
import Footer from "@/components/footer";



const destinations = [
  {  title: "Popular Destinations",
    layout: "grid",
    data: [
      {
        ariaLabel: "Sydney",
        count: 10,
        href: "#",
        image: {
          alt: "Sydney Opera House",
          src: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/sydney-opera-house-near-body-of-water-during-daytime-1_fbgqyc.webp",
        },
        title: "Sydney",
      },
      {
        ariaLabel: "Tokyo",
        count: 20,
        href: "#",
        image: {
          alt: "Tokyo City",
          src: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/japan-tokyo_wpvxra.webp",
        },
        title: "Tokyo",
      },
      {
        ariaLabel: "Moscow",
        count: 13,
        href: "#",
        image: {
          alt: "Moscow City",
          src: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/moscow_jr5bb4.webp",
        },
        title: "Moscow",
      },
      {
        ariaLabel: "Phuket",
        count: 19,
        href: "#",
        image: {
          alt: "Phuket Beach",
          src: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/phuket_utqmlt.webp",
        },
        title: "Phuket",
      },
      {
        ariaLabel: "Singapore",
        count: 19,
        href: "#",
        image: {
          alt: "Singapore Skyline",
          src: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/singapore_qihqqs_ehracs.webp",
        },
        title: "Singapore",
      },
      {
        ariaLabel: "Hoi An",
        count: 19,
        href: "#",
        image: {
          alt: "Hoi An Ancient Town",
          src: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/hoian.webp",
        },
        title: "Hoi An",
      },
    ],
  }
];

const articles = [
  { id: 1,title: "Exploring the Great Wall of China", date: "Mar 12, 2025", description: "Walk along the ancient Great Wall...", image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/fd973d89a0146fc9a0726e6473d648a6ca477908/assets/Images/pyramid_girl_sivi1o.webp" },
  { id: 2,title: "A Journey Through Kyoto’s Temples", date: "Mar 12, 2025", description: "Experience the serenity of Kyoto’s temples...", image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/back-parker_kidsmi.webp" },
  { id: 3,title: "Santorini: The Gem of the Aegean", date: "Mar 12, 2025", description: "Discover the white-washed beauty of Santorini...", image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/river_piyd67.webp" },
  { id: 4,title: "Paris in Spring: A Dreamy Getaway", date: "Mar 12, 2025", description: "Explore Paris in the spring, with blooming gardens...", image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/fuji_moutain_zlo1b3.webp" },
  { id: 5,title: "Venice: The City of Canals", date: "Mar 12, 2025", description: "Drift through the charming canals of Venice...", image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/snow_village_y1rnpj.webp" },
  { id: 6,title: "Swiss Alps Adventure: A Winter Wonderland", date: "Mar 12, 2025", description: "Embark on a breathtaking journey through the Swiss Alps...", image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/fuji_moutain_zlo1b3.webp" },
];

const Blog = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1); //currentPage: Lưu trạng thái trang hiện tại.
  const itemsPerPage = 3;
  const totalPages = Math.ceil(articles.length / itemsPerPage);//tinh so trang dua tren tong bai viet
//articlesPerPage:itemsPerPage- Số bài viết hiển thị trên một trang.
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const displayedArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
//Cắt danh sách articles để chỉ lấy bài viết thuộc trang hiện tại.
  return (
    <>
      <Header />
      <div className={styles.blogContainer}>
        {/* Header */}
        <header className={styles.header}>
          <h1>Write by Traveler</h1>
          <p>True local review by traveler</p>
        </header>

        {/* Popular Destinations */}
        {/* <PopularDestinations /> */}
        <section className={styles.featuredDestinations}>
          <h2>Blog</h2>
          <div className={styles.destinationGrid}>
            {destinations.flatMap((place) =>
              place.data.map((destination, index) => (
                <div key={index} className={styles.destinationCard}>
                  <img src={destination.image.src} alt={destination.image.alt} />
                  <span>{destination.title}</span>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Main Content */}
        <div className={styles.contentContainer}>
          <section className={styles.articlesSection}>
            <h2>Newest Articles</h2>
            <div className={styles.articlesGrid}>
              {displayedArticles.map((article) => (
                <div
                  key={article.id}
                  className={styles.articleCard}
                  onClick={() => router.push(`/blog/${article.id}`)}
                >
                  <img src={article.image} alt={article.title} />
                  <div className={styles.articleInfo}>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <span>{article.date}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination Nút điều hướng giữa các trang, chỉ cho phép nhấn khi còn trang tiếp theo.

*/}
            <div className={styles.pagination}>
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                {"<"}
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={currentPage === i + 1 ? styles.active : ""}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                {">"}
              </button>
            </div>
          </section>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.suggestedArticles}>
              <h2>Search</h2>
            </div>
            <div className={styles.searchBox}>
              <input type="text" placeholder="Keyword search" />
            </div>
            <div className={styles.suggestedArticles}>
              <h3>Articles for You</h3>
              <ul>
                {articles.slice(0, 3).map((article, index) => (
                  <li key={index} onClick={() => router.push(`/blog/${article.id}`)}
>
                    <img src={article.image} alt={article.title} />
                    <div>
                      <span>{article.date}</span>
                      <p>{article.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;