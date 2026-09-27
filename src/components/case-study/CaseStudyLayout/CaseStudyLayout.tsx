import type { ReactNode } from 'react';
import styles from './CaseStudyLayout.module.css';

interface CaseStudyLayoutProps {
  children: ReactNode;
}

/**
 * Vertical rhythm for case study and article pages. Children are constrained to the 800px
 * reading column; add `data-bleed` to a child to let it span the full page width.
 */
export function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return <article className={styles.article}>{children}</article>;
}
