import DonationsPage from '@pages/DonationsPage/DonationsPage';
import MonitoringPage from '@pages/MonitoringPage/MonitoringPage';
import ParticipationPage from '@pages/ParticipationPage/ParticipationPage';
import { Navigate, Outlet, Route, Routes } from 'react-router';

import AboutUsPage from './AboutUsPage/AboutUsPage';
import ContactUsPage from './ContactUsPage/ContactUsPage';
import CreditCardInfoPage from './CreditCardInfoPage/CreditCardInfoPage';
import DashboardPage from './DashboardPage/DashboardPage';
import HomePage from './HomePage/HomePage';
import UserDetailPage from './UserDetailPage/UserDetailPage';

const PagesRouter = () => {
  return (
    <>
      <Outlet />

      <Routes>
        <Route path={'home'} element={<HomePage />} />
        <Route path={'dashboard'} element={<DashboardPage />} />
        <Route path={'about-us'} element={<AboutUsPage />} />
        <Route path={'contact-us'} element={<ContactUsPage />} />
        <Route path={'donations'} element={<DonationsPage />} />
        <Route path={'participation'} element={<ParticipationPage />} />
        <Route path={'monitoring'} element={<MonitoringPage />} />
        <Route path={'user-detail'} element={<UserDetailPage />} />
        <Route
          path={'credit-card-information'}
          element={<CreditCardInfoPage />}
        />
        <Route index={true} element={<Navigate to={'home'} />} />
        <Route path="*" element={<Navigate to="/exception/not-found" />} />
      </Routes>
    </>
  );
};

export default PagesRouter;
