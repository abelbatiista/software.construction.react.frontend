import { Navigate, Outlet, Route, Routes } from 'react-router';

import NotFoundPage from './NotFoundPage/NotFoundPage';
import UnauthorizedPage from './UnauthorizedPage/UnauthorizedPage';

const ExceptionRouter = () => {
  return (
    <>
      <Outlet />

      <Routes>
        <Route path={'not-found'} element={<NotFoundPage />} />
        <Route path={'unauthorized'} element={<UnauthorizedPage />} />
        <Route index={true} element={<Navigate to={'not-found'} />} />
        <Route path="*" element={<Navigate to="/exception/not-found" />} />
      </Routes>
    </>
  );
};

export default ExceptionRouter;
