import CardDetails from '@/components/CardDetails';
import SearchFilter from '@/components/SearchFilter';
import { Group, Yard } from '@/libs';
import Bangkok from '@/public/assets/ImageDetail/Bangkok.svg';
import ChaoPhraya from '@/public/assets/ImageDetail/ChaoPhraya.svg';
import ChiangMai from '@/public/assets/ImageDetail/ChiangMai.svg';
import Nara from '@/public/assets/ImageDetail/Nara.svg';
import BarImage from '@/public/assets/Search/BarImage.svg';
import Image from 'next/image';
import styles from './styles.module.scss';

const Search = () => {
  return (
    <div className={styles.container}>
      <Yard className={styles.nav}>
        <Image src={BarImage} alt="image" className={styles.image} />
      </Yard>
      <Yard className={styles.content}>
        <Group className={styles.filter}>
          <SearchFilter />
        </Group>
        <Group className={styles.detail1}>
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
        </Group>
        <Group className={styles.detail2}>
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
        </Group>
      </Yard>
    </div>
  );
};

export default Search;
