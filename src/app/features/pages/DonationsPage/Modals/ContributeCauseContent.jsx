import { useEffect, useState } from 'react';

import { useForm } from '@core/hooks/index.js';
import { Toast } from '@core/providers/index.js';
import { useUser } from '@core/providers/User/UserContext.jsx';
import styles from '@pages/DonationsPage/DonationsPage.module.scss';
import useContributeCause from '@pages/hooks/useContributeCause.js';
import useGetAllCauses from '@pages/hooks/useGetAllCauses.js';
import { Button, Input, Select } from '@ui/components/Form/index.js';

const ContributeCauseContent = ({ closeModal }) => {
  const { addToast } = Toast.useToast();
  const [causes, setCauses] = useState([]);
  const { auth } = useUser();
  const [user, setUser] = useState(null);

  const { handleChange, handleReset, formState } = useForm({
    causeId: '',
    stock: 0,
  });
  const { causeId, stock } = formState;

  const { response: responseCauses } = useGetAllCauses('cause');
  const {
    onClick: contributeCause,
    response,
    error,
  } = useContributeCause(`cause/stock/${causeId}`, {
    stock: +stock,
    userId: user?._id,
  });

  useEffect(() => {
    setUser(auth);
  }, [auth]);

  useEffect(() => {
    if (responseCauses) {
      setCauses(
        responseCauses?.data?.map(({ name, hood, _id: id }) => ({
          label: name + ' - ' + hood,
          value: id,
        })) || []
      );
    }
  }, [responseCauses]);

  useEffect(() => {
    if (response) {
      handleReset();
      closeModal();
      addToast('¡Has contribuido a la causa con éxito!');
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      addToast('¡La causa no pudo ser contribuida!', 'error');
    }
  }, [error]);

  return (
    <>
      <div className={styles.row}>
        <Select
          label={'Elige la causa a la que deseas donar'}
          options={causes}
          placeholder={'Elige la causa'}
          onChange={handleChange}
          value={causeId}
          name={'causeId'}
        />
      </div>
      <div className={styles.row}>
        <Input
          type={'number'}
          label={'¿Qué cantidad deseas donar?'}
          placeholder="2, 10, 20..."
          onChange={handleChange}
          value={stock}
          name={'stock'}
        />
      </div>
      <div className={styles.row}>
        <Button fullWidth onClick={contributeCause}>
          Guardar
        </Button>
      </div>
    </>
  );
};

export default ContributeCauseContent;
