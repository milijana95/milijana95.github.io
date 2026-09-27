import { DisplayHeading } from '../../components/ui/DisplayHeading/DisplayHeading';
import { ProjectGrid } from '../../components/ui/ProjectGrid/ProjectGrid';
import { projects } from '../../data/projects';
import { usePageMeta } from '../../hooks/usePageMeta';
import styles from './ProjectsPage.module.css';

export function ProjectsPage() {
  usePageMeta({
    title: 'Projects',
    description:
      'UX research case studies and articles by Milijana Smiljanic: Edge, Micetro, Integrity X, Copilot in Word and more.',
  });

  return (
    <div className={styles.page}>
      <DisplayHeading className={styles.title}>Projects</DisplayHeading>
      <ProjectGrid projects={projects} />
    </div>
  );
}
