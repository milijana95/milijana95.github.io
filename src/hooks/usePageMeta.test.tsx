import { render } from '@testing-library/react';
import { site } from '../data/site';
import { PageMetaContext, resolvePageMeta, usePageMeta, type PageMeta } from './usePageMeta';

function Page(props: { title?: string; description?: string }) {
  usePageMeta(props);
  return null;
}

describe('usePageMeta', () => {
  beforeEach(() => {
    document.head.innerHTML = `
      <meta name="description" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />`;
  });

  it('falls back to the site title and description on the home page', () => {
    expect(resolvePageMeta({})).toEqual({
      title: 'Milijana Smiljanic — UX Research & Design',
      description: site.description,
    });
  });

  it('updates the document title and meta tags in the browser', () => {
    render(<Page title="Projects" description="All the work" />);
    expect(document.title).toBe('Projects — Milijana Smiljanic');
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'All the work');
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute(
      'content',
      'Projects — Milijana Smiljanic',
    );
    expect(document.querySelector('meta[property="og:description"]')).toHaveAttribute('content', 'All the work');
  });

  it('reports the meta to a collector while pre-rendering', () => {
    const collected: Partial<PageMeta> = {};
    render(
      <PageMetaContext.Provider value={collected}>
        <Page title="Edge" description="Case study" />
      </PageMetaContext.Provider>,
    );
    expect(collected).toEqual({ title: 'Edge — Milijana Smiljanic', description: 'Case study' });
  });
});
