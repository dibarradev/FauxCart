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
