import type { ComponentType } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout/Layout';
import { pagePaths, routes, type RoutePath } from './data/routes';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { EdgePage } from './pages/case-studies/EdgePage';
import { IntegrityPage } from './pages/case-studies/IntegrityPage';
import { MicetroPage } from './pages/case-studies/MicetroPage';
import { PlaybookPage } from './pages/case-studies/PlaybookPage';
import { PowerUsersPage } from './pages/case-studies/PowerUsersPage';
import { ResearchBudgetPage } from './pages/case-studies/ResearchBudgetPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage';

/** Typed as a full Record so adding a route without a page is a compile error. */
const pages: Record<RoutePath, ComponentType> = {
  [routes.home]: HomePage,
  [routes.projects]: ProjectsPage,
  [routes.about]: AboutPage,
  [routes.edge]: EdgePage,
  [routes.micetro]: MicetroPage,
  [routes.integrity]: IntegrityPage,
  [routes.researchBudget]: ResearchBudgetPage,
  [routes.powerUsers]: PowerUsersPage,
  [routes.playbook]: PlaybookPage,
};

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {pagePaths.map((path) => {
          const Page = pages[path];
          return <Route key={path} path={path} element={<Page />} />;
        })}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
