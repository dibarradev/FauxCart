import styles from "./page.module.scss";
import Button from "../components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.brand}>FauxCart</span>
          </h1>

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
