import { Container, Yard } from "@/libs";
import styles from "./styles.module.scss";

const destinations = [
  {
    name: "Sydney",
    tours: 10,
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fv1737607159%2Fnextravel%2Fsydney-opera-house-near-body-of-water-during-daytime-1_fbgqyc.jpg&w=640&q=75",
  },
  {
    name: "Tokyo",
    tours: 20,
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fv1737617176%2Fnextravel%2Fjapan-tokyo_wpvxra.jpg&w=750&q=75",
  },
  {
    name: "Moscow",
    tours: 13,
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fv1737617705%2Fnextravel%2Fmoscow_jr5bb4.jpg&w=750&q=75",
  },
  {
    name: "Phuket",
    tours: 19,
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fc_crop%2Cw_800%2Fv1737617874%2Fnextravel%2Fphuket_utqmlt.jpg&w=828&q=75",
  },
  {
    name: "Singapore",
    tours: 19,
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fv1737618599%2Fnextravel%2Fsingapore_qihqqs_ehracs.png&w=1200&q=75",
  },
  {
    name: "Hoi An",
    tours: 19,
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrnf8u8vq%2Fimage%2Fupload%2Fv1737618707%2Fnextravel%2Fpeter-borter-ai_mpqLXBTc-unsplash_u2s6qy.jpg&w=1080&q=75",
  },
];

const index = () => {
  return (
    <Container className={styles.container}>
      <Yard className={styles.header}>
        <h2>Popular Destinations</h2>
        <a href="#" className={styles.viewAll}>
          View all destinations →
        </a>
      </Yard>

      <Yard className={styles.grid}>
        {destinations.map((destination, index) => (
          <div key={index} className={styles.card}>
            <img src={destination.image} alt={destination.name} />
            <div className={styles.overlay}></div>
            <div className={styles.text}>
              <h3>{destination.name}</h3>
              <p>{destination.tours} tours</p>
            </div>
          </div>
        ))}
      </Yard>
    </Container>
  );
};

export default index;
