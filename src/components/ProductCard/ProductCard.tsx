import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import styles from './ProductCard.module.scss';
import { Product } from '../../types/Product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className={styles.productCard}>
      <Link href={`/product/${product.id}`} className={styles.productLink}>
        <div className={styles.productImage}>
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            style={{
              objectFit: 'contain',
              maxWidth: '100%',
              height: 'auto',
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.productInfo}>
          <span className={styles.category}>{product.category}</span>
          <h3 className={styles.productName}>{product.title}</h3>
          <p className={styles.price}>{formatPrice(product.price)}</p>
        </div>
      </Link>
      <div className={styles.actions}>
        <Button
          variant="primary"
          size="small"
          onClick={(e?: React.MouseEvent<HTMLButtonElement>) => {
            e?.stopPropagation();
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
