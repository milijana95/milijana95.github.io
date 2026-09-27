import type { ReactNode } from 'react';
import { Eyebrow } from '../../ui/Eyebrow/Eyebrow';
import styles from './CaseStudyHeader.module.css';

interface CaseStudyHeaderProps {
  title: ReactNode;
  lede: ReactNode;
  byline?: string;
}

export function CaseStudyHeader({ title, lede, byline }: CaseStudyHeaderProps) {
  return (
    <header className={styles.header}>
      {byline && <Eyebrow tone="muted">{byline}</Eyebrow>}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.lede}>{lede}</p>
    </header>
  );
}
