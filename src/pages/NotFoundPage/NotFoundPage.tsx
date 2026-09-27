import { Button } from '../../components/ui/Button/Button';
import { DisplayHeading } from '../../components/ui/DisplayHeading/DisplayHeading';
import { routes } from '../../data/routes';
import { usePageMeta } from '../../hooks/usePageMeta';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  usePageMeta({ title: 'Page not found', description: 'The page you’re looking for doesn’t exist or has moved.' });

  return (
    <div className={styles.page}>
      <DisplayHeading>Page not found</DisplayHeading>
      <p className={styles.text}>The page you’re looking for doesn’t exist or has moved.</p>
      <Button to={routes.home}>Back to home</Button>
    </div>
  );
}
