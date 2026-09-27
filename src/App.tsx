import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout/Layout';
import { routes } from './data/routes';
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

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.projects} element={<ProjectsPage />} />
        <Route path={routes.about} element={<AboutPage />} />
        <Route path={routes.edge} element={<EdgePage />} />
        <Route path={routes.micetro} element={<MicetroPage />} />
        <Route path={routes.integrity} element={<IntegrityPage />} />
        <Route path={routes.researchBudget} element={<ResearchBudgetPage />} />
        <Route path={routes.powerUsers} element={<PowerUsersPage />} />
        <Route path={routes.playbook} element={<PlaybookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
