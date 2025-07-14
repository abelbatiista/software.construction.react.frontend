import useSignIn from '@auth/hooks/useSignIn.js';
import { useForm } from '@core/hooks/index.js';
import { Toast } from '@core/providers';
import { Input, Button } from '@ui/components/Form';
import { useNavigate } from 'react-router';

import styles from './SignInPage.module.scss';

const SignInPage = () => {
  const { addToast } = Toast.useToast();
  const { handleChange, handleReset, formState } = useForm({
    email: '',
    password: '',
  });
  const { email, password } = formState;

  const { onClick: signIn } = useSignIn('auth/sign-in', {
    ...formState,
  });

  const navigate = useNavigate();

  const goToRecoverPassword = () => {
    navigate('/auth/recover-password');
  };

  const goToSignUp = () => {
    navigate('/auth/sign-up');
  };

  const goToHome = () => {
    navigate('/pages');
  };

  const goToDonations = () => {
    signIn();
    handleReset();
    addToast('¡Ha iniciado sesión correctamente!');
    navigate('/pages/donations', { replace: true });
  };

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Bienvenido</h1>
        <Input
          label={'Email'}
          placeholder="email@example.com"
          onChange={handleChange}
          value={email}
          name={'email'}
        />
        <Input
          label={'Password'}
          placeholder="******"
          type="password"
          onChange={handleChange}
          value={password}
          name={'password'}
        />

        <p className={styles.recover} onClick={goToRecoverPassword}>
          ¿Olvidaste tu contraseña?
        </p>

        <Button fullWidth onClick={goToDonations}>
          Iniciar Sesión
        </Button>

        <p className={styles.register} onClick={goToSignUp}>
          Registrarte
        </p>

        <p className={styles.register} onClick={goToHome}>
          Volver al inicio
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
