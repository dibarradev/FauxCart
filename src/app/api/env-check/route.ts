import { NextResponse } from 'next/server';

export async function GET() {
  // Check environment variables
  const envCheck = {
    NEXT_PUBLIC_FIREBASE_API_KEY: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: !!process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: !!process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: !!process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  const missingVars = Object.entries(envCheck)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    netlifyContext: process.env.CONTEXT || 'unknown',
    envCheck,
    missingVars,
    allEnvVarsPresent: missingVars.length === 0,
    // Show first few characters of API key for verification (if present)
    apiKeyPreview: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY.substring(0, 10) + '...' : 
      'NOT_FOUND'
  });
}
