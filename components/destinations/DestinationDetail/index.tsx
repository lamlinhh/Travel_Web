import { Container, Yard } from "@/libs";
import styles from "./styles.module.scss";
import { destinations } from "../destinations";
import Link from "next/link";

interface DestinationDetailProps {
  id: string;
}

export default function DestinationDetail({ id }: DestinationDetailProps) {
  // Convert both IDs to lowercase and remove any spaces/hyphens for comparison
  const normalizedId = id.toLowerCase().replace(/[-\s]/g, '');
  const destination = destinations.find((d) => 
    d.id.toLowerCase().replace(/[-\s]/g, '') === normalizedId
  );

  if (!destination) {
    return (
      <Container className={styles.notFound}>
        <h1>Destination not found</h1>
        <Link href="/destinations">Back to Destinations</Link>
      </Container>
    );
  }

  return (
    <Container className={styles.container}>
      <Yard className={styles.header}>
        <div className={styles.imageContainer}>
          <img src={destination.image} alt={destination.title} />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.headerContent}>
          <h1>{destination.title}</h1>
          <p>{destination.description}</p>
        </div>
      </Yard>

      <Yard className={styles.content}>
        <div className={styles.overview}>
          <h2>Overview</h2>
          <p>{destination.data.overview}</p>
        </div>

        <div className={styles.highlights}>
          <h2>Highlights</h2>
          <ul>
            {destination.data.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className={styles.itinerary}>
          <h2>Suggested Itinerary</h2>
          <ol>
            {destination.data.itinerary.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ol>
        </div>

        <div className={styles.tips}>
          <h2>Travel Tips</h2>
          <ul>
            {destination.data.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className={styles.practicalInfo}>
          <h2>Practical Information</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <h3>Best Time to Visit</h3>
              <p>{destination.data.bestTime}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Currency</h3>
              <p>{destination.data.currency}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Language</h3>
              <p>{destination.data.language}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Climate</h3>
              <p>{destination.data.climate}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Visa Requirements</h3>
              <p>{destination.data.visa}</p>
            </div>
          </div>
        </div>

        <div className={styles.transport}>
          <h2>Getting Around</h2>
          <ul>
            {destination.data.transport.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.accommodation}>
          <h2>Accommodation Options</h2>
          <ul>
            {destination.data.accommodation.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.food}>
          <h2>Local Cuisine</h2>
          <ul>
            {destination.data.food.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.safety}>
          <h2>Safety Tips</h2>
          <ul>
            {destination.data.safety.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.budget}>
          <h2>Budget Guide</h2>
          <div className={styles.budgetGrid}>
            <div className={styles.budgetItem}>
              <h3>Budget</h3>
              <p>{destination.data.budget.low}</p>
            </div>
            <div className={styles.budgetItem}>
              <h3>Mid-Range</h3>
              <p>{destination.data.budget.medium}</p>
            </div>
            <div className={styles.budgetItem}>
              <h3>Luxury</h3>
              <p>{destination.data.budget.high}</p>
            </div>
          </div>
        </div>

        <div className={styles.tours}>
          <h2>Popular Tours</h2>
          <div className={styles.toursGrid}>
            {destination.data.popularTours.map((tour, index) => (
              <div key={index} className={styles.tourCard}>
                <h3>{tour.name}</h3>
                <p className={styles.duration}>{tour.duration}</p>
                <p className={styles.price}>{tour.price}</p>
                <p className={styles.description}>{tour.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.nearby}>
          <h2>Nearby Attractions</h2>
          <ul>
            {destination.data.nearbyAttractions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.culturalTips}>
          <h2>Cultural Tips</h2>
          <ul>
            {destination.data.culturalTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className={styles.packingList}>
          <h2>Packing List</h2>
          <ul>
            {destination.data.packingList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Yard>

      <Yard className={styles.related}>
        <h2>Other Destinations</h2>
        <div className={styles.relatedGrid}>
          {destinations
            .filter((d) => d.id !== destination.id)
            .slice(0, 3)
            .map((related) => (
              <Link
                key={related.id}
                href={`/destinations/${related.id}`}
                className={styles.relatedCard}
              >
                <img src={related.image} alt={related.title} />
                <h3>{related.title}</h3>
              </Link>
            ))}
        </div>
      </Yard>
    </Container>
  );
} 