import type { ReactNode } from 'react';
import styles from './Prose.module.css';

interface ProseProps {
  children: ReactNode;
  className?: string;
}

/**
 * Body copy for case studies. Paragraphs are separated by one blank line; a list directly after
 * an introducing paragraph sits tight against it. Use `data-spaced` on a list for airy items.
 */
export function Prose({ children, className }: ProseProps) {
  return <div className={[styles.prose, className].filter(Boolean).join(' ')}>{children}</div>;
}
