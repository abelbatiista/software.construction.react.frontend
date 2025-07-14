import { useAxios } from '@core/hooks';

const useAddCreditCard = (path, payload) => {
  const { post, response, error, loading } = useAxios(path, payload);

  const onClick = () => {
    post().then();
  };

  return {
    onClick,
    response,
    error,
    loading,
  };
};

export default useAddCreditCard;
