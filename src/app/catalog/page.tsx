import styles from "./page.module.scss";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard/ProductCard";
import Link from "next/link";
import { Product } from "../../types/Product";

async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function Catalog() {
  const products = await getProducts();

  return (
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
        {products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h3>Sorry, no products available at the moment.</h3>
            <p>Please try again later.</p>
          </div>
        ) : (
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
