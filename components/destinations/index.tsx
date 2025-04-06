import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { destinations } from './destinations';
import styles from './styles.module.scss';

const Destinations = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/images/placeholder.jpg';
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src="https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/banner.webp"
          alt="Destinations Banner"
          fill
          className={styles.bannerImage}
          priority
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYxMC8wMTQ0Pj5BPTRFND5EPkFJRUlHUVFRUVFRUVFRUVFRUVH/2wBDAR0XFyAeIBogHh4gNCQ0ISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className={styles.textContainer}>
          <h1>All Destinations</h1>
          <p>Discover amazing places around the world</p>
        </div>
      </div>
      <div className={styles.destinationsGrid}>
        {destinations.map((destination) => (
          <Link key={destination.id} href={`/destinations/${destination.id}`}>
            <div className={styles.destinationCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className={styles.image}
                  priority={destination.id === 'sydney'}
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={handleImageError}
                />
                <div className={styles.overlay}>
                  <div className={styles.content}>
                    <h2>{destination.title}</h2>
                    <p>{destination.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destinations;