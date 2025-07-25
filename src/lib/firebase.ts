import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

// Firebase Configuration - Use direct values for production
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyCJl5TlECF7GDIfHXgqVZ7at7TUQNfgNvE',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'fauxcart-ae648.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'fauxcart-ae648',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'fauxcart-ae648.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '577100949373',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:577100949373:web:e130d7e5a6223adf8a8e14'
};

// Debug: Log configuration status
if (typeof window !== 'undefined') {
  console.log('🔥 Firebase Environment Check:', {
    hasApiKey: !!firebaseConfig.apiKey,
    hasAuthDomain: !!firebaseConfig.authDomain,
    hasProjectId: !!firebaseConfig.projectId,
    hasStorageBucket: !!firebaseConfig.storageBucket,
    hasMessagingSenderId: !!firebaseConfig.messagingSenderId,
    hasAppId: !!firebaseConfig.appId,
    apiKeyPreview: firebaseConfig.apiKey ? firebaseConfig.apiKey.substring(0, 10) + '...' : 'MISSING'
  });
}

// Validate that we have all required fields
const isValidConfig = firebaseConfig.apiKey && 
                     firebaseConfig.authDomain && 
                     firebaseConfig.projectId && 
                     firebaseConfig.storageBucket && 
                     firebaseConfig.messagingSenderId && 
                     firebaseConfig.appId;

// Initialize Firebase 
let app: FirebaseApp | undefined;
let auth: Auth | undefined;

try {
  if (isValidConfig) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    if (typeof window !== 'undefined') {
      console.log('✅ Firebase initialized successfully');
    }
  } else {
    const missingFields = Object.entries(firebaseConfig)
      .filter(([, value]) => !value)
      .map(([key]) => key);
    
    console.error('❌ Firebase configuration incomplete. Missing:', missingFields);
    throw new Error(`Firebase not initialized. Missing configuration: ${missingFields.join(', ')}`);
  }
} catch (error) {
  console.error('🔥 Firebase initialization error:', error);
  throw error;
}

export { auth };
export default app;
