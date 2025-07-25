'use client';

import ProtectedRoute from '../../components/ProtectedRoute';
import UserHeader from '../../components/UserHeader';
import styles from './page.module.scss';
import Button from '../../components/Button';
import CatalogContent from '../../components/CatalogContent';
import Link from 'next/link';

export default function Catalog() {
  return (
    <ProtectedRoute>
      <div className={styles.page}>
        <UserHeader />
        <header className={styles.header}>
          <h1 className={styles.title}>Catalog</h1>
          <Link href="/" className={styles.backLink}>
            <Button variant="rounded" size="medium">
              ← Back to Home
            </Button>
          </Link>
        </header>

        <main className={styles.main}>
          <CatalogContent />
        </main>
      </div>
    </ProtectedRoute>
  );
}
