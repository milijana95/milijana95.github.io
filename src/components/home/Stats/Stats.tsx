import type { Stat } from '../../../data/stats';
import styles from './Stats.module.css';

interface StatsProps {
  title: string;
  items: readonly Stat[];
}

export function Stats({ title, items }: StatsProps) {
  return (
    <section className={styles.section} aria-labelledby="stats-title">
      <h2 id="stats-title" className={styles.title}>
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
