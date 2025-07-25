import ProtectedRoute from "../../components/ProtectedRoute";
import styles from "./page.module.scss";
import Button from "../../components/Button";
import CatalogContent from "../../components/CatalogContent";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalog - FauxCart",
  description: "Browse our extensive collection of products. Discover fashion, electronics, jewelry, and more with detailed information and competitive prices.",
  openGraph: {
    title: "Product Catalog - FauxCart",
    description: "Browse our extensive collection of products. Discover fashion, electronics, jewelry, and more with detailed information and competitive prices.",
    images: [
      {
        url: '/catalog-header-background.webp',
        width: 1200,
        height: 630,
        alt: 'FauxCart Product Catalog',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Product Catalog - FauxCart",
    description: "Browse our extensive collection of products. Discover fashion, electronics, jewelry, and more.",
    images: ['/catalog-header-background.webp'],
  },
};

export default function Catalog() {
  return (
    <ProtectedRoute>
      <div className={styles.page}>
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
