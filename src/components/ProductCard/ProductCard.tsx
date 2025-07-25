import Image from "next/image";
import Button from "../Button";
import styles from "./ProductCard.module.scss";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <Image 
          src={product.image} 
          alt={product.name}
          width={80}
          height={80}
        />
      </div>
      <div className={styles.productInfo}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.price}>${product.price}</p>
        <Button variant="primary" size="small">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
