import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import BarImage from '@/public/assets/Search/BarImage.svg';
import CardDetails from '@/components/CardDetails';
import SearchFilter from '@/components/SearchFilter';
import ChiangMai from '@/public/assets/ImageDetail/ChiangMai.svg';
import ChaoPhraya from '@/public/assets/ImageDetail/ChaoPhraya.svg';
import Nara from '@/public/assets/ImageDetail/Nara.svg';
import Bangkok from '@/public/assets/ImageDetail/Bangkok.svg';

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
          <CardDetails
            name={'Chiang Mai'}
            location={'Thailand'}
            desc={
              'Visit the temples and the Chiang Mai Night Bazaar, a huge huge market located on Chiang Klan Road'
            }
            price={'490'}
            time="1 Week"
            img={ChiangMai}
            colors="#F76570"
          />
          <CardDetails
            name={'Chao Phraya'}
            location={'Thailand'}
            desc={
              'Boat tour in the capital of Thailand, Bangkok, to see the beautiful palaces and monuments from the water.'
            }
            price={'98'}
            time="1 Week"
            img={ChaoPhraya}
            colors="#14B9D5"
          />
        </div>
        <div className={styles.detail2}>
          <CardDetails
            name={'Nara'}
            location={'Japan'}
            desc={
              'Discover the incredible landmarks such as the Todai-ji temple and its famous Great Buddha statue.'
            }
            price={'890'}
            time="1 Week"
            img={Nara}
            colors={'#BA71DA'}
          />
          <CardDetails
            name={'Bangkok'}
            location={'Thailand'}
            desc={
              'Marvelous culinary and cultural trip to the Thai capital with its wonderful monuments and Buddha statues.'
            }
            price={'1000'}
            time="1 Week"
            img={Bangkok}
            colors={'#FFD205'}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
