import type { ElementType, ReactNode } from 'react';
import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: ReactNode;
  as?: ElementType;
  tone?: 'default' | 'muted';
  className?: string;
}

/** Small uppercase label ("CASE STUDY", "USER INTERVIEWS"). Figma text style: Label. */
export function Eyebrow({ children, as: Tag = 'p', tone = 'default', className }: EyebrowProps) {
  return (
    <Tag className={[styles.eyebrow, styles[tone], className].filter(Boolean).join(' ')}>
      {children}
    </Tag>
  );
}
