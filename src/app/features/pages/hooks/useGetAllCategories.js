import { useEffect } from 'react';

import { useAxios } from '@core/hooks';

const useGetAllCategories = (path) => {
  const { get, response, error, loading } = useAxios(path);

  useEffect(() => {
    get().then();
  }, []);

  return {
    response,
    error,
    loading,
  };
};

export default useGetAllCategories;
