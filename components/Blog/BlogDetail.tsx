"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { articles } from "@/components/Blog/articles"; // Import dữ liệu từ component Blog
import styles from "./styles.module.scss";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Lấy id từ URL

  interface Article {
    id: number;
    title: string;
    date: string;
    description: string;
    content: string;
    image: string;
  }

  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (id) {
      const foundArticle = articles.find((item) => item.id === parseInt(id as string));
      setArticle(foundArticle || null);
    }
  }, [id]);

  if (!article) {
    return <p className={styles.notFound}>Bài viết không tồn tại</p>;
  }

  // Lọc bài viết liên quan
  const relatedArticles = articles.filter((item) => item.id !== article.id).slice(0, 2);

  return (
    <>
      <Header />
      <div className={styles.blogDetailContainer}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.date}>📅 {article.date}</p>
          <Image src={article.image} alt={article.title} className={styles.articleImage} width={800} height={500} />
          <p className={styles.description}>{article.description}</p>
          <div className={styles.content}>{article.content}</div>
        </div>

        {/* Related Articles */}
        <aside className={styles.sidebar}>
          <h2>Related Articles</h2>
          <div className={styles.relatedArticles}>
            {relatedArticles.map((item) => (
              <div key={item.id} className={styles.relatedItem} onClick={() => router.push(`/blog/${item.id}`)}>
                <Image src={item.image} alt={item.title} width={300} height={200} className={styles.relatedImage} />
                <p className={styles.relatedTitle}>{item.title}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
