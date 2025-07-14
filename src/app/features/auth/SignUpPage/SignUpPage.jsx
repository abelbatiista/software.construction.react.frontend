import useSignUp from '@auth/hooks/useSignUp.js';
import { useForm } from '@core/hooks';
import { Toast } from '@core/providers';
import { Input, Button } from '@ui/components/Form';
import { useNavigate } from 'react-router';

import styles from './SignUpPage.module.scss';

const SignUpPage = () => {
  const { addToast } = Toast.useToast();
  const { handleChange, handleReset, formState } = useForm({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
  });
  const { fullName, username, email, phone, password, repeatPassword } =
    formState;

  const { onClick: signUp } = useSignUp('auth/sign-up', {
    ...formState,
  });

  const navigate = useNavigate();

  const goToSignIn = () => {
    signUp();
    handleReset();
    addToast('¡Usuario creado correctamente!');
    navigate('/auth/sign-in');
  };

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Crear cuenta</h1>

        <div className={styles.row}>
          <Input
            type={'text'}
            label={'Full Name'}
            placeholder="ABel Batista"
            onChange={handleChange}
            value={fullName}
            name={'fullName'}
          />
          <Input
            type={'text'}
            label={'Username'}
            placeholder="Username"
            onChange={handleChange}
            value={username}
            name={'username'}
          />
        </div>

        <div className={styles.row}>
          <Input
            type={'email'}
            label={'Email'}
            placeholder="email@example.com"
            onChange={handleChange}
            value={email}
            name={'email'}
          />
          <Input
            type={'text'}
            label={'Phone'}
            placeholder="xxx-xxx-xxxx"
            onChange={handleChange}
            value={phone}
            name={'phone'}
          />
        </div>

        <div className={styles.row}>
          <Input
            label={'Password'}
            placeholder="******"
            type="password"
            onChange={handleChange}
            value={password}
            name={'password'}
          />
          <Input
            label={'Repeat Password'}
            placeholder="******"
            type="password"
            onChange={handleChange}
            value={repeatPassword}
            name={'repeatPassword'}
          />
        </div>

        <Button fullWidth onClick={goToSignIn}>
          Crear
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage;
