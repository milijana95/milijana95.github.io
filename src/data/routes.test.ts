import { pages as e2ePages } from '../../e2e/pages';
import { matchRoute, NOT_FOUND_PATH, pagePaths, routes, routeSections } from './routes';

describe('routes', () => {
  it('lists every route exactly once', () => {
    expect(new Set(pagePaths).size).toBe(Object.keys(routes).length);
  });

  it('assigns every route to a navigation section', () => {
    expect(Object.keys(routeSections).sort()).toEqual([...pagePaths].sort());
    expect(routeSections[routes.edge]).toBe('projects');
  });

  it('keeps the e2e page list in sync with the routes', () => {
    expect(e2ePages.map((page) => page.path).sort()).toEqual([...pagePaths].sort());
  });

  it('does not use the not-found path for a real page', () => {
    expect(matchRoute(NOT_FOUND_PATH)).toBeUndefined();
  });

  it.each([
    ['/', '/'],
    ['/projects', '/projects'],
    ['/projects/', '/projects'],
    ['/projects//', '/projects'],
    ['/Projects', '/projects'],
    ['/EDGE/', '/edge'],
    ['//', '/'],
  ])('matches %s to %s', (pathname, expected) => {
    expect(matchRoute(pathname)).toBe(expected);
  });

  it.each(['/nope', '/projects/edge', '/edge.html'])('does not match %s', (pathname) => {
    expect(matchRoute(pathname)).toBeUndefined();
  });
});
