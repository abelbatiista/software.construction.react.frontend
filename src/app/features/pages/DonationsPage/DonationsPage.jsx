import { useState } from 'react';

import { ModalForm } from '@ui/components';
import { Button, Input, Select } from '@ui/components/Form';

import styles from './DonationsPage.module.scss';

const causes = [
  {
    title: 'Se necesita alimento para la comunidad de la cañitas',
    progress: 70,
    image: '/images/donations-1.png',
    category: 'Alimentos',
  },
  {
    title: 'Se necesita agua para la comunidad de los mamayes',
    progress: 90,
    image: '/images/donations-2.png',
    category: 'Agua',
  },
  {
    title: 'Se necesita ropa para la comunidad de los rios',
    progress: 50,
    image: '/images/donations-3.png',
    category: 'Ropa',
  },
  {
    title:
      'Se necesita medicamentos para la comunidad del barrio las enfermeras',
    progress: 10,
    image: '/images/donations-4.png',
    category: 'Medicina',
  },
];

const options = [
  {
    label: 'Agua',
    value: 'water',
  },
  {
    label: 'Alimentos',
    value: 'food',
  },
  {
    label: 'Medicina',
    value: 'medicine',
  },
  {
    label: 'Ropa',
    value: 'clothes',
  },
];

const DonationsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className={styles.bgWrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          Entonces quieres ser parte del equipo
        </div>
        <div className={styles.select}>
          <Button onClick={openModal}>Elige tu causa</Button>
        </div>
        <div className={styles.cardsWrapper}>
          {causes.map((cause, idx) => (
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
            <div className={styles.row}>
              <Select options={options} placeholder={'Elige tu causa'} />
            </div>
            <div className={styles.row}>
              <Input
                type={'text'}
                label={'¿Qué objeto deseas donar?'}
                placeholder="Un pantalón, unas manzanas..."
              />
            </div>
            <div className={styles.row}>
              <Input
                type={'number'}
                label={'¿Qué cantidad deseas donar?'}
                placeholder="11"
              />
            </div>
            <div className={styles.row}>
              <Button fullWidth>Donar</Button>
            </div>
          </ModalForm>
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;
