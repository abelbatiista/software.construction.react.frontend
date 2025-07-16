import { useState } from 'react';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import styles from './MonitoringPage.module.scss';

const MonitoringPage = () => {
  const [isHover, setIsHover] = useState(false);

  const progress = 75;

  return (
    <div className={styles.bgWrapper}>
      <div className={styles.container}>
        <div className={styles.title}>¡Monitorea tus donaciones!</div>

        <div
          onMouseEnter={() => setIsHover(true)}
          onAnimationEnd={() => setIsHover(false)}
          className={`${styles.cardCentered} ${isHover ? 'animate__animated animate__pulse' : ''}`}
        >
          <img
            src={'/images/donations-1.png'}
            alt={'Causa'}
            className={styles.cardImage}
          />
          <p className={styles.cardTitle}>{'Alimentos para la cañitas'}</p>

          <div className={styles.progressBarWrapper}>
            <span>Recogido</span>
            <div className={styles.progressBar}>
              <div
                className={styles.truckIcon}
                style={{ left: `${progress}%` }}
              >
                <FireTruckIcon
                  style={{ color: '#0F3D5F', fontSize: '1.2rem' }}
                />
              </div>
              <div className={styles.progressLine}></div>
            </div>
            <span>Recibido</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringPage;
