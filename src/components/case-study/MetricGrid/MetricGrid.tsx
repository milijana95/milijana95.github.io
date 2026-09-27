import { useId } from 'react';
import { SubHeading } from '../SubHeading/SubHeading';
import styles from './MetricGrid.module.css';

export type MetricTone = 'pink' | 'yellow' | 'teal' | 'purple' | 'green' | 'blue' | 'red';

interface MetricBadgeProps {
  value: string;
  tone: MetricTone;
}

export function MetricBadge({ value, tone }: MetricBadgeProps) {
  return <span className={[styles.badge, styles[tone]].join(' ')}>{value}</span>;
}

export interface StatMetric {
  type: 'stat';
  value: string;
  tone: MetricTone;
  label: string;
  note?: string;
  /** Show the value beside the label instead of above it. */
  inline?: boolean;
}

export interface ListMetric {
  type: 'list';
  heading: string;
  tone: MetricTone;
  items: readonly { value: string; label: string }[];
}

export type Metric = StatMetric | ListMetric;

function MetricCard({ metric }: { metric: Metric }) {
  if (metric.type === 'list') {
    return (
      <div className={styles.card}>
        <p className={styles.listHeading}>{metric.heading}</p>
        <ul className={styles.list}>
          {metric.items.map((item) => (
            <li key={item.label} className={styles.listItem}>
              <MetricBadge value={item.value} tone={metric.tone} />
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={[styles.card, metric.inline ? styles.inline : ''].join(' ')}>
      <MetricBadge value={metric.value} tone={metric.tone} />
      <div className={styles.text}>
        <p className={styles.label}>{metric.label}</p>
        {metric.note && <p className={styles.note}>{metric.note}</p>}
      </div>
    </div>
  );
}

interface MetricGridProps {
  title: string;
  /** Cards grouped into the columns shown on desktop. */
  columns: readonly (readonly Metric[])[];
}

export function MetricGrid({ title, columns }: MetricGridProps) {
  const titleId = useId();

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <SubHeading id={titleId}>{title}</SubHeading>
      <div className={styles.gallery}>
        {columns.map((column, index) => (
          <div key={index} className={styles.column}>
            {column.map((metric) => (
              <MetricCard key={metric.type === 'list' ? metric.heading : metric.label} metric={metric} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
