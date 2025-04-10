'use client';

import { CategoryProps } from '@/redux/slices/categorySlice';
import { Yard } from '@/libs';
import styles from './styles.module.scss';

interface Props {
  category: CategoryProps;
  onEdit: () => void;
  onDelete: () => void;
}

const CategoryCard = ({ category, onEdit, onDelete }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3>{category.categoryName}</h3>
        <p>{category.description}</p>
        <div className={styles.metadata}>
          <span>Created: {new Date(category.createdAt).toLocaleDateString()}</span>
          <span>Updated: {new Date(category.updatedAt).toLocaleDateString()}</span>
        </div>
      </div>
      <Yard className={styles.actions}>
        <button onClick={onEdit} className={styles.editButton}>
          Edit
        </button>
        <button onClick={onDelete} className={styles.deleteButton}>
          Delete
        </button>
      </Yard>
    </div>
  );
};

export default CategoryCard; 