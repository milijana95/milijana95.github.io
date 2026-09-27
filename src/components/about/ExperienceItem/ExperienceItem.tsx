import type { ExperienceEntry } from '../../../data/experience';
import styles from './ExperienceItem.module.css';

interface ExperienceItemProps {
  entry: ExperienceEntry;
}

export function ExperienceItem({ entry }: ExperienceItemProps) {
  const { company, period, role, highlights } = entry;

  return (
    <article className={styles.item}>
      <header className={styles.header}>
        <h3 className={styles.company}>{company}</h3>
        <p className={styles.period}>{period}</p>
      </header>
      <p className={styles.role}>{role}</p>
      {highlights.length > 0 && (
        <ul className={styles.highlights}>
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
