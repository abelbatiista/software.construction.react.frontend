import { useAxios } from '@core/hooks';

const useContributeCause = (path, payload) => {
  const { put, response, error, loading } = useAxios(path, payload);

  const onClick = () => {
    put().then();
  };

  return {
    onClick,
    response,
    error,
    loading,
  };
};

export default useContributeCause;
