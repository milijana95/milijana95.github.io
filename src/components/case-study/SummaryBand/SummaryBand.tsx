import type { CSSProperties, ReactNode } from 'react';
import styles from './SummaryBand.module.css';

export interface SummaryItem {
  title: string;
  content: ReactNode;
}

interface SummaryBandProps {
  items: readonly SummaryItem[];
}

/** Full-width tinted band with the problem / opportunity / role columns. */
export function SummaryBand({ items }: SummaryBandProps) {
  return (
    <section className={styles.band} data-bleed aria-label="Project summary">
      <div className={styles.grid} style={{ '--columns': items.length } as CSSProperties}>
        {items.map((item) => (
          <div key={item.title} className={styles.item}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.content}>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
