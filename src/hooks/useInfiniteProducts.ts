import { useState, useEffect, useCallback, useRef } from 'react';
import { Product } from '../types/Product';

const INITIAL_PRODUCTS = 6;
const LOAD_MORE_PRODUCTS = 3;

export function useInfiniteProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const loadedCountRef = useRef(0);

  // Fetch all products once
  const fetchAllProducts = useCallback(async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data: Product[] = await response.json();
      setAllProducts(data);
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      setHasMore(false);
      return [];
    }
  }, []);

  // Load initial products
  const loadInitialProducts = useCallback(async () => {
    setLoading(true);
    const data = await fetchAllProducts();
    const initialProducts = data.slice(0, INITIAL_PRODUCTS);
    setProducts(initialProducts);
    loadedCountRef.current = INITIAL_PRODUCTS;
    setHasMore(data.length > INITIAL_PRODUCTS);
    setLoading(false);
  }, [fetchAllProducts]);

  // Load more products
  const loadMore = useCallback(() => {
    if (!loading && hasMore && allProducts.length > 0) {
      setLoading(true);
      
      const currentCount = loadedCountRef.current;
      const nextCount = currentCount + LOAD_MORE_PRODUCTS;
      const newProducts = allProducts.slice(currentCount, nextCount);
      
      setProducts(prev => [...prev, ...newProducts]);
      loadedCountRef.current = nextCount;
      setHasMore(nextCount < allProducts.length);
      setLoading(false);
    }
  }, [loading, hasMore, allProducts]);

  useEffect(() => {
    loadInitialProducts();
  }, [loadInitialProducts]);

  return {
    products,
    loading,
    hasMore,
    loadMore
  };
}
