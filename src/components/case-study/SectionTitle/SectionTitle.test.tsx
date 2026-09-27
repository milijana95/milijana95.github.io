import { render, screen } from '@testing-library/react';
import { SectionTitle } from './SectionTitle';

describe('SectionTitle', () => {
  it('renders an h2', () => {
    render(<SectionTitle>Approach &amp; Process</SectionTitle>);
    expect(screen.getByRole('heading', { level: 2, name: 'Approach & Process' })).toBeInTheDocument();
  });
});
