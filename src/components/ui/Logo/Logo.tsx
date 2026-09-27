import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
}

/** The "M" brand mark. Decorative: always pair it with visible or accessible text. */
export function Logo({ className }: LogoProps) {
  return (
    <img
      className={[styles.logo, className].filter(Boolean).join(' ')}
      src="/images/icons/logo.svg"
      alt=""
      width={48.642}
      height={24}
    />
  );
}
