import { useAxios } from '@core/hooks';
import { useUser } from '@core/providers/User/UserContext.jsx';

const useSignIn = (path, payload) => {
  const { setAuth } = useUser();
  const { post, response, error, loading } = useAxios(path, payload);

  const onClick = () => {
    post().then((data) => {
      setAuth(data?.data?._doc);
    });
  };

  return {
    response,
    error,
    loading,
    onClick,
  };
};

export default useSignIn;
