import { useEffect } from 'react';

import { PaymentMethods } from '@core/constants';
import { useForm } from '@core/hooks/index.js';
import { Toast } from '@core/providers';
import useAddCreditCard from '@pages/hooks/useAddCreditCard.js';
import { Input, Button, Select } from '@ui/components/Form';
import { useNavigate } from 'react-router';

import styles from './CreditCardInfoPage.module.scss';

const CreditCardInfoPage = () => {
  const navigate = useNavigate();
  const { addToast } = Toast.useToast();
  const { handleChange, handleReset, formState } = useForm({
    fullName: '',
    method: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    amount: 0,
  });
  const { fullName, method, cardNumber, expirationDate, cvc, amount } =
    formState;

  const {
    onClick: addCreditCard,
    response,
    loading,
    error,
  } = useAddCreditCard('credit-card', {
    ...formState,
  });

  useEffect(() => {
    if (response) {
      handleReset();
      addToast('¡Ha realizado su aporte correctamente!');
      navigate('/pages/dashboard', { replace: true });
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      addToast('¡Ha ocurrido un error al realizar el pago!', 'error');
    }
  }, [error]);

  useEffect(() => {
    console.log({ loading });
  }, [loading]);

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Información de Pago</h1>
        <Input
          type={'text'}
          label="Nombre del Titular"
          placeholder="Juan Pérez"
          onChange={handleChange}
          value={fullName}
          name={'fullName'}
        />
        <Select
          options={PaymentMethods}
          placeholder={'Método de Pago'}
          onChange={handleChange}
          value={method}
          name={'method'}
        />
        <Input
          type={'text'}
          label="Número de Tarjeta"
          placeholder="1234 5678 9012 3456"
          onChange={handleChange}
          value={cardNumber}
          name={'cardNumber'}
        />
        <div className={styles.row}>
          <Input
            type={'text'}
            label="Fecha Exp"
            placeholder="MM/AA"
            onChange={handleChange}
            value={expirationDate}
            name={'expirationDate'}
          />
          <Input
            type={'text'}
            label="CVC"
            placeholder="123"
            onChange={handleChange}
            value={cvc}
            name={'cvc'}
          />
          <Input
            type={'number'}
            label="Monto"
            placeholder="3000"
            onChange={handleChange}
            value={amount}
            name={'amount'}
          />
        </div>
        <Button fullWidth onClick={addCreditCard}>
          Confirmar Pago
        </Button>
      </div>
    </div>
  );
};

export default CreditCardInfoPage;
