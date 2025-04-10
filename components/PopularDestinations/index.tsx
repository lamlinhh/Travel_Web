"use client";
import { Container, Yard } from "@/libs";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const destinations = [
  {
    id: "67f7feb20d6a409199732487",
    name: "Sydney",
    tours: 10,
    image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/sydney-opera-house-near-body-of-water-during-daytime-1_fbgqyc.webp",
  },
  {
    id: "67f7fec10d6a409199732489",
    name: "Tokyo",
    tours: 20,
    image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/japan-tokyo_wpvxra.webp",
  },
  {
    id: "67f7fecb0d6a40919973248b",
    name: "Moscow",
    tours: 13,
    image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/moscow_jr5bb4.webp",
  },
  {
    id: "67f7fed30d6a40919973248d",
    name: "Phuket",
    tours: 19,
    image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/phuket_utqmlt.webp",
  },
  {
    id: "67f7fedb0d6a40919973248f",
    name: "Singapore",
    tours: 19,
    image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/singapore_qihqqs_ehracs.webp",
  },
  {
    id: "67f7fee70d6a409199732491",
    name: "Hội An",
    tours: 19,
    image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/peter-borter-ai_mpqLXBTc-unsplash_u2s6qy.webp",
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
          onClick={() => router.push("/categories")}
          className={styles.viewAll}
          style={{ cursor: "pointer" }}
        >
          View all Categories →
        </a>
      </Yard>

      {/* Hiển thị danh sách địa điểm */}
      <Yard className={styles.grid}>
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => router.push(`/categories/${destination.id}`)}
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