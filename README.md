# FauxCart

**FauxCart** is a premium online store built with Next.js 15 and React 19. This project uses TypeScript, SCSS for styling, and a modern component architecture.

## 🚀 Features

- ✅ Next.js 15.4.3 with App Router
- ✅ React 19.1.0 with modern components
- ✅ TypeScript for type safety
- ✅ SCSS with CSS Modules
- ✅ ESLint for code quality
- ✅ **Firebase Authentication** with email/password
- ✅ **Protected routes** system
- ✅ **User session management** with auto-persistence
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
- Firebase project (for authentication)

## 🔥 Firebase Setup

Before starting the application, you need to configure Firebase Authentication:

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"** or select an existing one
3. Follow the setup wizard (you can skip Google Analytics)

### 2. Enable Authentication
1. In your Firebase project, go to **Authentication** in the left sidebar
2. Click **"Get started"**
3. Go to **Sign-in method** tab
4. Enable **Email/Password** provider
5. Click **"Save"**

### 3. Get Configuration Keys
1. Go to **Project Settings** (gear icon) → **General** tab
2. Scroll down to **"Your apps"** section
3. Click **"Add app"** → **Web app** (`</>`) 
4. Register your app with a name (e.g., "FauxCart")
5. **Don't check** "Also set up Firebase Hosting"
6. Copy the configuration object

### 4. Configure Environment Variables
1. In the project root, copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Replace the dummy values with your Firebase config:
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your-actual-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/FauxCart.git
   cd FauxCart
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Firebase** (see Firebase Setup section above)

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Authentication System

### User Registration & Login
- Create new accounts with email and password
- Sign in to existing accounts
- Automatic form validation and error handling
- Loading states during authentication

### Protected Routes
- `/catalog` - Product catalog (requires authentication)
- `/product/[id]` - Individual product details (requires authentication)
- Automatic redirection to login page for unauthenticated users
- Seamless return to intended page after successful login

### User Session Management
- Persistent authentication state across browser sessions
- Automatic sign-out functionality
- Real-time authentication status updates

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
│   │   ├── catalog/         # Protected catalog page with Fake Store API integration
│   │   ├── product/
│   │   │   └── [id]/        # Protected dynamic product detail pages
│   │   │       ├── page.tsx
│   │   │       └── page.module.scss
│   │   ├── layout.tsx       # Main layout
│   │   └── page.tsx         # Home page with authentication
│   ├── components/
│   │   ├── AuthForm/        # Authentication form component
│   │   │   ├── AuthForm.tsx
│   │   │   ├── AuthForm.module.scss
│   │   │   └── index.ts
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
│   │   ├── ProductsList/    # Infinite scroll list
│   │   │   ├── ProductsList.tsx
│   │   │   ├── ProductsList.module.scss
│   │   │   └── index.ts
│   │   └── ProtectedRoute/  # Route protection wrapper
│   │       ├── ProtectedRoute.tsx
│   │       ├── ProtectedRoute.module.scss
│   │       └── index.ts
│   ├── contexts/
│   │   └── AuthContext.tsx  # Firebase authentication context
│   ├── hooks/
│   │   └── useInfiniteProducts.ts  # Infinite scroll hook
│   ├── lib/
│   │   └── firebase.ts      # Firebase configuration and initialization
│   ├── types/
│   │   └── Product.ts       # TypeScript interfaces for products
│   └── styles/
│       ├── _variables.scss  # SCSS variables
│       └── _mixins.scss     # SCSS mixins
├── public/                  # Static files
├── .env.example            # Environment variables template
├── .env.local              # Local environment variables (gitignored)
├── package.json
└── README.md
```

## 🎨 Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - Library for user interfaces
- **TypeScript** - JavaScript with static typing
- **SCSS** - CSS preprocessor with enhanced syntax
- **Firebase** - Authentication and backend services
- **ESLint** - Linting tool for JavaScript/TypeScript
- **Fake Store API** - External product data source

## 🔗 Navigation

- **Home Page** (`/`) - Authentication and welcome page
- **Catalog** (`/catalog`) - Protected product list with Fake Store API integration
- **Product Detail** (`/product/[id]`) - Protected individual product page with detailed information
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
- **Navigation**: Easy return to catalog

## 🚨 Troubleshooting

### Common Issues

1. **Authentication not working**
   - Verify Firebase configuration in `.env.local`
   - Check if Email/Password is enabled in Firebase Console
   - Ensure all environment variables are properly set

2. **Build errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check for TypeScript errors with `npm run lint`

3. **API issues**
   - Fake Store API sometimes has downtime
   - Check network connectivity
   - API responses are cached for better performance

### Environment Variables

Make sure your `.env.local` file contains all required Firebase variables:
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## 🚀 Deployment

This is a Next.js application that can be deployed on various platforms:

- **Vercel** (recommended for Next.js projects)
- **Netlify**

### Environment Variables for Production
Remember to configure the same environment variables in your deployment platform.
