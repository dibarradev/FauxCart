'use client';

import { useState, useEffect } from 'react';
import ProductsList from '../ProductsList';
import LoadingSpinner from '../LoadingSpinner';
import styles from './CatalogContent.module.scss';

export default function CatalogContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner />
      </div>
    );
  }

  return <ProductsList />;
}
