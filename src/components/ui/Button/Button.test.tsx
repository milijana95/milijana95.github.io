import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../test/renderWithRouter';
import { Button } from './Button';

describe('Button', () => {
  it('renders an internal route as a client-side link', () => {
    renderWithRouter(<Button to="/projects">View my work</Button>);
    const link = screen.getByRole('link', { name: 'View my work' });
    expect(link).toHaveAttribute('href', '/projects');
    expect(link).not.toHaveAttribute('target');
  });

  it('opens external links in a new tab safely', () => {
    renderWithRouter(
      <Button to="https://example.com/cv.pdf" external>
        Download Full CV
      </Button>,
    );
    const link = screen.getByRole('link', { name: 'Download Full CV' });
    expect(link).toHaveAttribute('href', 'https://example.com/cv.pdf');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });

  it('applies the requested visual variant', () => {
    renderWithRouter(
      <>
        <Button to="/a">Gradient</Button>
        <Button to="/b" variant="solid">
          Solid
        </Button>
      </>,
    );
    expect(screen.getByRole('link', { name: 'Gradient' })).toHaveClass('gradient');
    expect(screen.getByRole('link', { name: 'Solid' })).toHaveClass('solid');
  });

  it('accepts an explicit accessible name', () => {
    renderWithRouter(
      <Button to="/edge" ariaLabel="See the full story: Edge">
        See the full story
      </Button>,
    );
    expect(screen.getByRole('link', { name: 'See the full story: Edge' })).toHaveTextContent('See the full story');
  });
});
