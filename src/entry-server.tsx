import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { App } from './App';
import { routes } from './data/routes';
import { site } from './data/site';
import { PageMetaContext, resolvePageMeta, type PageMeta } from './hooks/usePageMeta';

export const siteUrl = site.url;

export const prerenderPaths: readonly string[] = Object.values(routes);

/** Renders one route to HTML for the static build (see scripts/prerender.mjs). */
export function render(url: string): { html: string; meta: PageMeta } {
  const collected: Partial<PageMeta> = {};
  const html = renderToString(
    <StrictMode>
      <PageMetaContext.Provider value={collected}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </PageMetaContext.Provider>
    </StrictMode>,
  );
  return { html, meta: { ...resolvePageMeta({}), ...collected } };
}
