import type { Project } from '../../../data/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  projects: readonly Project[];
  headingLevel?: 'h2' | 'h3';
}

export function ProjectGrid({ projects, headingLevel }: ProjectGridProps) {
  return (
    <ul className={styles.grid}>
      {projects.map((project) => (
        <li key={project.id} className={styles.item}>
          <ProjectCard project={project} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  );
}
