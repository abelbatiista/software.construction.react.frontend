import { createContext, useContext, useState, useCallback } from 'react';

import CheckIcon from '@mui/icons-material/Check';

import styles from './Toast.module.scss';

const Toast = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, subText = '') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, subText }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <Toast.Provider value={{ addToast }}>
      {children}
      <div className={styles.toastContainer}>
        {toasts.map(({ id, message, subText }) => (
          <div key={id} className={`${styles.toast} ${styles['app']}`}>
            <div className={styles.toastIcon}>
              <CheckIcon sx={{ color: '#C1E8FF' }} />
            </div>
            <div className={styles.toastContent}>
              <div className={styles.toastMessage}>{message}</div>
              {subText && <div className={styles.toastSub}>{subText}</div>}
            </div>
            <button
              className={styles.toastClose}
              onClick={() => removeToast(id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </Toast.Provider>
  );
};

export const useToast = () => useContext(Toast);
