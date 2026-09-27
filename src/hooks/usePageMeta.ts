import { createContext, useContext, useEffect } from 'react';
import { site } from '../data/site';

export interface PageMeta {
  title: string;
  description: string;
}

/**
 * Collects the current page's meta while pre-rendering, so the build can write it into the
 * static HTML. In the browser there is no collector and the meta is applied to the document.
 */
export const PageMetaContext = createContext<Partial<PageMeta> | null>(null);

interface PageMetaInput {
  /** Page name; omitted on the home page. */
  title?: string;
  description?: string;
}

export function resolvePageMeta({ title, description }: PageMetaInput): PageMeta {
  return {
    title: title ? `${title} — ${site.name}` : `${site.name} — UX Research & Design`,
    description: description ?? site.description,
  };
}

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content);
}

export function usePageMeta(input: PageMetaInput = {}) {
  const meta = resolvePageMeta(input);
  const collector = useContext(PageMetaContext);
  if (collector) Object.assign(collector, meta);

  useEffect(() => {
    document.title = meta.title;
    setMetaContent('meta[name="description"]', meta.description);
    setMetaContent('meta[property="og:title"]', meta.title);
    setMetaContent('meta[property="og:description"]', meta.description);
  }, [meta.title, meta.description]);
}
