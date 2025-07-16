import { useEffect, useState } from 'react';

import { Toast } from '@core/providers/index.js';
import useGetAllCauses from '@pages/hooks/useGetAllCauses.js';
import { ModalForm } from '@ui/components';
import { Button } from '@ui/components/Form';

import styles from './DonationsPage.module.scss';
import {
  AddCauseContent,
  AddCategoryContent,
  ContributeCauseContent,
} from './Modals';

const DonationsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [options, setOptions] = useState([]);

  const { response } = useGetAllCauses('cause');

  const openModal = (content) => {
    setModalOpen(true);
    setModalContent(content);
  };

  const closeModal = (dismiss) => {
    setModalOpen(false);
    setModalContent(null);
    if (dismiss) return;
    window.location.reload();
  };

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
                openModal(<ContributeCauseContent closeModal={closeModal} />)
              }
            >
              Aporta a la causa
            </Button>
          </div>
          <div className={'mx-2'}>
            <Button
              onClick={() =>
                openModal(<AddCauseContent closeModal={closeModal} />)
              }
            >
              Añadir una causa
            </Button>
          </div>
          <div className={'mx-2'}>
            <Button
              onClick={() =>
                openModal(<AddCategoryContent closeModal={closeModal} />)
              }
            >
              Añadir una categoria
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
          <ModalForm isOpen={isModalOpen} onClose={() => closeModal(true)}>
            {modalContent}
          </ModalForm>
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;
