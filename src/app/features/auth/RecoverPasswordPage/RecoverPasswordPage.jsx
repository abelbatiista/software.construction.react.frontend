import { useNavigate } from 'react-router';
import { Components } from '@ui';
import styles from './RecoverPasswordPage.module.scss';

const RecoverPasswordPage = () => {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate('/auth/sign-in');
  };

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Recupere su contraseña</h1>

        <Components.Form.Input
          label={'Email'}
          placeholder="email@example/com"
          type="email"
        />

        <Components.Form.Button fullWidth onClick={goToSignIn}>
          Obtener código
        </Components.Form.Button>
      </div>
    </div>
  );
};

export default RecoverPasswordPage;
