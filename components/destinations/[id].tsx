import React from 'react';
import Image from 'next/image';
import { destinations } from './destinations';
import styles from './styles.module.scss';

interface Props {
  id: string;
}

const DestinationDetail = ({ id }: Props) => {
  const destination = destinations.find((d) => d.id === id);

  if (!destination || !destination.details) {
    return <div>Destination not found</div>;
  }

  const {
    overview,
    highlights,
    itinerary,
    tips,
    bestTimeToVisit,
    currency,
    language,
    climate,
    visaInformation,
    transportOptions,
    accommodationTypes,
    foodRecommendations,
    safetyTips,
    budget,
    popularTours,
    nearbyAttractions,
    culturalTips,
    packingList
  } = destination.details;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className={styles.bannerImage}
          priority
        />
        <div className={styles.textContainer}>
          <h1>{destination.title}</h1>
          <p>{destination.description}</p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>

        <div className={styles.section}>
          <h2>Highlights</h2>
          <ul>
            {highlights?.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Itinerary</h2>
          <ul>
            {itinerary?.map((day, index) => (
              <li key={index}>
                <strong>Day {index + 1}:</strong> {day}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Tips</h2>
          <ul>
            {tips?.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Best Time to Visit</h2>
          <p>{bestTimeToVisit}</p>
        </div>

        <div className={styles.section}>
          <h2>Currency</h2>
          <p>{currency}</p>
        </div>

        <div className={styles.section}>
          <h2>Language</h2>
          <p>{language}</p>
        </div>

        <div className={styles.section}>
          <h2>Climate</h2>
          <p>{climate}</p>
        </div>

        <div className={styles.section}>
          <h2>Visa Information</h2>
          <p>{visaInformation}</p>
        </div>

        <div className={styles.section}>
          <h2>Transport Options</h2>
          <ul>
            {transportOptions?.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Accommodation Types</h2>
          <ul>
            {accommodationTypes?.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Food Recommendations</h2>
          <ul>
            {foodRecommendations?.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Safety Tips</h2>
          <ul>
            {safetyTips?.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Budget</h2>
          <div className={styles.budget}>
            <div>
              <h3>Low Budget</h3>
              <p>{budget?.low}</p>
            </div>
            <div>
              <h3>Medium Budget</h3>
              <p>{budget?.medium}</p>
            </div>
            <div>
              <h3>High Budget</h3>
              <p>{budget?.high}</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Popular Tours</h2>
          <ul>
            {popularTours?.map((tour, index) => (
              <li key={index}>{tour}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Nearby Attractions</h2>
          <ul>
            {nearbyAttractions?.map((attraction, index) => (
              <li key={index}>{attraction}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Cultural Tips</h2>
          <ul>
            {culturalTips?.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Packing List</h2>
          <ul>
            {packingList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail; 