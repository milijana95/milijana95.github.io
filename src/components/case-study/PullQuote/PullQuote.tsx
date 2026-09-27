import type { ReactNode } from 'react';
import styles from './PullQuote.module.css';

interface PullQuoteProps {
  children: ReactNode;
}

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className={styles.quote}>
      <p>{children}</p>
    </blockquote>
  );
}
