import { act, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';
import { renderWithRouter } from '../../../test/renderWithRouter';
import { Header } from './Header';

function currentLink() {
  const nav = screen.getByRole('navigation', { name: 'Main' });
  return within(nav)
    .getAllByRole('link')
    .find((link) => link.getAttribute('aria-current') === 'page');
}

describe('Header', () => {
  it('links the brand to the home page', () => {
    renderWithRouter(<Header />);
    expect(screen.getByRole('link', { name: 'Milijana Smiljanic' })).toHaveAttribute('href', '/');
  });

  it.each([
    ['/', 'Home'],
    ['/projects', 'Projects'],
    ['/about-me', 'About me'],
    ['/edge', 'Projects'],
    ['/my-practical-playbook-for-making-research-stick', 'Projects'],
    ['/projects/', 'Projects'],
    ['/Edge/', 'Projects'],
    ['/about-me/', 'About me'],
  ])('marks the current section on %s as %s', (route, label) => {
    renderWithRouter(<Header />, { route });
    expect(currentLink()).toHaveTextContent(label);
    expect(currentLink()).toHaveClass('navLinkActive');
  });

  it('marks nothing as current on an unknown page', () => {
    renderWithRouter(<Header />, { route: '/nope' });
    expect(currentLink()).toBeUndefined();
  });

  it('toggles the mobile menu and closes it with Escape', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Header />);
    const button = screen.getByRole('button', { name: 'Open menu' });
    const nav = screen.getByRole('navigation', { name: 'Main' });

    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', nav.id);

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(button).toHaveAccessibleName('Close menu');
    expect(nav).toHaveClass('navOpen');

    await user.keyboard('{Escape}');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(nav).not.toHaveClass('navOpen');
  });

  it('closes the mobile menu after navigating', async () => {
    const user = userEvent.setup();
    renderWithRouter(
      <Routes>
        <Route path="*" element={<Header />} />
      </Routes>,
    );
    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    await act(() => user.click(screen.getByRole('link', { name: 'Projects' })));
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
    expect(currentLink()).toHaveTextContent('Projects');
  });
});
