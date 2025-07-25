import { useState, useEffect, useCallback, useRef } from 'react';
import { Product } from '../types/Product';

const INITIAL_PRODUCTS = 6;
const LOAD_MORE_PRODUCTS = 3;

interface UseInfiniteProductsProps {
  searchTerm?: string;
  selectedCategory?: string;
}

export function useInfiniteProducts(props: UseInfiniteProductsProps = {}) {
  const { searchTerm = '', selectedCategory = '' } = props;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const loadedCountRef = useRef(0);
  const filteredProductsRef = useRef<Product[]>([]);

  // Fetch all products once
  const fetchAllProducts = useCallback(async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data: Product[] = await response.json();
      setAllProducts(data);

      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set(data.map(product => product.category))
      );
      setCategories(uniqueCategories);

      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      setHasMore(false);
      return [];
    }
  }, []);

  // Filter products based on search term and category
  const getFilteredProducts = useCallback(() => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        product => product.category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [allProducts, searchTerm, selectedCategory]);

  // Load initial products
  const loadInitialProducts = useCallback(async () => {
    setLoading(true);

    if (allProducts.length === 0) {
      await fetchAllProducts();
    }

    const filtered = getFilteredProducts();
    filteredProductsRef.current = filtered;

    const initialProducts = filtered.slice(0, INITIAL_PRODUCTS);
    setProducts(initialProducts);
    loadedCountRef.current = INITIAL_PRODUCTS;
    setHasMore(filtered.length > INITIAL_PRODUCTS);
    setLoading(false);
  }, [fetchAllProducts, getFilteredProducts, allProducts.length]);

  // Load more products
  const loadMore = useCallback(() => {
    if (!loading && hasMore && filteredProductsRef.current.length > 0) {
      setLoading(true);

      const currentCount = loadedCountRef.current;
      const nextCount = currentCount + LOAD_MORE_PRODUCTS;
      const newProducts = filteredProductsRef.current.slice(
        currentCount,
        nextCount
      );

      setProducts(prev => [...prev, ...newProducts]);
      loadedCountRef.current = nextCount;
      setHasMore(nextCount < filteredProductsRef.current.length);
      setLoading(false);
    }
  }, [loading, hasMore]);

  // Load all filtered products (for search/filter scenarios)
  const loadAllFilteredProducts = useCallback(() => {
    if (filteredProductsRef.current.length > 0) {
      setProducts(filteredProductsRef.current);
      loadedCountRef.current = filteredProductsRef.current.length;
      setHasMore(false);
    }
  }, []);

  // Reset when filters change
  useEffect(() => {
    if (allProducts.length > 0) {
      const filtered = getFilteredProducts();
      filteredProductsRef.current = filtered;

      const initialProducts = filtered.slice(0, INITIAL_PRODUCTS);
      setProducts(initialProducts);
      loadedCountRef.current = INITIAL_PRODUCTS;
      setHasMore(filtered.length > INITIAL_PRODUCTS);
    }
  }, [searchTerm, selectedCategory, getFilteredProducts, allProducts.length]);

  useEffect(() => {
    if (allProducts.length === 0) {
      loadInitialProducts();
    }
  }, [loadInitialProducts, allProducts.length]);

  return {
    products,
    loading,
    hasMore,
    loadMore,
    categories,
    loadAllFilteredProducts,
  };
}
