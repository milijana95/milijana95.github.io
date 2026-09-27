import { DisplayHeading } from '../../components/ui/DisplayHeading/DisplayHeading';
import { ProjectGrid } from '../../components/ui/ProjectGrid/ProjectGrid';
import { projects } from '../../data/projects';
import { usePageTitle } from '../../hooks/usePageTitle';
import styles from './ProjectsPage.module.css';

export function ProjectsPage() {
  usePageTitle('Projects');

  return (
    <div className={styles.page}>
      <DisplayHeading className={styles.title}>Projects</DisplayHeading>
      <ProjectGrid projects={projects} />
    </div>
  );
}
