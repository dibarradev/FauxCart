import { Suspense } from "react";
import Image from "next/image";
import ProtectedRoute from "../../../components/ProtectedRoute";
import styles from "./page.module.scss";
import Button from "../../../components/Button";
import ProductDetail from "../../../components/ProductDetail/ProductDetail";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getProduct(id: string) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      return null; // Product not found, don't log as error
    }
    
    const text = await response.text();
    if (!text || text.trim() === '') {
      return null; // Empty response, product doesn't exist
    }
    
    const product = JSON.parse(text);
    // Verify that the product has the necessary properties
    if (!product.id || !product.title) {
      console.error("Invalid product data received:", product);
      return null;
    }
    
    return product;
  } catch (error) {
    // Only log for real network or parsing errors
    if (error instanceof SyntaxError) {
      console.error("JSON parsing error:", error);
    } else {
      console.error("Network error fetching product:", error);
    }
    return null;
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);
  const backBtnLabel = "← Back to Catalog";

  if (!product) {
    return (
      <ProtectedRoute>
        <div className={styles.page}>
          <header className={`${styles.header} ${styles.notFound}`}>
            <div className={styles.headerContent}>
              <Link href="/catalog" className={styles.backLink}>
                <Button variant="rounded" size="medium">
                  {backBtnLabel}
                </Button>
              </Link>
            </div>
          </header>
          <main className={styles.main}>
            <div className={styles.errorMessage}>
              <h1>Sorry, we couldn&apos;t find this product.</h1>
              <p>The product may have been removed or the link is incorrect.</p>
            </div>
          </main>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerBackground}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              style={{ objectFit: 'cover', opacity: 0.3 }}
              sizes="100vw"
            />
          </div>
          <div className={styles.headerContent}>
            <Link href="/catalog" className={styles.backLink}>
              <Button variant="rounded" size="medium">
                {backBtnLabel}
              </Button>
            </Link>
          </div>
        </header>

        <main className={styles.main}>
          <Suspense fallback={<LoadingSpinner />}>
            <ProductDetail product={product} />
          </Suspense>
        </main>
      </div>
    </ProtectedRoute>
  );
}