import { Navigate, Outlet, Route, Routes } from 'react-router';

import SignInPage from './SignInPage/SignInPage';
import SignUpPage from './SignUpPage/SignUpPage';
import RecoverPasswordPage from '@auth/RecoverPasswordPage/RecoverPasswordPage.jsx';

const AuthRouter = () => {
  return (
    <>
      <Outlet />

      <Routes>
        <Route path={'sign-in'} element={<SignInPage />} />
        <Route path={'sign-up'} element={<SignUpPage />} />
        <Route path={'recover-password'} element={<RecoverPasswordPage />} />
        <Route index={true} element={<Navigate to={'sign-in'} />} />
        <Route path="*" element={<Navigate to="/exception/not-found" />} />
      </Routes>
    </>
  );
};

export default AuthRouter;
