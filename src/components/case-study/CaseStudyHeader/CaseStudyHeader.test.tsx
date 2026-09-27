import { render, screen } from '@testing-library/react';
import { CaseStudyHeader } from './CaseStudyHeader';

describe('CaseStudyHeader', () => {
  it('renders the title as the page heading with its lede', () => {
    render(<CaseStudyHeader title="Edge UX Optimization" lede="Imagine opening Netflix" />);
    expect(screen.getByRole('heading', { level: 1, name: 'Edge UX Optimization' })).toBeInTheDocument();
    expect(screen.getByText('Imagine opening Netflix')).toBeInTheDocument();
    expect(screen.queryByText(/By /)).not.toBeInTheDocument();
  });

  it('shows an optional byline', () => {
    render(<CaseStudyHeader byline="By Milijana Smiljanic." title="Article" lede="Lede" />);
    expect(screen.getByText('By Milijana Smiljanic.')).toBeInTheDocument();
  });
});
