import styles from "./styles.module.scss";

const blogs = [
  {
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fv1737801490%2Fnextravel%2Fblog%2Fpyramid_girl_sivi1o.jpg&w=1080&q=75",
    title: "Exploring the Great Wall of China",
    size: "large",
  },
  {
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fv1737801421%2Fnextravel%2Fblog%2Fback-parker_kidsmi.jpg&w=750&q=75",
    title: "A Journey Through Kyoto’s Temples",
    size: "small",
  },
  {
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fv1737802271%2Fnextravel%2Fblog%2Friver_piyd67.jpg&w=1080&q=75",
    size: "small",
    title: "Santorini: The Gem of the Aegean",
  },
  {
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fc_fill%2Cw_800%2Fv1737802452%2Fnextravel%2Fblog%2Ffuji_moutain_zlo1b3.jpg&w=828&q=75",
    size: "small",
    title: "Paris in Spring: A Dreamy Getaway",
  },
  {
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fc_fill%2Cw_800%2Fv1737801503%2Fnextravel%2Fblog%2Fsnow_village_y1rnpj.jpg&w=1080&q=75",
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
