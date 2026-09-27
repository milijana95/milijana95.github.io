import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Layout.module.css';
import { useScrollRestoration } from './useScrollRestoration';

export function Layout() {
  useScrollRestoration();

  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className={styles.main} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
