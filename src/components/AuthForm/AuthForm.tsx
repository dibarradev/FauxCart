'use client';

import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../Button';
import LoadingSpinner from '../LoadingSpinner';
import styles from './AuthForm.module.scss';

interface AuthFormProps {
  onSuccess?: () => void;
}

export default function AuthForm({ onSuccess }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validations

    // Check if email and password are provided
    if (!email || !password) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    // Check if its a sign-up and confirm password is provided
    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    // Check if password is at least 6 characters for sign-up
    if (!isLogin && password.length < 6) {
      setError('Password should be at least 6 characters.');
      setLoading(false);
      return;
    }

    // Attempt to sign in or sign up
    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      onSuccess?.();
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className={styles.authForm}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {isLogin ? 'Sign In' : 'Create Account'}
        </h2>
        
        <p className={styles.subtitle}>
          {isLogin 
            ? 'Welcome back! Please sign in to continue shopping.' 
            : 'Join FauxCart and start your shopping!'}
        </p>

        {/* Auth form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Enter your password"
              required
            />
          </div>

          {!isLogin && (
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
                placeholder="Confirm your password"
                required
              />
            </div>
          )}

          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="large"
            disabled={loading}
          >
            {loading ? (
              <div className={styles.loadingButton}>
                <LoadingSpinner />
                <span>{isLogin ? 'Signing in...' : 'Creating account...'}</span>
              </div>
            ) : (
              isLogin ? 'Sign In' : 'Create Account'
            )}
          </Button>
        </form>

        {/* Toggle between sign in and sign up */}
        <div className={styles.toggleSection}>
          <p className={styles.toggleText}>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </p>
          <button
            type="button"
            onClick={toggleMode}
            className={styles.toggleButton}
            disabled={loading}
          >
            {isLogin ? 'Create Account' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
