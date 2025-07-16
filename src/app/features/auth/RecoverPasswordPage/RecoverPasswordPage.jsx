import { useEffect } from 'react';

import { useForm } from '@core/hooks/index.js';
import { Toast } from '@core/providers/index.js';
import { Input, Button } from '@ui/components/Form';
import { useNavigate } from 'react-router';

import useRecoverPassword from '../hooks/useRecoverPassword.js';

import styles from './RecoverPasswordPage.module.scss';

const RecoverPasswordPage = () => {
  const navigate = useNavigate();
  const { addToast } = Toast.useToast();

  const { handleChange, handleReset, formState } = useForm({
    email: '',
  });
  const { email } = formState;

  const {
    onClick: recoverPassword,
    response,
    error,
  } = useRecoverPassword('auth/recover-password', {
    ...formState,
  });

  useEffect(() => {
    if (response) {
      handleReset();
      addToast('¡El correo de recuperación ha sido enviado correctamente!');
      navigate('/auth/sign-in');
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      addToast('¡Correo electrónico inválido!', 'error');
    }
  }, [error]);

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Recupere su contraseña</h1>

        <Input
          label={'Email'}
          placeholder="email@example/com"
          type="email"
          onChange={handleChange}
          value={email}
          name={'email'}
        />

        <Button fullWidth onClick={recoverPassword}>
          Obtener código
        </Button>
      </div>
    </div>
  );
};

export default RecoverPasswordPage;
