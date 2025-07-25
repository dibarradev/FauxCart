'use client';

import { useCallback } from 'react';
import Button from '../Button';
import styles from './CategoryFilter.module.scss';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const handleCategoryClick = useCallback((category: string) => {
    // If clicking the same category, clear the filter
    const newCategory = selectedCategory === category ? '' : category;
    onCategoryChange(newCategory);
  }, [selectedCategory, onCategoryChange]);

  const formatCategoryName = (category: string) => {
    return category
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.filterTitle}>Filter by Category</h3>
      <div className={styles.categoryButtons}>
        <Button
          variant={selectedCategory === '' ? 'primary' : 'secondary'}
          size="small"
          onClick={() => onCategoryChange('')}
        >
          All Categories
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'secondary'}
            size="small"
            onClick={() => handleCategoryClick(category)}
          >
            {formatCategoryName(category)}
          </Button>
        ))}
      </div>
    </div>
  );
}
