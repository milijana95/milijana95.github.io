import { useId } from 'react';
import { SubHeading } from '../SubHeading/SubHeading';
import styles from './TeamStructure.module.css';

interface TeamStructureProps {
  members: readonly string[];
  /** The role Milijana played; rendered in bold. */
  lead?: string;
}

export function TeamStructure({ members, lead = members[0] }: TeamStructureProps) {
  const titleId = useId();

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <SubHeading as="h2" id={titleId}>
        Team structure
      </SubHeading>
      <ul className={styles.segments}>
        {members.map((member) => (
          <li key={member} className={member === lead ? styles.lead : undefined}>
            {member}
          </li>
        ))}
      </ul>
    </section>
  );
}
