import { useEffect, useState } from 'react';

import { useUser } from '@core/providers/User/UserContext.jsx';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const { auth, clearAuth } = useUser();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth);
  }, [auth, clearAuth]);

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.human}>Human</span>
          <span className={styles.together}>Together</span>
        </div>
        <nav className={styles.links}>
          {user ? (
            <>
              <NavLink to={'/pages/dashboard'}>Inicio</NavLink>
              <NavLink to={'/pages/donations'}>Donaciones</NavLink>
              <NavLink to={'/pages/participation'}>Participación</NavLink>
              <NavLink to={'/pages/monitoring'}>Seguimiento</NavLink>
            </>
          ) : (
            <>
              <NavLink to={'/pages/home'}>Inicio</NavLink>
              <NavLink to={'/pages/about-us'}>Acerca de Nosotros</NavLink>
              <NavLink to={'/pages/contact-us'}>Contactanos</NavLink>
            </>
          )}

          {/*<NavLink to={'/auth/sign-in'}>Iniciar Sesión</NavLink>*/}
          {/*<NavLink to={'/pages/credit-card-information'}>Credit Card</NavLink>*/}
        </nav>
        {user ? (
          <div className={styles.profile}>
            <NavLink className={'mx-2'} to={'/pages/user-detail'}>
              <PersonIcon sx={{ color: '#C1E8FF' }} />
            </NavLink>
            <NavLink className={'mx-2'} to={'/pages/home'} onClick={clearAuth}>
              <LogoutIcon sx={{ color: '#C1E8FF' }} />
            </NavLink>
          </div>
        ) : (
          <div className={styles.profile}></div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
