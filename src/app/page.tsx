import styles from "./page.module.scss";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.brand}>FauxCart</span>
          </h1>

          <Button variant="primary" size="large">
            Start Shopping
          </Button>
        </div>
      </main>
    </div>
  );
}
