import { useForm } from '@core/hooks/index.js';
import useAddCreditCard from '@pages/hooks/useAddCreditCard.js';
import { Input, Button, Select } from '@ui/components/Form';
import { useNavigate } from 'react-router';
import { Toast } from '@core/providers';
import styles from './CreditCardInfoPage.module.scss';
import { PaymentMethods } from '@core/constants';

const CreditCardInfoPage = () => {
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

  const { onClick: addCreditCard } = useAddCreditCard('credit-card', {
    ...formState,
  });

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/pages');
  };

  const handleSubmit = () => {
    addCreditCard();
    addToast('¡Donación hecha correctamente!');
    handleReset();
    goToHome();
  };

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
            label="Fecha de Expiración"
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
        <Button fullWidth onClick={handleSubmit}>
          Confirmar Pago
        </Button>
      </div>
    </div>
  );
};

export default CreditCardInfoPage;
