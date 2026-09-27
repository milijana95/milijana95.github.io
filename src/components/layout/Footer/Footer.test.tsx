import { render, screen } from '@testing-library/react';
import { site } from '../../../data/site';
import { Footer } from './Footer';

describe('Footer', () => {
  it('offers the email as a mailto link', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: site.email })).toHaveAttribute('href', `mailto:${site.email}`);
    expect(screen.getByText(/Let’s stay in touch, my email is:/)).toBeInTheDocument();
  });

  it('links to LinkedIn in a new tab with an accessible name', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: 'LinkedIn profile' });
    expect(link).toHaveAttribute('href', site.linkedIn);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });
});
