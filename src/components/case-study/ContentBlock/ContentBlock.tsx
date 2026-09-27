import type { ReactNode } from 'react';
import { Eyebrow } from '../../ui/Eyebrow/Eyebrow';
import { Prose } from '../Prose/Prose';
import { SubHeading } from '../SubHeading/SubHeading';
import styles from './ContentBlock.module.css';

interface ContentBlockProps {
  /** Sub-heading ("Steps 1 & 2. Discovery, Alignment & Research Plan"). */
  title?: ReactNode;
  /** Small uppercase label ("User Interviews"), used instead of a title. */
  eyebrow?: string;
  children?: ReactNode;
  /** Optional media shown beside the copy from tablet width upwards. */
  aside?: ReactNode;
}

export function ContentBlock({ title, eyebrow, children, aside }: ContentBlockProps) {
  return (
    <section className={styles.block}>
      {title && <SubHeading>{title}</SubHeading>}
      {eyebrow && <Eyebrow as="h3">{eyebrow}</Eyebrow>}
      {aside ? (
        <div className={styles.split}>
          <Prose className={styles.splitText}>{children}</Prose>
          <div className={styles.aside}>{aside}</div>
        </div>
      ) : (
        children && <Prose>{children}</Prose>
      )}
    </section>
  );
}
