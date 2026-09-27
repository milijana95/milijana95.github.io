import type { FeaturedItem } from '../../../data/featured';
import { Button } from '../../ui/Button/Button';
import { DisplayHeading } from '../../ui/DisplayHeading/DisplayHeading';
import { Eyebrow } from '../../ui/Eyebrow/Eyebrow';
import styles from './FeaturedWork.module.css';

interface FeaturedWorkProps {
  items: readonly FeaturedItem[];
}

export function FeaturedWork({ items }: FeaturedWorkProps) {
  return (
    <section className={styles.section} aria-labelledby="featured-title">
      <DisplayHeading as="h2" id="featured-title" className={styles.heading}>
        Featured Work
      </DisplayHeading>
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={item.href} className={styles.row} data-reverse={index % 2 === 1 || undefined}>
            <div className={styles.media}>
              <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
            </div>
            <div className={styles.content}>
              <div className={styles.text}>
                <Eyebrow>{item.label}</Eyebrow>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
              <Button variant="solid" to={item.href} ariaLabel={`See the full story: ${item.title}`}>
                See the full story
              </Button>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
