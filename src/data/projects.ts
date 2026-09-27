import { routes } from './routes';

export type ProjectKind = 'Case study' | 'Article';

export type ProjectId =
  | 'edge'
  | 'research-budget'
  | 'micetro'
  | 'power-users'
  | 'copilot-idea'
  | 'playbook'
  | 'integrity'
  | 'copilot-multimodality';

export interface Project {
  id: ProjectId;
  kind: ProjectKind;
  title: string;
  summary: string;
  image: string;
  /** Route of the full story. Projects without one are private case studies. */
  href?: string;
}

export const projects: readonly Project[] = [
  {
    id: 'edge',
    kind: 'Case study',
    title: 'Edge UX Optimization Research',
    summary: 'Edge felt complicated. I listened, and shared recommendations to simplify their journey.',
    image: '/images/projects/edge.webp',
    href: routes.edge,
  },
  {
    id: 'research-budget',
    kind: 'Article',
    title: 'Conducting User Research With NO Budget',
    summary:
      'How I turned $0 budget, into a thriving user research practice by building allies inside my company.',
    image: '/images/projects/research-budget.webp',
    href: routes.researchBudget,
  },
  {
    id: 'micetro',
    kind: 'Case study',
    title: 'Micetro - Understanding Console Strengths',
    summary:
      'Turning console superpowers into Micetro Web decisions, so users can switch without compromise.',
    image: '/images/projects/micetro.webp',
    href: routes.micetro,
  },
  {
    id: 'power-users',
    kind: 'Article',
    title: 'Stop Building Products Only for Power Users',
    summary:
      'Why listening only to power users can hold your product back - BlueCat Networks Edge Example.',
    image: '/images/projects/power-users.webp',
    href: routes.powerUsers,
  },
  {
    id: 'copilot-idea',
    kind: 'Case study',
    title: 'Copilot in Word - From Idea to a Finished Product',
    summary:
      'We turned our hackathon idea into Copilot in Word, shipped end to end to millions of users',
    image: '/images/projects/copilot-idea.webp',
  },
  {
    id: 'playbook',
    kind: 'Article',
    title: 'My Practical Playbook for Making Research Stick',
    summary:
      'How I created the end-to-end system I process to turn insights into shipped improvements.',
    image: '/images/projects/playbook.webp',
    href: routes.playbook,
  },
  {
    id: 'integrity',
    kind: 'Case study',
    title: 'Integrity X, Beta Users First-Impressions Study',
    summary:
      'Beta feedback that validated the redesign, surfaced gaps, and set clear next-iteration priorities.',
    image: '/images/projects/integrity.webp',
    href: routes.integrity,
  },
  {
    id: 'copilot-multimodality',
    kind: 'Case study',
    title: 'Copilot in Word - Mulitimodality',
    summary:
      'We wanted for Copilot in Word to go beyond text, my research explored how multimodality could deliver that.',
    image: '/images/projects/copilot-multimodality.webp',
  },
];

export function getProject(id: ProjectId): Project {
  const project = projects.find((p) => p.id === id);
  if (!project) throw new Error(`Unknown project: ${id}`);
  return project;
}
