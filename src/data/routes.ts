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

/** Every page route; the App, pre-renderer and sitemap are all derived from this. */
export const pagePaths = Object.values(routes) as readonly RoutePath[];

/** Path the not-found page is pre-rendered under (published as 404.html). */
export const NOT_FOUND_PATH = '/404';

export type NavSection = 'home' | 'projects' | 'about';

/** Which main-navigation item is current on each page. Typed so every route must be listed. */
export const routeSections: Record<RoutePath, NavSection> = {
  [routes.home]: 'home',
  [routes.projects]: 'projects',
  [routes.about]: 'about',
  [routes.edge]: 'projects',
  [routes.micetro]: 'projects',
  [routes.integrity]: 'projects',
  [routes.researchBudget]: 'projects',
  [routes.powerUsers]: 'projects',
  [routes.playbook]: 'projects',
};

/**
 * Resolves a requested pathname to its page route the way React Router matches it: ignoring
 * letter case and trailing slashes. Returns undefined for unknown paths.
 */
export function matchRoute(pathname: string): RoutePath | undefined {
  const normalized = (pathname.replace(/\/+$/, '') || '/').toLowerCase();
  return pagePaths.find((path) => path.toLowerCase() === normalized);
}
