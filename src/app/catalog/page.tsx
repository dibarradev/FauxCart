import styles from "./page.module.scss";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";

export default function Catalog() {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      image: "/globe.svg", // Placeholder usando los SVGs existentes
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 399.99,
      image: "/window.svg",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Designer Backpack",
      price: 159.99,
      image: "/file.svg",
      category: "Fashion"
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "/globe.svg",
      category: "Electronics"
    },
    {
      id: 5,
      name: "Ergonomic Office Chair",
      price: 449.99,
      image: "/window.svg",
      category: "Furniture"
    },
    {
      id: 6,
      name: "Wireless Gaming Mouse",
      price: 89.99,
      image: "/file.svg",
      category: "Electronics"
    }
  ];

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
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
