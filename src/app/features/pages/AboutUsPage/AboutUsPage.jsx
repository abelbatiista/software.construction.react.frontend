import { Button } from '@ui/components/Form';
import { useNavigate } from 'react-router';

import styles from './AboutUsPage.module.scss';

const AboutUsPage = () => {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate('/auth/sign-in');
  };

  const goToCreditCard = () => {
    navigate('/pages/credit-card-information');
  };

  const goToContactUs = () => {
    navigate('/pages/contact-us');
  };

  return (
    <>
      <div>
        <div className={'row text-center'}>
          <p className={'fs-1 fw-bold text-light'}>
            Los pequeños esfuerzo hacen un gran cambio
          </p>
        </div>
        <div className={'d-flex justify-content-center'}>
          <Button onClick={goToSignIn}>Se parte del equipo</Button>
          <a
            onClick={goToCreditCard}
            role={'button'}
            className={'fs-5 text-light m-1 fw-bold'}
          >
            Aporta tu granito
          </a>
        </div>
      </div>
      <div className={styles.aboutUsSection}>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img
              src="/images/about-us-1.png"
              alt="Imagen HumanTogether"
              className={styles.image}
            />
          </div>
          <div className="col-12 col-md-6">
            <h2 className={styles.quote}>
              Bienvenido a{' '}
              <span className={styles.brand}>
                Human<span className={styles.brandHighlight}>Together</span>
              </span>
            </h2>
            <p className={styles.description}>
              Somos una ONG sin fines de lucro, la cual tiene la misión de
              brindar a las personas que más lo necesitan un poco de alegría y
              ayuda. <br />
              <br />
              Tenemos la misión de ayudar a esas personas que no tuvieron la
              oportunidad de contar con las necesidades básicas que todo humano
              por derecho tiene, así intentando unir, desde la persona con más
              dinero, hasta la que peor la pase en su día a día.
            </p>
            <div className={'d-flex justify-content-center'}>
              <Button onClick={goToContactUs}>Más sobre nosotros</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
