import type { ReactNode } from 'react';
import styles from './DisplayHeading.module.css';

interface DisplayHeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2';
  align?: 'center' | 'start';
  className?: string;
  id?: string;
}

/** Large page/section title ("Projects", "Featured Work"). Figma: Geist Medium 56 / 1.1. */
export function DisplayHeading({ children, as: Tag = 'h1', align = 'center', className, id }: DisplayHeadingProps) {
  return (
    <Tag id={id} className={[styles.heading, styles[align], className].filter(Boolean).join(' ')}>
      {children}
    </Tag>
  );
}
