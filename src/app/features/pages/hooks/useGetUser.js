import { useEffect } from 'react';

import { useAxios } from '@core/hooks';

const useGetUser = (path, payload) => {
  const { get, response, error, loading } = useAxios(path, payload);

  useEffect(() => {
    get().then();
  }, [get]);

  return {
    response,
    error,
    loading,
  };
};

export default useGetUser;
