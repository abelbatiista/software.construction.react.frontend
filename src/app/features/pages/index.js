import AboutUsPage from './AboutUsPage/AboutUsPage';
import ContactUsPage from './ContactUsPage/ContactUsPage';
import HomePage from './HomePage/HomePage';
import Default from './Pages';
import PagesRouter from './PagesRouter';

export const Pages = {
  Default,
  Router: PagesRouter,
  Home: HomePage,
  AboutUs: AboutUsPage,
  ContactUs: ContactUsPage,
};
