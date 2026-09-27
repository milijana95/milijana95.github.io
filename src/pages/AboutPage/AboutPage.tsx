import { AboutIntro } from '../../components/about/AboutIntro/AboutIntro';
import { Experience } from '../../components/about/Experience/Experience';
import { experience } from '../../data/experience';
import { usePageTitle } from '../../hooks/usePageTitle';

export function AboutPage() {
  usePageTitle('About me');

  return (
    <>
      <AboutIntro />
      <Experience entries={experience} />
    </>
  );
}
