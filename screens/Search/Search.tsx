import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import BarImage from '@/public/assets/Search/BarImage.svg';
import CardDetails from '@/components/CardDetails';
import SearchFilter from '@/components/SearchFilter';

const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Image src={BarImage} alt="image" className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.filter}>
          <SearchFilter />
        </div>
        <div className={styles.detail1}>
          <CardDetails />
          <CardDetails />
        </div>
        <div className={styles.detail2}>
          <CardDetails />
          <CardDetails />
        </div>
      </div>
    </div>
  );
};

export default Search;
