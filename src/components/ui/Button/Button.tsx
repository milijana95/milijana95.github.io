import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type Variant = 'gradient' | 'solid';

interface ButtonProps {
  to: string;
  children: ReactNode;
  /** `gradient` is the dark CTA ("View my work"), `solid` the black pill ("See the full story"). */
  variant?: Variant;
  /** Opens in a new tab as a plain anchor instead of a client-side route. */
  external?: boolean;
  className?: string;
  /** Accessible name when the visible label needs more context. */
  ariaLabel?: string;
}

export function Button({
  to,
  children,
  variant = 'gradient',
  external = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  if (external) {
    return (
      <a className={classes} href={to} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
        <span className={styles.label}>{children}</span>
      </a>
    );
  }

  return (
    <Link className={classes} to={to} aria-label={ariaLabel}>
      <span className={styles.label}>{children}</span>
    </Link>
  );
}
