import { useState } from 'react';

const useForm = (initial = {}) => {
  const [formState, setFormState] = useState({ ...initial });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormState(initial);
  };

  return {
    ...formState,
    formState,
    handleChange,
    handleReset,
  };
};

export default useForm;
