"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import "aos/dist/aos.css";
import Image from "next/image";
import { articles } from "./articles";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const itemsPerPage = 3;

  const uniqueTags = Array.from(
    new Set(articles.flatMap((article) => article.tags))
  );

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? article.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedArticles = filteredArticles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.blogContainer}>
      {/* Header with Banner */}
      <header className={styles.header}>
        <Image
          src="https://raw.githubusercontent.com/lamlinhh/Travel_Web/fd973d89a0146fc9a0726e6473d648a6ca477908/assets/Images/vietnam_travel_sleynt.webp"
          alt="Blog Banner"
          width={1200}
          height={400}
          priority
        />
        <div className={styles.headerContent}>
          <h1>Write by Traveler</h1>
          <p>True local review by traveler</p>
        </div>
      </header>

      {/* Search Section */}
      <div className={styles.searchSection}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.tags}>
          <button
            className={`${styles.tag} ${!selectedTag ? styles.active : ""}`}
            onClick={() => setSelectedTag("")}
          >
            All
          </button>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.tag} ${selectedTag === tag ? styles.active : ""}`}
              onClick={() => setSelectedTag(tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.contentContainer}>
        <section className={styles.articlesSection}>
          <h2>Newest Articles</h2>
          <div className={styles.articlesGrid}>
            {displayedArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className={styles.articleCard}
              >
                <div className={styles.articleImage}>
                  <img src={article.image} alt={article.title} />
                </div>
                <div className={styles.articleContent}>
                  <h2>{article.title}</h2>
                  <p className={styles.description}>{article.description}</p>
                  <div className={styles.metaInfo}>
                    <span className={styles.date}>📅 {article.date}</span>
                    <span className={styles.author}>👤 {article.author}</span>
                  </div>
                  <div className={styles.tags}>
                    {article.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
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
            <h3>Articles for You</h3>
            <ul>
              {articles.slice(0, 3).map((article) => (
                <li key={article.id}>
                  <Link href={`/blog/${article.id}`}>
                    <img src={article.image} alt={article.title} />
                    <div>
                      <span>{article.date}</span>
                      <p>{article.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;