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
        <h2 className={styles.title}>Perfil de Usuario</h2>
        <div className={styles.detail}>
          <span className={styles.label}>Nombre:</span>
          <span className={styles.value}>{user?.fullName}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Usuario:</span>
          <span className={styles.value}>{user?.username}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Correo Electrónico:</span>
          <span className={styles.value}>{user?.email}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Teléfono:</span>
          <span className={styles.value}>{user?.phone}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Rol:</span>
          <span className={styles.value}>{user?.role}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
