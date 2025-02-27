'use client';
import React, { useState } from 'react';
import styles from './styles.module.scss';

const SearchFilter = () => {
  const [price, setPrice] = useState(5000);
  return (
    <div className={styles.filterContainer}>
      <div className={styles.section}>
        <label className={styles.label}>Select your destination:</label>
        <input
          type="text"
          className={styles.input}
          placeholder="All Destinations"
          readOnly
        />
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Select your date:</label>
        <input type="date" className={styles.input} />
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Typologies:</label>
        <div className={styles.checkboxGroup}>
          {[
            'Sports Activities',
            'Heritage Tours',
            'Budget Travel',
            'Eco-tourism',
            'Beach Holidays',
          ].map((item) => (
            <label key={item}>
              <input type="checkbox" /> {item}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label className={styles.label}>Max Price:</label>
          <span>${price}</span>
        </div>
        <input
          className={styles.rangeInput}
          type="range"
          min="0"
          max="5000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <label>
          <input type="checkbox" /> See only promotions
        </label>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Durations:</label>
        <div className={styles.checkboxGroup}>
          {['1 Week', '15 Days', '10 Days', '5 Days'].map((item) => (
            <label key={item}>
              <input type="checkbox" /> {item}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Difficulty:</label>
        <div className={styles.checkboxGroup}>
          {['Challenging', 'Easy', 'Difficult', 'Medium'].map((item) => (
            <label key={item}>
              <input type="checkbox" /> {item}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Min Age:</label>
        <div className={styles.checkboxGroup}>
          {['0', '18', '16', '5'].map((item) => (
            <label key={item}>
              <input type="checkbox" /> {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
