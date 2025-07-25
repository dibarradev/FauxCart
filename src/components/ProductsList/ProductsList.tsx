'use client';

import { useEffect, useCallback, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import LoadingSpinner from '../LoadingSpinner';
import { useInfiniteProducts } from '../../hooks/useInfiniteProducts';
import styles from './ProductsList.module.scss';

export default function ProductsList() {
  // State to track if the component has mounted
  const [isMounted, setIsMounted] = useState(false);
  // Custom hook to fetch products with infinite scroll
  const { products, loading, hasMore, loadMore } = useInfiniteProducts();

  // Set mounted state after the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll event to load more products
  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return;

    const scrollTop = document.documentElement.scrollTop; // Get the current scroll position
    const scrollHeight = document.documentElement.scrollHeight; // Total height of the document
    const clientHeight = document.documentElement.clientHeight; // Height of the viewport

    // Check if the user has scrolled near the bottom of the page
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      loadMore();
    }
  }, [loading, hasMore, loadMore]);

  // Add scroll event listener
  useEffect(() => {
    if (!isMounted) return;
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, isMounted]);

  // Show loading during initial mount to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className={styles.initialLoading}>
        <LoadingSpinner />
      </div>
    );
  }

  // Show loading spinner if products are being fetched
  if (products.length === 0 && loading) {
    return (
      <div className={styles.initialLoading}>
        <LoadingSpinner />
      </div>
    );
  }

  // Show empty state if no products are available
  if (products.length === 0 && !loading) {
    return (
      <div className={styles.emptyState}>
        <h3>Sorry, no products available at the moment.</h3>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {loading && hasMore && (
        <LoadingSpinner />
      )}
      
      {!hasMore && products.length > 0 && (
        <div className={styles.endMessage}>
          <p>You have reached the end of the products.</p>
        </div>
      )}
    </div>
  );
}
