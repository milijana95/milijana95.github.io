export const routes = {
  home: '/',
  projects: '/projects',
  about: '/about-me',
  edge: '/edge',
  micetro: '/micetro',
  integrity: '/integrity',
  researchBudget: '/conducting-user-research-with-0-budget',
  powerUsers: '/stop-building-products-only-for-power-users',
  playbook: '/my-practical-playbook-for-making-research-stick',
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];

/** Pages that live under the "Projects" section of the navigation. */
export const projectDetailRoutes: readonly string[] = [
  routes.edge,
  routes.micetro,
  routes.integrity,
  routes.researchBudget,
  routes.powerUsers,
  routes.playbook,
];
