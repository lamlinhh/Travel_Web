'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchCategories } from '@/redux/slices/categorySlice';
import Link from 'next/link';
import styles from './styles.module.scss';

const popularDestinations = {
  'Sydney': {
    image: 'https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/sydney-opera-house-near-body-of-water-during-daytime-1_fbgqyc.webp',
    description: 'Khám phá vẻ đẹp biểu tượng của Nhà hát Opera Sydney và cảng biển tuyệt đẹp.'
  },
  'Tokyo': {
    image: 'https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/japan-tokyo_wpvxra.webp',
    description: 'Trải nghiệm sự pha trộn độc đáo giữa truyền thống và hiện đại tại thủ đô Nhật Bản.'
  },
  'Moscow': {
    image: 'https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/moscow_jr5bb4.webp',
    description: 'Khám phá kiến trúc tráng lệ và lịch sử phong phú của thủ đô Nga.'
  },
  'Phuket': {
    image: 'https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/phuket_utqmlt.webp',
    description: 'Tận hưởng bãi biển cát trắng và văn hóa Thái Lan tuyệt vời.'
  },
  'Singapore': {
    image: 'https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/singapore_qihqqs_ehracs.webp',
    description: 'Khám phá thành phố hiện đại với kiến trúc độc đáo và ẩm thực đa dạng.'
  },
  'Hội An': {
    image: 'https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/peter-borter-ai_mpqLXBTc-unsplash_u2s6qy.webp',
    description: 'Đắm mình trong vẻ đẹp cổ kính của phố cổ Hội An, di sản văn hóa thế giới.'
  }
};

const Categories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, loading, error } = useSelector((state: RootState) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner}></div>
        <p>Đang tải danh sách categories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
        <button onClick={() => dispatch(fetchCategories())} className={styles.retryButton}>
          Thử lại
        </button>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <img 
          src="https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/aboutus-vqpcn8.webp" 
          alt="Categories Banner"
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}>
          <h1>Khám phá điểm đến mới</h1>
          <p>Hành trình tuyệt vời đang chờ đón bạn</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Danh mục du lịch</h2>
          <p>Chọn điểm đến cho chuyến đi tiếp theo của bạn</p>
        </div>

        {categories.length === 0 ? (
          <div className={styles.noCategories}>
            Chưa có danh mục nào.
          </div>
        ) : (
          <div className={styles.grid}>
            {categories.map((category) => {
              const destination = popularDestinations[category.CategoryName];
              return (
                <div key={category._id} className={styles.card}>
                  <div className={styles.cardImage}>
                    <img 
                      src={destination?.image || 'https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/default-destination.webp'} 
                      alt={category.CategoryName}
                    />
                    <div className={styles.cardOverlay}>
                      <div className={styles.cardOverlayContent}>
                        <h3>{category.CategoryName}</h3>
                        <p>{destination?.description || category.Description}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <Link href={`/categories/${category._id}`}>
                      <button className={styles.viewButton}>
                        <span>Xem chi tiết</span>
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;