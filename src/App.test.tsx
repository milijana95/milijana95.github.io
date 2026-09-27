import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';
import { routes } from './data/routes';

function renderAt(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App routing', () => {
  it.each([
    [routes.home, /Great products don’t happen by accident/, 'Milijana Smiljanic — UX Research & Design'],
    [routes.projects, /^Projects$/, 'Projects — Milijana Smiljanic'],
    [routes.about, /^About me$/, 'About me — Milijana Smiljanic'],
    [routes.edge, /^Edge UX Optimization$/, 'Edge UX Optimization — Milijana Smiljanic'],
    [routes.micetro, /Micetro Redesign/, 'Micetro Redesign — Milijana Smiljanic'],
    [routes.integrity, /Integrity X, Beta Users/, 'Integrity X, Beta Users First-Impressions Study — Milijana Smiljanic'],
    [routes.researchBudget, /Conducting User Research/, 'Conducting User Research With $0 Budget — Milijana Smiljanic'],
    [routes.powerUsers, /Stop Building Products/, 'Stop Building Products Only for Power Users — Milijana Smiljanic'],
    [routes.playbook, /My Practical Playbook/, 'My Practical Playbook for Making Research Stick — Milijana Smiljanic'],
  ])('renders %s with its heading and document title', async (route, heading, title) => {
    renderAt(route);
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
    await waitFor(() => expect(document.title).toBe(title));
  });

  it('renders every page inside the shared layout', () => {
    renderAt(routes.edge);
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('shows a not-found page for unknown routes', () => {
    renderAt('/does-not-exist');
    expect(screen.getByRole('heading', { level: 1, name: 'Page not found' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute('href', '/');
  });

  it.each([routes.researchBudget, routes.powerUsers, routes.playbook])(
    'ends the %s article with related stories',
    (route) => {
      renderAt(route);
      expect(screen.getByRole('region', { name: 'More stories & insights' })).toBeInTheDocument();
    },
  );
});
