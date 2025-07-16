import { createContext, useContext, useState, useCallback } from 'react';

import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import styles from './Toast.module.scss';

const Toast = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message = '', icon = 'app') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, icon }]);

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
        {toasts.map(({ id, message, icon }) => (
          <div key={id} className={`${styles.toast} ${styles[icon]}`}>
            <div className={styles.toastIcon}>
              {icon === 'app' ? (
                <CheckIcon sx={{ color: '#C1E8FF' }} />
              ) : (
                <ErrorOutlineIcon sx={{ color: '#C1E8FF' }} />
              )}
            </div>
            <div className={styles.toastContent}>
              <div className={styles.toastTitle}>
                {icon === 'app' ? '¡Éxito!' : 'Error'}
              </div>
              <div className={styles.toastMessage}>{message}</div>
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
