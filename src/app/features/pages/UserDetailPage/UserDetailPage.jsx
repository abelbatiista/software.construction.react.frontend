import { useEffect, useState } from 'react';

import { useUser } from '@core/providers/User/UserContext.jsx';

import styles from './UserDetailPage.module.scss';

const UserDetailPage = () => {
  const { auth } = useUser();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth);
  }, [auth]);

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>Profile</h2>
        <div className={styles.detail}>
          <span className={styles.label}>Name:</span>
          <span className={styles.value}>{user?.fullName}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Username:</span>
          <span className={styles.value}>{user?.username}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Email:</span>
          <span className={styles.value}>{user?.email}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Phone:</span>
          <span className={styles.value}>{user?.phone}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Role:</span>
          <span className={styles.value}>{user?.role}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
