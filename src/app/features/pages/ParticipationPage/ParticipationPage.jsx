import { useEffect, useState } from 'react';

import { useUser } from '@core/providers/User/UserContext.jsx';
import useGetAllCauses from '@pages/hooks/useGetAllCauses.js';

import styles from './ParticipationPage.module.scss';

const ParticipationPage = () => {
  const [isHover, setIsHover] = useState(false);
  const [options, setOptions] = useState([]);
  const { auth } = useUser();
  const [user, setUser] = useState(null);

  const { response } = useGetAllCauses('cause');

  useEffect(() => {
    setUser(auth);
  }, [auth]);

  useEffect(() => {
    if (response) {
      setOptions(
        response?.data
          ?.filter((item) => user?.causes?.includes(item._id))
          .map(({ name, hood, city }, index) => ({
            title: name + ', ' + hood + ', ' + city,
            image: `/images/donations-${(index % 4) + 1}.png`,
          })) || []
      );
    }
  }, [response]);

  return (
    <div className={styles.bgWrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Causas a las que has contribuido</div>
        <div className={styles.cardsWrapper}>
          {options.map((cause, idx) => (
            <div
              onMouseEnter={() => setIsHover(true)}
              onAnimationEnd={() => setIsHover(false)}
              key={idx}
              className={`${styles.card} ${isHover ? 'animate__animated animate__pulse' : ''}`}
            >
              <img src={cause.image} alt={cause.title} />
              <p className={styles.cardTitle}>{cause.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParticipationPage;
