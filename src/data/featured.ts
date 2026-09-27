import { routes } from './routes';

export interface FeaturedItem {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export const featuredWork: readonly FeaturedItem[] = [
  {
    label: 'Case study',
    title: 'Edge UX Optimization Research',
    description:
      'Users told us Edge felt complicated. I listened, tested, and shared design recommendations to simplify their journey.',
    image: '/images/projects/edge.webp',
    imageAlt: 'Edge dashboard showing a world map of DNS traffic',
    href: routes.edge,
  },
  {
    label: 'Blog post',
    title: 'Conducting User Research With $0 Budget',
    description:
      'How I turned $0 budget, into a thriving user research practice by building allies inside my company.',
    image: '/images/projects/research-budget.webp',
    imageAlt: 'Illustration of a team collaborating around a research board',
    href: routes.researchBudget,
  },
  {
    label: 'Case study',
    title: 'Micetro - Understanding Console Strengths',
    description:
      'Turning console superpowers into Micetro Web decisions, so users can switch without compromise.',
    image: '/images/home/featured-micetro.webp',
    imageAlt: 'Micetro web interface with annotated research highlights',
    href: routes.micetro,
  },
];
