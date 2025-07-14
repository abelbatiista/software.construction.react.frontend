import { Pages } from '@pages';
import { Navigate, Route, Routes } from 'react-router';

import { Auth } from './app/features/auth';
import { Exception } from './app/features/exception';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'pages/*'} element={<Pages.Default />} />
      <Route path={'auth/*'} element={<Auth />} />
      <Route path={'exception/*'} element={<Exception />} />
      <Route path={'/'} element={<Navigate to={'/pages'} />} />
      <Route path="*" element={<Navigate to="/exception/not-found" />} />
    </Routes>
  );
};

export default AppRouter;
