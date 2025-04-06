import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { destinations } from './destinations';

const Destinations: React.FC = () => {
  return (
    <div className={styles.destinationsContainer}>
      <div className={styles.header}>
        <h1>Popular Destinations</h1>
        <p>Explore our most popular travel destinations</p>
      </div>

      <div className={styles.destinationsGrid}>
        {destinations.map((destination) => (
          <Link 
            key={destination.id} 
            href={`/destinations/${destination.id}`}
            className={styles.destinationCard}
          >
            <div className={styles.imageContainer}>
              <img src={destination.image} alt={destination.title} />
            </div>
            <div className={styles.content}>
              <h2>{destination.title}</h2>
              <p>{destination.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destinations; 