"use client";

import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { articles } from "../articles";

interface Article {
  id: string;
  title: string;
  tags: string[];
  date: string;
  description: string;
  content: string;
  image: string;
  author: string;
  authorImage: string;
}

interface BlogDetailProps {
  id: string;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ id }) => {
  const article = articles.find((article) => article.id === id) as Article | undefined;

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h1>Article not found</h1>
        <Link href="/blog">Back to Blog</Link>
      </div>
    );
  }

  // Get related articles (excluding current article)
  const relatedArticles = articles
    .filter((a) => a.id !== id)
    .slice(0, 3);

  return (
    <div className={styles.blogDetailContainer}>
      <article className={styles.mainContent}>
        <div className={styles.articleImage}>
          <img src={article.image} alt={article.title} />
        </div>
        <div className={styles.articleContent}>
          <div className={styles.metaInfo}>
            <span className={styles.date}>📅 {article.date}</span>
            <span className={styles.author}>👤 {article.author}</span>
          </div>
          <h1>{article.title}</h1>
          <p className={styles.description}>{article.description}</p>
          <div className={styles.content}>
            {article.content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.tags}>
            {article.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <section className={styles.authorSection}>
        <div className={styles.authorImage}>
          <img src={article.authorImage} alt={article.author} />
        </div>
        <div className={styles.authorInfo}>
          <h3>{article.author}</h3>
          <p>Travel enthusiast and writer, sharing experiences from around the world.</p>
        </div>
      </section>

      <section className={styles.relatedArticles}>
        <h2>Related Articles</h2>
        <div className={styles.relatedGrid}>
          {relatedArticles.map((relatedArticle) => (
            <Link
              key={relatedArticle.id}
              href={`/blog/${relatedArticle.id}`}
              className={styles.relatedCard}
            >
              <div className={styles.relatedImage}>
                <img src={relatedArticle.image} alt={relatedArticle.title} />
              </div>
              <div className={styles.relatedContent}>
                <h3>{relatedArticle.title}</h3>
                <div className={styles.metaInfo}>
                  <span className={styles.date}>📅 {relatedArticle.date}</span>
                  <span className={styles.author}>👤 {relatedArticle.author}</span>
                </div>
                <div className={styles.tags}>
                  {relatedArticle.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogDetail; 