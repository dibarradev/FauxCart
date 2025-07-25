# FauxCart

**FauxCart** is a premium online store built with Next.js 15 and React 19. This project uses TypeScript, SCSS for styling, and a modern component architecture.

## 🚀 Features

- ✅ Next.js 15.4.3 with App Router
- ✅ React 19.1.0 with modern components
- ✅ TypeScript for type safety
- ✅ SCSS with CSS Modules
- ✅ ESLint for code quality
- ✅ Catalog page with products from Fake Store API
- ✅ Integrated navigation system
- ✅ Responsive product cards with hover effects

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
│   │   ├── layout.tsx       # Main layout
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── Button/          # Reusable Button component
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.scss
│   │   │   └── index.ts
│   │   └── ProductCard/     # ProductCard component
│   │       ├── ProductCard.tsx
│   │       ├── ProductCard.module.scss
│   │       └── index.ts
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

## 🌐 API Integration

This project integrates with the **Fake Store API** to display product data:
- **Base URL**: `https://fakestoreapi.com`
- **Products endpoint**: `/products`
- **Features**: Product images, names, prices, and categories
- **Error handling**: Graceful fallbacks when API is unavailable
