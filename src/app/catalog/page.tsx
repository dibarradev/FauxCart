import styles from "./page.module.scss";
import Button from "../../components/Button";
import CatalogContent from "../../components/CatalogContent";
import Link from "next/link";

export default function Catalog() {
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
        <CatalogContent />
      </main>
    </div>
  );
}
