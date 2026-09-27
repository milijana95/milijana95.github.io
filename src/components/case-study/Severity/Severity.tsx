import styles from './Severity.module.css';

export type SeverityLevel = 'Critical' | 'High' | 'Medium';

interface SeverityProps {
  level: SeverityLevel;
}

/** Colour-coded severity label used inside Prose, directly followed by its list. */
export function Severity({ level }: SeverityProps) {
  return <p className={[styles.severity, styles[level.toLowerCase()]].join(' ')}>Severity: {level}</p>;
}
