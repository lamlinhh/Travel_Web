import styles from "./styles.module.scss";

const blogs = [
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/pyramid_girl_sivi1o.webp",
    title: "Exploring the Great Wall of China",
    size: "large",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/back-parker_kidsmi.webp",
    title: "A Journey Through Kyoto’s Temples",
    size: "small",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/river_piyd67.webp",
    size: "small",
    title: "Santorini: The Gem of the Aegean",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/fuji_moutain_zlo1b3.webp",
    size: "small",
    title: "Paris in Spring: A Dreamy Getaway",
  },
  {
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/snow_village_y1rnpj.webp",
    size: "small",
    title: "Venice: The City of Canals",
  },
];

const TravelBlog = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Travel Blog</h2>
      <a href="#" className={styles.viewAll}>
        View all posts →
      </a>
      <div className={styles.grid}>
        {blogs.map((blog, index) => (
          <div key={index} className={`${styles.card} ${styles[blog.size]}`}>
            <img src={blog.image} alt={blog.title} className={styles.image} />
            <div className={styles.overlay}>{blog.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBlog;
