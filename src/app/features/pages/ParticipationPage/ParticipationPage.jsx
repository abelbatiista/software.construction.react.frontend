import { useEffect, useState } from 'react';

import useGetAllCauses from '@pages/hooks/useGetAllCauses.js';
import { ModalForm } from '@ui/components';
import { Button } from '@ui/components/Form';

import styles from './ParticipationPage.module.scss';
import { ParticipateCauseContent, SuggestCauseContent } from './Modals';
import { useUser } from '@core/providers/User/UserContext.jsx';

const ParticipationPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [options, setOptions] = useState([]);

  const { auth } = useUser();
  const [user, setUser] = useState(null);

  const { response } = useGetAllCauses('cause');

  const openModal = (content) => {
    setModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  useEffect(() => {
    setUser(auth);
  }, [auth]);

  useEffect(() => {
    if (response) {
      setOptions(
        response?.data?.map(
          ({ name, hood, city, stock, needed, categoryId }, index) => ({
            title: name + ', ' + hood + ', ' + city,
            progress: Math.ceil((stock / needed) * 100),
            image: `/images/donations-${(index % 4) + 1}.png`,
            category: categoryId,
          })
        ) || []
      );
    }
  }, [response, isModalOpen]);

  return (
    <div className={styles.bgWrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          Entonces quieres ser parte del equipo
        </div>
        <div className="d-inline-flex p-2 m-2">
          <div className={'mx-2'}>
            <Button
              onClick={() =>
                openModal(<ParticipateCauseContent closeModal={closeModal} />)
              }
            >
              Participa en una causa
            </Button>
          </div>
          <div className={'mx-2'}>
            <Button
              onClick={() =>
                openModal(<SuggestCauseContent closeModal={closeModal} />)
              }
            >
              Sugerir una causa
            </Button>
          </div>
        </div>
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
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${cause.progress}%` }}
                />
              </div>
              <p className={styles.percentage}>{cause.progress}%</p>
            </div>
          ))}
          <ModalForm isOpen={isModalOpen} onClose={closeModal}>
            {modalContent}
          </ModalForm>
        </div>
      </div>
    </div>
  );
};

export default ParticipationPage;
