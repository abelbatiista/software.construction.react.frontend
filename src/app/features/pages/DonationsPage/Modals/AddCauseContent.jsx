import { useEffect, useState } from 'react';

import { useForm } from '@core/hooks/index.js';
import { Toast } from '@core/providers/index.js';
import styles from '@pages/DonationsPage/DonationsPage.module.scss';
import useAddCause from '@pages/hooks/useAddCause.js';
import useGetAllCategories from '@pages/hooks/useGetAllCategories.js';
import { Button, Input, Select } from '@ui/components/Form/index.js';

const AddCauseContent = ({ closeModal }) => {
  const { addToast } = Toast.useToast();
  const [categories, setCategories] = useState([]);

  const { handleChange, handleReset, formState } = useForm({
    name: '',
    description: '',
    city: '',
    hood: '',
    stock: 0,
    needed: 0,
    categoryId: '',
  });
  const { name, description, city, hood, needed, categoryId } = formState;

  const { response: responseCategories } = useGetAllCategories('category');
  const {
    onClick: addCause,
    response,
    error,
  } = useAddCause('cause', {
    ...formState,
    stock: 0,
    needed: +needed,
  });

  useEffect(() => {
    if (responseCategories) {
      setCategories(
        responseCategories?.data?.map(({ name, _id: id }) => ({
          label: name,
          value: id,
        })) || []
      );
    }
  }, [responseCategories]);

  useEffect(() => {
    if (response) {
      handleReset();
      closeModal();
      addToast('¡Causa agregada con éxito!');
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      addToast('¡La causa no pudo ser agregada!', 'error');
    }
  }, [error]);

  return (
    <>
      <div className={styles.row}>
        <Select
          label={'Elige la categoría'}
          options={categories}
          placeholder={'Elige la categoría'}
          onChange={handleChange}
          value={categoryId}
          name={'categoryId'}
        />
      </div>
      <div className={styles.row}>
        <Input
          type={'text'}
          label={'Nombre de la causa'}
          placeholder="Causa 1..."
          onChange={handleChange}
          value={name}
          name={'name'}
        />
      </div>
      <div className={styles.row}>
        <Input
          type={'text'}
          label={'Descripción'}
          placeholder="Se necesita ropa para..."
          onChange={handleChange}
          value={description}
          name={'description'}
        />
      </div>
      <div className={styles.row}>
        <Input
          type={'text'}
          label={'Ciudad'}
          placeholder="Santo Domingo, Santiago..."
          onChange={handleChange}
          value={city}
          name={'city'}
        />
      </div>
      <div className={styles.row}>
        <Input
          type={'text'}
          label={'Sector/Barrio'}
          placeholder="Los Mina, La Cañita..."
          onChange={handleChange}
          value={hood}
          name={'hood'}
        />
      </div>
      <div className={styles.row}>
        <Input
          type={'number'}
          label={'¿Qué cantidad necesita esta causa?'}
          placeholder="2, 10, 20..."
          onChange={handleChange}
          value={needed}
          name={'needed'}
        />
      </div>
      <div className={styles.row}>
        <Button fullWidth onClick={addCause}>
          Guardar
        </Button>
      </div>
    </>
  );
};

export default AddCauseContent;
