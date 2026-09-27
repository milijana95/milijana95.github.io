import type { ReactNode } from 'react';
import styles from './SubHeading.module.css';

interface SubHeadingProps {
  children: ReactNode;
  as?: 'h2' | 'h3';
  id?: string;
}

/** Case study sub-heading ("Team structure", "Steps 1 & 2 …"). Figma: Inter Semi Bold 24 / 1.2. */
export function SubHeading({ children, as: Tag = 'h3', id }: SubHeadingProps) {
  return (
    <Tag id={id} className={styles.heading}>
      {children}
    </Tag>
  );
}
