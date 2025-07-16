import { useEffect } from 'react';

import useSignIn from '@auth/hooks/useSignIn.js';
import { useForm } from '@core/hooks/index.js';
import { Toast } from '@core/providers';
import { useUser } from '@core/providers/User/UserContext.jsx';
import { Input, Button } from '@ui/components/Form';
import { useNavigate } from 'react-router';

import styles from './SignInPage.module.scss';

const SignInPage = () => {
  const { setAuth } = useUser();
  const { addToast } = Toast.useToast();

  const { handleChange, handleReset, formState } = useForm({
    email: '',
    password: '',
  });
  const { email, password } = formState;

  const {
    onClick: signIn,
    response,
    loading,
    error,
  } = useSignIn('auth/sign-in', {
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
    navigate('/pages/dashboard');
  };

  useEffect(() => {
    if (response) {
      const auth = response?.data?._doc;
      handleReset();
      addToast('¡Ha iniciado sesión correctamente!');
      setAuth(auth);
      navigate('/pages/donations', { replace: true });
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      addToast('¡Credenciales inválidas!', 'error');
    }
  }, [error]);

  useEffect(() => {
    console.log({ loading });
  }, [loading]);

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Bienvenido</h1>
        <Input
          type={'email'}
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

        <Button fullWidth onClick={signIn}>
          Iniciar Sesión
        </Button>

        <p className={styles.link} onClick={goToSignUp}>
          ¿No tienes cuenta? Regístrate aquí
        </p>

        <p className={styles.link} onClick={goToHome}>
          Volver al inicio
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
