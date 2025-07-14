import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.customCard}>
      <div className={'row'}>
        <div className={'col-12 col-md-6'}>
          <h2 className={styles.quote}>
            “Mientras que nuestros cuerpos nos lo permitan, seguiremos llegando
            por un bien mayor”
          </h2>
          <p className={styles.description}>
            <strong className={styles.brand}>
              Human<span>Together</span>
            </strong>{' '}
            es un nace de la idea de un grupo de amigos que desde pequeños les
            educaron a ser empáticos con las personas, cuando estos crecieron,
            decidieron que no solo se quedarían ayudando en su comunidad,
            quisieron llegar hasta donde la vida se los permitiera, con la única
            meta de poder ayudar a la mayor cantidad de personas posible.
          </p>
        </div>
        <div className={'col-12 col-md-2'}>
          <img src={'/images/home-1.png'} alt={'Home Page'} />
        </div>
        <div className={'col-12 col-md-2'}>
          <p className={styles.infoText}>
            Ofrecemos insumos básicos para las personas que mas lo necesitan,
            desde medicina, comida, ropa y productos de higiene personal.
          </p>
          <img src={'/images/home-2.png'} alt={'Home Page'} />
        </div>
        <div className={'col-12 col-md-2'}>
          <img src={'/images/home-3.png'} alt={'Home Page'} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
