import { Link } from 'react-router-dom';
import type { Project } from '../../../data/projects';
import { Eyebrow } from '../Eyebrow/Eyebrow';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  headingLevel?: 'h2' | 'h3';
}

export function ProjectCard({ project, headingLevel: Heading = 'h2' }: ProjectCardProps) {
  const { kind, title, summary, image, href } = project;

  return (
    <article className={[styles.card, href ? styles.linked : ''].join(' ')}>
      <div className={styles.media}>
        <img src={image} alt="" loading="lazy" decoding="async" />
      </div>
      <div className={styles.body}>
        <div className={styles.text}>
          <Eyebrow>{kind}</Eyebrow>
          <Heading className={styles.title}>{title}</Heading>
          <p className={styles.summary}>{summary}</p>
        </div>
        {href ? (
          <Link className={styles.link} to={href} aria-label={`Read the full story: ${title}`}>
            Read the full story →
          </Link>
        ) : (
          <p className={styles.private}>
            <span aria-hidden="true">🔒 </span>Request, private case study
          </p>
        )}
      </div>
    </article>
  );
}
