import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { destinations } from '../destinations';

interface DestinationDetailProps {
  id: string;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ id }) => {
  const destination = destinations.find(dest => dest.id === id);

  if (!destination) {
    return (
      <div className={styles.notFound}>
        <h2>Destination not found</h2>
        <Link href="/destinations">Back to Destinations</Link>
      </div>
    );
  }

  return (
    <div className={styles.destinationDetailContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>{destination.title}</h1>
          <p>{destination.description}</p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.mainContent}>
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
            <div className={styles.itineraryDays}>
              {destination.data.itinerary.map((day, index) => (
                <div key={index} className={styles.day}>
                  <h3>Day {index + 1}</h3>
                  <p>{day}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.tips}>
            <h2>Travel Tips</h2>
            <ul>
              {destination.data.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.quickInfo}>
            <h3>Quick Info</h3>
            <div className={styles.infoItem}>
              <span>Best Time to Visit:</span>
              <p>{destination.data.bestTime}</p>
            </div>
            <div className={styles.infoItem}>
              <span>Currency:</span>
              <p>{destination.data.currency}</p>
            </div>
            <div className={styles.infoItem}>
              <span>Language:</span>
              <p>{destination.data.language}</p>
            </div>
          </div>

          <div className={styles.relatedDestinations}>
            <h3>Related Destinations</h3>
            <div className={styles.relatedList}>
              {destinations
                .filter(dest => dest.id !== id)
                .slice(0, 3)
                .map(dest => (
                  <Link key={dest.id} href={`/destinations/${dest.id}`} className={styles.relatedCard}>
                    <h4>{dest.title}</h4>
                    <p>{dest.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail; 