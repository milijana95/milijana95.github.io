import styles from './Figure.module.css';

interface FigureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Cap the rendered height (px); the image keeps its aspect ratio and is centred. */
  maxHeight?: number;
  caption?: string;
}

export function Figure({ src, alt, width, height, maxHeight, caption }: FigureProps) {
  return (
    <figure className={styles.figure}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={maxHeight ? styles.capped : undefined}
        style={maxHeight ? { maxHeight } : undefined}
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
