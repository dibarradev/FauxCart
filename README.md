# FauxCart

**FauxCart** is a premium online store built with Next.js 15 and React 19. This project uses TypeScript, SCSS for styling, and a modern component architecture.

## 🚀 Features

- ✅ Next.js 15.4.3 with App Router
- ✅ React 19.1.0 with modern components
- ✅ TypeScript for type safety
- ✅ SCSS with CSS Modules
- ✅ ESLint for code quality
- ✅ Catalog page with products from Fake Store API
- ✅ Individual product detail pages with dynamic routing
- ✅ Product images displayed in header backgrounds
- ✅ Infinite scroll pagination (6 initial, then 3 at a time)
- ✅ Integrated navigation system
- ✅ Responsive product cards with hover effects
- ✅ Loading states and error handling
- ✅ SEO-friendly URLs for each product

## 📋 Requirements

- Node.js 18.17 or higher
- npm or yarn

## ⚙️ Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/FauxCart.git
   cd FauxCart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check the code

## 📁 Project Structure

```
FauxCart/
├── src/
│   ├── app/
│   │   ├── catalog/         # Catalog page with Fake Store API integration
│   │   ├── product/
│   │   │   └── [id]/        # Dynamic product detail pages
│   │   │       ├── page.tsx
│   │   │       └── page.module.scss
│   │   ├── layout.tsx       # Main layout
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── Button/          # Reusable Button component
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.scss
│   │   │   └── index.ts
│   │   ├── CatalogContent/  # Hydration-safe catalog wrapper
│   │   │   ├── CatalogContent.tsx
│   │   │   ├── CatalogContent.module.scss
│   │   │   └── index.ts
│   │   ├── LoadingSpinner/  # Loading component
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── LoadingSpinner.module.scss
│   │   │   └── index.ts
│   │   ├── ProductCard/     # ProductCard component with navigation
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductCard.module.scss
│   │   │   └── index.ts
│   │   ├── ProductDetail/   # Product detail component
│   │   │   ├── ProductDetail.tsx
│   │   │   ├── ProductDetail.module.scss
│   │   │   └── index.ts
│   │   └── ProductsList/    # Infinite scroll list
│   │       ├── ProductsList.tsx
│   │       ├── ProductsList.module.scss
│   │       └── index.ts
│   ├── hooks/
│   │   └── useInfiniteProducts.ts  # Infinite scroll hook
│   ├── types/
│   │   └── Product.ts       # TypeScript interfaces for products
│   └── styles/
│       ├── _variables.scss  # SCSS variables
│       └── _mixins.scss     # SCSS mixins
├── public/                  # Static files
├── package.json
└── README.md
```

## 🎨 Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - Library for user interfaces
- **TypeScript** - JavaScript with static typing
- **SCSS** - CSS preprocessor with enhanced syntax
- **ESLint** - Linting tool for JavaScript/TypeScript

## 🔗 Navigation

- **Home Page** (`/`) - Initial page
- **Catalog** (`/catalog`) - Product list with products from Fake Store API
- **Product Detail** (`/product/[id]`) - Individual product page with detailed information
  - Dynamic routing with product ID
  - Product image as header background
  - Complete product information (title, description, price, rating)
  - Navigation back to catalog

## 🌐 API Integration

This project integrates with the **Fake Store API** to display product data:
- **Base URL**: `https://fakestoreapi.com`
- **Products endpoint**: `/products` and `/products/{id}`
- **Features**: Product images, names, prices, categories, descriptions, and ratings
- **Error handling**: Graceful fallbacks when API is unavailable or product not found

## 🛍️ Product Detail Features

The individual product pages (`/product/[id]`) include:

- **Dynamic Header**: Product image displayed as background with gradient overlay
- **Complete Product Information**:
  - Product title and category
  - Star rating display with review count
  - Full product description
  - Formatted pricing in USD
- **Interactive Elements**:
  - "Add to Cart" button
  - "Back to Catalog" navigation
- **Responsive Design**: Optimized for desktop and mobile devices
- **Error States**: Custom 404 page for non-existent products
- **SEO Optimized**: Each product has its own URL for sharing and bookmarking
