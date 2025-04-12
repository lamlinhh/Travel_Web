'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchCategoryById } from '@/redux/slices/categorySlice';
import styles from './styles.module.scss';
import { Container } from '@/libs';

interface Props {
  id: string;
}

const CategoryDetail = ({ id }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentCategory, loading, error } = useSelector(
    (state: RootState) => state.category
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchCategoryById(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!currentCategory) {
    return <div>No category found</div>;
  }

  return (
    <Container className={styles.container}>
      <div className={styles.header}>
        <h1>{currentCategory.categoryName}</h1>
      </div>
      <div className={styles.content}>
        <p>{currentCategory.description}</p>
        <div className={styles.metadata}>
          <p>Created: {new Date(currentCategory.createdAt).toLocaleDateString()}</p>
          <p>Last Updated: {new Date(currentCategory.updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </Container>
  );
};

export default CategoryDetail; 