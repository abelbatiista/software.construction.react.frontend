import styles from './DashboardPage.module.scss';

const DashboardPage = () => {
  const cards = [
    {
      image: '/images/monitoring-1.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/images/monitoring-2.png',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      image: '/images/monitoring-3.png',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      image: '/images/monitoring-4.png',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>¡Bienvenido!</h2>
        <div className={styles.cardContainer}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <img src={card.image} alt={`image-${index}`} />
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <h3>Eres la esperanza para los demás!</h3>
          <p>
            <strong>Gracias a ti y a tu apoyo</strong>, se podrá mejorar la vida
            de esas personas más necesitadas que hoy día necesitan ayuda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
