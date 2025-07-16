import styles from './DashboardPage.module.scss';

const DashboardPage = () => {
  const cards = [
    {
      image: '/images/dashboard-1.png',
      description:
        'Una causa destinada a suplir alimentos a familias de escasos recursos en comunidades rurales de Cotuí.',
    },
    {
      image: '/images/dashboard-2.png',
      description:
        'Donaciones para reparar techos y pisos de casas afectadas por las lluvias en zonas vulnerables.',
    },
    {
      image: '/images/dashboard-3.png',
      description:
        'Iniciativa para llevar atención médica gratuita y medicamentos a comunidades aisladas del este del país.',
    },
    {
      image: '/images/dashboard-4.png',
      description:
        'Causa enfocada en la entrega de útiles escolares, mochilas y recursos tecnológicos a estudiantes en situación de pobreza.',
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
