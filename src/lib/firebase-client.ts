import { initializeApp, FirebaseApp, getApps, getApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

// Firebase configuration with fallback values
const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
    'AIzaSyCJl5TlECF7GDIfHXgqVZ7at7TUQNfgNvE',
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
    'fauxcart-ae648.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'fauxcart-ae648',
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
    'fauxcart-ae648.firebasestorage.app',
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '577100949373',
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
    '1:577100949373:web:e130d7e5a6223adf8a8e14',
};

// Lazy initialization function
function getFirebaseApp(): FirebaseApp {
  // Check if we're in the browser
  if (typeof window === 'undefined') {
    throw new Error('Firebase should only be initialized on the client side');
  }

  // Check if Firebase is already initialized
  const existingApps = getApps();
  if (existingApps.length > 0) {
    return getApp();
  }

  // Initialize Firebase
  return initializeApp(firebaseConfig);
}

// Lazy auth getter
function getFirebaseAuth(): Auth {
  const app = getFirebaseApp();
  return getAuth(app);
}

export { getFirebaseApp, getFirebaseAuth };
export default getFirebaseApp;
