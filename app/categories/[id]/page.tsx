'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchCategoryById } from '@/redux/slices/categorySlice';
import { use } from 'react';
import styles from './styles.module.scss';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface PageProps {
  params: Promise<{ id: string }>;
}

const CategoryDetail = ({ params }: PageProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentCategory, loading, error } = useSelector((state: RootState) => state.category);
  const resolvedParams = use(params);

  useEffect(() => {
    dispatch(fetchCategoryById(resolvedParams.id));
  }, [dispatch, resolvedParams.id]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner}></div>
        <p>Đang tải thông tin chi tiết...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
        <button onClick={() => dispatch(fetchCategoryById(resolvedParams.id))} className={styles.retryButton}>
          Thử lại
        </button>
      </div>
    );
  }

  if (!currentCategory) {
    return <div className={styles.error}>Không tìm thấy thông tin danh mục.</div>;
  }

  const createdDate = new Date(currentCategory.createdAt);
  const updatedDate = new Date(currentCategory.updatedAt);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>{currentCategory.CategoryName}</h1>
          <div className={styles.details}>
            <div className={styles.field}>
              <label>ID</label>
              <p>{currentCategory._id}</p>
            </div>
            <div className={styles.field}>
              <label>Tên danh mục</label>
              <p>{currentCategory.CategoryName}</p>
            </div>
            <div className={styles.field}>
              <label>Mô tả</label>
              <p>{currentCategory.Description}</p>
            </div>
            <div className={styles.field}>
              <label>Ngày tạo</label>
              <p>{format(createdDate, 'dd MMMM yyyy', { locale: vi })}</p>
            </div>
            <div className={styles.field}>
              <label>Cập nhật lần cuối</label>
              <p>{format(updatedDate, 'dd MMMM yyyy', { locale: vi })}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail; 