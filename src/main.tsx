import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { matchRoute, NOT_FOUND_PATH } from './data/routes';
import './styles/global.css';

const container = document.getElementById('root')!;
const { pathname, search, hash } = window.location;
const route = matchRoute(pathname);

if (route && route !== pathname) {
  // e.g. /projects/ or /Projects: GitHub Pages served 404.html, so load the real page instead.
  window.location.replace(route + search + hash);
} else {
  const app = (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );

  // Only hydrate markup that was pre-rendered for this URL; the dev server serves an empty root.
  const prerenderedPath = container.dataset.prerenderedPath;
  if (container.hasChildNodes() && prerenderedPath === (route ?? NOT_FOUND_PATH)) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
}
