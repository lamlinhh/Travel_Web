"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { destinations } from './destinations';
import styles from './allDestinations.module.scss';

const AllDestinations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>All Destinations</h1>
          <p className={styles.subtitle}>Discover amazing places around the world</p>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.grid}>
          {destinations.map((destination) => (
            <Link key={destination.id} href={`/destinations/${destination.id}`}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className={styles.image}
                    priority={destination.id === 'sydney'}
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.overlay}>
                    <h2>{destination.title}</h2>
                    <p>{destination.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDestinations;
