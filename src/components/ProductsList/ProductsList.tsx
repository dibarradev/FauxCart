'use client';

import { useEffect, useCallback, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import LoadingSpinner from '../LoadingSpinner';
import SearchBar from '../SearchBar';
import CategoryFilter from '../CategoryFilter';
import { useInfiniteProducts } from '../../hooks/useInfiniteProducts';
import styles from './ProductsList.module.scss';

export default function ProductsList() {
  // State to track if the component has mounted
  const [isMounted, setIsMounted] = useState(false);
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Custom hook to fetch products with infinite scroll
  const { products, loading, hasMore, loadMore, categories, loadAllFilteredProducts } = useInfiniteProducts({
    searchTerm,
    selectedCategory
  });

  // Set mounted state after the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle search
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    // If there's a search term or filter, load all results immediately
    if (term || selectedCategory) {
      loadAllFilteredProducts();
    }
  }, [selectedCategory, loadAllFilteredProducts]);

  // Handle category filter
  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    // If there's a search term or filter, load all results immediately
    if (searchTerm || category) {
      loadAllFilteredProducts();
    }
  }, [searchTerm, loadAllFilteredProducts]);

  // Set mounted state after the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll event to load more products
  const handleScroll = useCallback(() => {
    // Don't load more if we're filtering/searching (all results already loaded)
    if (loading || !hasMore || searchTerm || selectedCategory) return;

    const scrollTop = document.documentElement.scrollTop; // Get the current scroll position
    const scrollHeight = document.documentElement.scrollHeight; // Total height of the document
    const clientHeight = document.documentElement.clientHeight; // Height of the viewport

    // Check if the user has scrolled near the bottom of the page
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      loadMore();
    }
  }, [loading, hasMore, loadMore, searchTerm, selectedCategory]);

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
      <div className={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <div className={styles.emptyState}>
          <h3>
            {searchTerm || selectedCategory 
              ? "No products found matching your criteria." 
              : "Sorry, no products available at the moment."
            }
          </h3>
          <p>
            {searchTerm || selectedCategory 
              ? "Try adjusting your search or filter options." 
              : "Please try again later."
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
      
      {loading && hasMore && !searchTerm && !selectedCategory && (
        <LoadingSpinner />
      )}
      
      {!hasMore && products.length > 0 && (
        <div className={styles.endMessage}>
          <p>
            {searchTerm || selectedCategory 
              ? `Showing all ${products.length} results.` 
              : "You have reached the end of the products."
            }
          </p>
        </div>
      )}
    </div>
  );
}
