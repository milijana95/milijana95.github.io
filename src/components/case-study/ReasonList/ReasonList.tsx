import { useId } from 'react';
import styles from './ReasonList.module.css';

export type ReasonShape = 'circle' | 'diamond' | 'triangle' | 'square';

export interface Reason {
  title: string;
  description: string;
  shape: ReasonShape;
}

const shapeIcons: Partial<Record<ReasonShape, string>> = {
  circle: '/images/icons/decision.svg',
  triangle: '/images/icons/knowledge.svg',
};

function ReasonIcon({ shape }: { shape: ReasonShape }) {
  const src = shapeIcons[shape];
  if (src) return <img className={styles.icon} src={src} alt="" width={24} height={24} />;
  return (
    <span className={styles.icon} aria-hidden="true">
      <span className={styles[shape]} />
    </span>
  );
}

interface ReasonListProps {
  title: string;
  reasons: readonly Reason[];
}

export function ReasonList({ title, reasons }: ReasonListProps) {
  const titleId = useId();

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
      <ul className={styles.list}>
        {reasons.map((reason) => (
          <li key={reason.title} className={styles.row}>
            <h3 className={styles.rowHeader}>
              <ReasonIcon shape={reason.shape} />
              {reason.title}
            </h3>
            <p className={styles.description}>{reason.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
