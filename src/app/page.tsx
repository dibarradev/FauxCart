'use client';

import { useAuth } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import LoadingSpinner from '../components/LoadingSpinner';
import Button from '../components/Button';
import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.loadingContainer}>
            <LoadingSpinner />
            <p>Loading...</p>
          </div>
        </main>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.hero}>
            <h1 className={styles.title}>
              Welcome to <span className={styles.brand}>FauxCart</span>
            </h1>
            <p className={styles.description}>
              Your online shopping destination. Sign in or create an account to
              start shopping!
            </p>
            <AuthForm />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.welcomeHeader}>
            <h1 className={styles.title}>
              Welcome back to <span className={styles.brand}>FauxCart</span>
            </h1>
            <div className={styles.userInfo}>
              <span
                className={styles.userEmail}
                title={user.email || undefined}
              >
                {user.email}
              </span>
              <Button variant="outline" size="small" onClick={signOut}>
                Sign out
              </Button>
            </div>
          </div>

          <p className={styles.description}>
            Ready to continue shopping? Browse our collection of products!
          </p>

          <Link href="/catalog">
            <Button variant="primary" size="large">
              Start Shopping
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
