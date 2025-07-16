import { useEffect, useState } from 'react';

import { useForm } from '@core/hooks/index.js';
import { Toast } from '@core/providers/index.js';
import styles from '@pages/DonationsPage/DonationsPage.module.scss';
import useGetAllCauses from '@pages/hooks/useGetAllCauses.js';
import { Button, Select } from '@ui/components/Form/index.js';

const ParticipateCauseContent = ({ closeModal }) => {
  const { addToast } = Toast.useToast();
  const [causes, setCauses] = useState([]);

  const { handleChange, handleReset, formState } = useForm({
    causeId: '',
  });
  const { causeId } = formState;

  const { response: responseCauses } = useGetAllCauses('cause');

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

  const handleClick = () => {
    handleReset();
    closeModal();
    addToast('¡Gracias por formar parte del equipo!');
  };

  return (
    <>
      <div className={styles.row}>
        <Select
          label={'Elige la causa en la que quieres participar'}
          options={causes}
          placeholder={'Elige la causa'}
          onChange={handleChange}
          value={causeId}
          name={'causeId'}
        />
      </div>
      <div className={styles.row}>
        <Button fullWidth onClick={handleClick}>
          Participar
        </Button>
      </div>
    </>
  );
};

export default ParticipateCauseContent;
