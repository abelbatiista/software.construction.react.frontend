import { useAxios } from '@core/hooks';

const useRecoverPassword = (path, payload) => {
  const { post, response, error, loading } = useAxios(path, payload);

  const onClick = () => {
    post().then();
  };

  return {
    response,
    error,
    loading,
    onClick,
  };
};

export default useRecoverPassword;
