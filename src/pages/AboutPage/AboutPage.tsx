import { AboutIntro } from '../../components/about/AboutIntro/AboutIntro';
import { Experience } from '../../components/about/Experience/Experience';
import { experience } from '../../data/experience';
import { usePageMeta } from '../../hooks/usePageMeta';

export function AboutPage() {
  usePageMeta({
    title: 'About me',
    description:
      'About Milijana Smiljanic and her work experience in UX research and design at BlueCat Networks, Microsoft and beyond.',
  });

  return (
    <>
      <AboutIntro />
      <Experience entries={experience} />
    </>
  );
}
