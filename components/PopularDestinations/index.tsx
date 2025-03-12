import { Container, Yard } from "@/libs";
import styles from "./styles.module.scss";

const destinations = [
  {
    name: "Sydney",
    tours: 10,
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/sydney-opera-house-near-body-of-water-during-daytime-1_fbgqyc.webp",
  },
  {
    name: "Tokyo",
    tours: 20,
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/japan-tokyo_wpvxra.webp",
  },
  {
    name: "Moscow",
    tours: 13,
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/moscow_jr5bb4.webp",
  },
  {
    name: "Phuket",
    tours: 19,
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/phuket_utqmlt.webp",
  },
  {
    name: "Singapore",
    tours: 19,
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/singapore_qihqqs_ehracs.webp",
  },
  {
    name: "Hoi An",
    tours: 19,
    image:
      "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/peter-borter-ai_mpqLXBTc-unsplash_u2s6qy.webp",
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
