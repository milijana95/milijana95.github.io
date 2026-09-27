import styles from './TeamStructure.module.css';

interface TeamStructureProps {
  members: readonly string[];
  /** The role Milijana played; rendered in bold. */
  lead?: string;
}

export function TeamStructure({ members, lead = members[0] }: TeamStructureProps) {
  return (
    <section className={styles.section} aria-labelledby="team-structure-title">
      <h2 id="team-structure-title" className={styles.title}>
        Team structure
      </h2>
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
