'use client';

import { useState, useCallback } from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = "Search products..." }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  }, [onSearch]);

  const handleClear = useCallback(() => {
    setSearchTerm('');
    onSearch('');
  }, [onSearch]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInputWrapper}>
        <svg 
          className={styles.searchIcon} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className={styles.clearButton}
            type="button"
            aria-label="Clear search"
          >
            <svg 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
