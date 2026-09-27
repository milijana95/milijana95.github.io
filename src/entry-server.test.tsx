import { prerenderPaths, render } from './entry-server';
import { routes } from './data/routes';

describe('entry-server', () => {
  it('pre-renders every route', () => {
    expect([...prerenderPaths].sort()).toEqual(Object.values(routes).sort());
  });

  it('renders page markup together with its meta', () => {
    const { html, meta } = render(routes.edge);
    expect(html).toContain('Edge UX Optimization</h1>');
    expect(html).toContain('aria-current="page"');
    expect(meta.title).toBe('Edge UX Optimization — Milijana Smiljanic');
    expect(meta.description).toMatch(/Edge felt complicated/);
  });

  it('uses the site defaults on the home page', () => {
    const { meta } = render(routes.home);
    expect(meta.title).toBe('Milijana Smiljanic — UX Research & Design');
  });

  it('renders the not-found page for unknown paths', () => {
    const { html, meta } = render('/404');
    expect(html).toContain('Page not found');
    expect(meta.title).toBe('Page not found — Milijana Smiljanic');
  });
});
