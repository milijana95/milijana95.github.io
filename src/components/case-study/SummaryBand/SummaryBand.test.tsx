import { render, screen } from '@testing-library/react';
import { SummaryBand } from './SummaryBand';

describe('SummaryBand', () => {
  it('renders a column per item and spans the full width', () => {
    render(
      <SummaryBand
        items={[
          { title: 'Problem Statement', content: 'Too complex' },
          { title: 'Opportunity', content: <strong>Simplify</strong> },
          { title: 'My Role', content: 'Lead' },
        ]}
      />,
    );
    const band = screen.getByRole('region', { name: 'Project summary' });
    expect(band).toHaveAttribute('data-bleed');
    expect(screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)).toEqual([
      'Problem Statement',
      'Opportunity',
      'My Role',
    ]);
    expect(band.firstElementChild).toHaveStyle({ '--columns': '3' });
    expect(screen.getByText('Simplify').tagName).toBe('STRONG');
  });
});
