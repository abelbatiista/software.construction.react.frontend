import { useNavigate } from 'react-router';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goPages = () => {
    navigate('/pages', {
      replace: true,
    });
  };

  return (
    <div className={'container mt-5'}>
      <h1>Page Not Found</h1>
      <hr />
      <button className={'btn btn-dark'} onClick={goPages}>
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
