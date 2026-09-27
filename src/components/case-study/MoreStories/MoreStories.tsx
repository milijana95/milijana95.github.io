import { getProject, type ProjectId } from '../../../data/projects';
import { DisplayHeading } from '../../ui/DisplayHeading/DisplayHeading';
import { ProjectGrid } from '../../ui/ProjectGrid/ProjectGrid';
import styles from './MoreStories.module.css';

interface MoreStoriesProps {
  projectIds: readonly ProjectId[];
}

export function MoreStories({ projectIds }: MoreStoriesProps) {
  return (
    <section data-bleed aria-labelledby="more-stories-title">
      <div className={styles.inner}>
        <DisplayHeading as="h2" id="more-stories-title">
          More stories &amp; insights
        </DisplayHeading>
        <ProjectGrid projects={projectIds.map(getProject)} headingLevel="h3" />
      </div>
    </section>
  );
}
