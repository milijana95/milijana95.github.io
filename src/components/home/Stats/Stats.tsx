import { useId } from 'react';
import type { Stat } from '../../../data/stats';
import styles from './Stats.module.css';

interface StatsProps {
  title: string;
  items: readonly Stat[];
}

export function Stats({ title, items }: StatsProps) {
  const titleId = useId();

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
      <ul className={styles.list}>
        {items.map((stat) => (
          <li key={stat.title} className={styles.item}>
            <span className={styles.tile}>
              <img src={stat.icon} alt="" width={48} height={48} />
            </span>
            <span className={styles.text}>
              <strong className={styles.statTitle}>{stat.title}</strong>
              <span className={styles.subtitle}>{stat.subtitle}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
