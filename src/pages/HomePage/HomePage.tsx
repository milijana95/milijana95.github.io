import { FeaturedWork } from '../../components/home/FeaturedWork/FeaturedWork';
import { Hero } from '../../components/home/Hero/Hero';
import { Stats } from '../../components/home/Stats/Stats';
import { featuredWork } from '../../data/featured';
import { stats } from '../../data/stats';
import { usePageTitle } from '../../hooks/usePageTitle';

export function HomePage() {
  usePageTitle();

  return (
    <>
      <Hero />
      <Stats title="From sticky notes to real-world results" items={stats} />
      <FeaturedWork items={featuredWork} />
    </>
  );
}
