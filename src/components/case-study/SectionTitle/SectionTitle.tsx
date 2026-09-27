import type { ReactNode } from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  children: ReactNode;
}

/** Major case study heading ("Approach & Process"). Figma text style: Heading 1. */
export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className={styles.title}>{children}</h2>;
}
