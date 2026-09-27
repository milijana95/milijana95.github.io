import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../test/renderWithRouter';
import { Hero } from './Hero';

describe('Hero', () => {
  it('shows the headline with the value proposition', () => {
    renderWithRouter(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Great products don’t happen by accident.');
    expect(heading).toHaveTextContent('So I help teams validate faster, waste less, and build with confidence.');
  });

  it('links the call to action to the projects page', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByRole('link', { name: 'View my work' })).toHaveAttribute('href', '/projects');
  });
});
