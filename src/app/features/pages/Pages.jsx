import { Layout } from '@ui';

import styles from './Pages.module.scss';
import PagesRouter from './PagesRouter';

const Pages = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pagesWrapper}>
        <Layout.Navbar />

        <main className={styles.main}>
          <div className="container">
            <PagesRouter />
          </div>
        </main>

        <Layout.Footer />
      </div>
    </div>
  );
};

export default Pages;
