import { useId } from 'react';
import { getProject, type ProjectId } from '../../../data/projects';
import { DisplayHeading } from '../../ui/DisplayHeading/DisplayHeading';
import { ProjectGrid } from '../../ui/ProjectGrid/ProjectGrid';
import styles from './MoreStories.module.css';

interface MoreStoriesProps {
  projectIds: readonly ProjectId[];
}

export function MoreStories({ projectIds }: MoreStoriesProps) {
  const titleId = useId();

  return (
    <section data-bleed aria-labelledby={titleId}>
      <div className={styles.inner}>
        <DisplayHeading as="h2" id={titleId}>
          More stories &amp; insights
        </DisplayHeading>
        <ProjectGrid projects={projectIds.map(getProject)} headingLevel="h3" />
      </div>
    </section>
  );
}
