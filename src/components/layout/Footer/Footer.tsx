import { site } from '../../../data/site';
import { Logo } from '../../ui/Logo/Logo';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.contact}>
          <Logo />
          <p className={styles.text}>
            Let’s stay in touch, my email is:{' '}
            <a className={styles.email} href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
        <a className={styles.social} href={site.linkedIn} target="_blank" rel="noreferrer">
          <img src="/images/icons/linkedin.svg" alt="" width={24} height={24} />
          <span className="visually-hidden">LinkedIn profile</span>
        </a>
      </div>
    </footer>
  );
}
