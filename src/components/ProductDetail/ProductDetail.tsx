import Image from "next/image";
import Button from "../Button";
import styles from "./ProductDetail.module.scss";
import { Product } from "../../types/Product";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const formatRating = (rating: { rate: number; count: number }) => {
    return `${rating.rate.toFixed(1)} (${rating.count} reviews)`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={500}
            style={{
              objectFit: 'contain',
              maxWidth: '100%',
              height: 'auto'
            }}
            sizes="(max-width: 768px) 90vw, 500px"
            priority
          />
        </div>
        
        <div className={styles.infoSection}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.title}>{product.title}</h1>
          <div className={styles.rating}>
            <span className={styles.stars}>
              {'★'.repeat(Math.floor(product.rating.rate))}
              {'☆'.repeat(5 - Math.floor(product.rating.rate))}
            </span>
            <span className={styles.ratingText}>
              {formatRating(product.rating)}
            </span>
          </div>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.priceSection}>
            <span className={styles.price}>{formatPrice(product.price)}</span>
          </div>
          <div className={styles.actions}>
            <Button variant="primary" size="large">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
