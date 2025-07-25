'use client';

import { useAuth } from '../../contexts/AuthContext';
import Button from '../Button';
import styles from './UserHeader.module.scss';

export default function UserHeader() {
  const { user, signOut } = useAuth();

  return (
    <div className={styles.userHeader}>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <span className={styles.userEmail} title={user?.email || undefined}>
            {user?.email}
          </span>
          <Button variant="outline" size="small" onClick={signOut}>
            Sign out
          </Button>
        </div>
      </div>
    </div>
  );
}
