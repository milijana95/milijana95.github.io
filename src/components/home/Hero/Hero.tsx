import { useId } from 'react';
import { routes } from '../../../data/routes';
import { Button } from '../../ui/Button/Button';
import styles from './Hero.module.css';

export function Hero() {
  const titleId = useId();

  return (
    <section className={styles.hero} aria-labelledby={titleId}>
      <div className={styles.inner}>
        <h1 id={titleId} className={styles.title}>
          Great products don’t happen by accident.{' '}
          <span className={styles.muted}>
            So I help teams validate faster, waste less, and build with confidence.
          </span>
        </h1>
        <Button to={routes.projects}>View my work</Button>
      </div>
    </section>
  );
}
