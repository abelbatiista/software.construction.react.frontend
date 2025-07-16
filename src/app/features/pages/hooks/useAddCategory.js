import { useAxios } from '@core/hooks';

const useAddCategory = (path, payload) => {
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

export default useAddCategory;
