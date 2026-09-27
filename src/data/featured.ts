import { getProject, type ProjectId } from './projects';

export interface FeaturedItem {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

type FeatureOverrides = Pick<FeaturedItem, 'label' | 'description' | 'imageAlt'> &
  Partial<Pick<FeaturedItem, 'title' | 'image'>>;

/** Home page copy for a project; title, image and link default to the project's own. */
function feature(id: ProjectId, overrides: FeatureOverrides): FeaturedItem {
  const { title, image, href } = getProject(id);
  if (!href) throw new Error(`Featured project "${id}" has no page to link to`);
  return { title, image, href, ...overrides };
}

export const featuredWork: readonly FeaturedItem[] = [
  feature('edge', {
    label: 'Case study',
    description:
      'Users told us Edge felt complicated. I listened, tested, and shared design recommendations to simplify their journey.',
    imageAlt: 'Edge dashboard showing a world map of DNS traffic',
  }),
  feature('research-budget', {
    label: 'Blog post',
    title: 'Conducting User Research With $0 Budget',
    description:
      'How I turned $0 budget, into a thriving user research practice by building allies inside my company.',
    imageAlt: 'Illustration of a team collaborating around a research board',
  }),
  feature('micetro', {
    label: 'Case study',
    description:
      'Turning console superpowers into Micetro Web decisions, so users can switch without compromise.',
    image: '/images/home/featured-micetro.webp',
    imageAlt: 'Micetro web interface with annotated research highlights',
  }),
];
