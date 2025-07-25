import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "../contexts/AuthContext";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "FauxCart - Online Store",
  description: "Discover amazing products in our modern e-commerce platform. Browse through a curated selection of items with secure authentication and seamless shopping experience.",
  keywords: ["ecommerce", "online store", "shopping", "products", "catalog", "fashion", "electronics"],
  authors: [{ name: "FauxCart Team" }],
  creator: "FauxCart",
  publisher: "FauxCart",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fauxcartshop.netlify.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "FauxCart - Your Modern Online Store",
    description: "Discover amazing products in our modern e-commerce platform. Browse through a curated selection of items with secure authentication and seamless shopping experience.",
    url: 'https://fauxcartshop.netlify.app/',
    siteName: 'FauxCart',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/faux-logo.webp',
        width: 1200,
        height: 630,
        alt: 'FauxCart - Online Store',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FauxCart - Your Modern Online Store",
    description: "Discover amazing products in our modern e-commerce platform. Browse through a curated selection of items with secure authentication.",
    images: ['/faux-logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'E-commerce Platform',
  other: {
    'theme-color': '#000000',
    'color-scheme': 'light dark',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FauxCart',
    description: 'Modern e-commerce platform with secure authentication and curated product selection',
    url: 'https://fauxcartshop.netlify.app/',
    publisher: {
      '@type': 'Organization',
      name: 'FauxCart',
      url: 'https://fauxcartshop.netlify.app/'
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fakestoreapi.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="application-name" content="FauxCart" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FauxCart" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#342E45" />

        
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
