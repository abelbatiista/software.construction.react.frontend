import { useEffect } from 'react';

import { useForm } from '@core/hooks/index.js';
import { Toast } from '@core/providers/index.js';
import styles from '@pages/DonationsPage/DonationsPage.module.scss';
import useAddCategory from '@pages/hooks/useAddCategory.js';
import { Button, Input } from '@ui/components/Form/index.js';

const AddCategoryContent = ({ closeModal }) => {
  const { addToast } = Toast.useToast();

  const { handleChange, handleReset, formState } = useForm({
    code: '',
    name: '',
    description: '',
  });
  const { code, name, description } = formState;

  const {
    onClick: addCategory,
    response,
    error,
  } = useAddCategory('category', {
    ...formState,
  });

  useEffect(() => {
    if (response) {
      handleReset();
      closeModal();
      addToast('¡Categoría agregada con éxito!');
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      addToast('¡La categoría no pudo ser agregada!', 'error');
    }
  }, [error]);

  return (
    <>
      <div className={styles.row}>
        <Input
          type={'text'}
          label={'Codigo'}
          placeholder="water, food, medicine, clothes..."
          onChange={handleChange}
          value={code}
          name={'code'}
        />
      </div>
      <div className={styles.row}>
        <Input
          type={'text'}
          label={'Nombre'}
          placeholder="Agua, Alimentos, Medicina, Ropa..."
          onChange={handleChange}
          value={name}
          name={'name'}
        />
      </div>
      <div className={styles.row}>
        <Input
          type={'text'}
          label={'Descripción'}
          placeholder="Esta categoría es para..."
          onChange={handleChange}
          value={description}
          name={'description'}
        />
      </div>
      <div className={styles.row}>
        <Button fullWidth onClick={addCategory}>
          Guardar
        </Button>
      </div>
    </>
  );
};

export default AddCategoryContent;
