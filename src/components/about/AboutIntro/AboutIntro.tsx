import { useId } from 'react';
import { DisplayHeading } from '../../ui/DisplayHeading/DisplayHeading';
import styles from './AboutIntro.module.css';

export function AboutIntro() {
  const titleId = useId();

  return (
    <section className={styles.band} aria-labelledby={titleId}>
      <DisplayHeading id={titleId} className={styles.title}>
        About me
      </DisplayHeading>
      <div className={styles.feature}>
        <div className={styles.media}>
          <img
            src="/images/about/portrait.webp"
            alt="Milijana sitting on the floor in front of a sculpture of giant colourful metallic balloons"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.text}>
          <h2 className={styles.greeting}>Hi, I am Milijana, and</h2>
          <div className={styles.body}>
            <p>
              I’ve always been curious. about people, stories, and the little details that often go
              unnoticed. That curiosity shows up in the things I love such as traveling and exploring
              new places, watching crime mysteries and documentaries, or capturing moments through
              analog and digital photography.
            </p>
            <p>
              Friends would probably describe me as warm, fun, clumsy, and curious, and that’s exactly
              how I like to approach the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
