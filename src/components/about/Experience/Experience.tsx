import type { ExperienceEntry } from '../../../data/experience';
import { site } from '../../../data/site';
import { Button } from '../../ui/Button/Button';
import { ExperienceItem } from '../ExperienceItem/ExperienceItem';
import styles from './Experience.module.css';

interface ExperienceProps {
  entries: readonly ExperienceEntry[];
}

export function Experience({ entries }: ExperienceProps) {
  return (
    <section className={styles.section} aria-labelledby="experience-title">
      <header className={styles.header}>
        <h2 id="experience-title" className={styles.title}>
          My Work Experience
        </h2>
        <Button to={site.cvUrl} external>
          Download Full CV
        </Button>
      </header>
      <ol className={styles.list}>
        {entries.map((entry) => (
          <li key={entry.company} className={styles.entry}>
            <ExperienceItem entry={entry} />
          </li>
        ))}
      </ol>
    </section>
  );
}
