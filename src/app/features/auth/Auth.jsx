import AuthRouter from './AuthRouter';
import styles from './Auth.module.scss';

const Auth = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.authWrapper}>
        <main className={styles.main}>
          <div className="container">
            <AuthRouter />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Auth;
