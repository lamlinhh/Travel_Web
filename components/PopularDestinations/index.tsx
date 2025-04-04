"use client";
import { Container, Yard } from "@/libs";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

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

const PopularDestinations = () => {
  const router = useRouter();

  return (
    <Container className={styles.container}>
      {/* Tiêu đề & Nút "View all destinations" */}
      <Yard className={styles.header}>
        <h2>Popular Destinations</h2>
        <a
          onClick={() => router.push("/destinations")}
          className={styles.viewAll}
          style={{ cursor: "pointer" }}
        >
          View all destinations →
        </a>
      </Yard>

      {/* Hiển thị danh sách địa điểm */}
      <Yard className={styles.grid}>
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => router.push(`/destinations/${destination.name}`)}
            style={{ cursor: "pointer" }}
          >
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

export default PopularDestinations;