import { render, screen, within } from '@testing-library/react';
import { MetricGrid } from './MetricGrid';

describe('MetricGrid', () => {
  it('renders stat and list cards in columns', () => {
    render(
      <MetricGrid
        title="At‑a‑Glance Metrics"
        columns={[
          [{ type: 'stat', value: '93%', tone: 'pink', label: 'Positive experience', note: 'Vs previous' }],
          [
            {
              type: 'list',
              heading: 'Most valuable features:',
              tone: 'teal',
              items: [
                { value: '64%', label: 'Tree view' },
                { value: '50%', label: 'Quick Search' },
              ],
            },
          ],
          [{ type: 'stat', value: '100%', tone: 'pink', label: 'DDI winner', inline: true }],
        ]}
      />,
    );

    const section = screen.getByRole('region', { name: 'At‑a‑Glance Metrics' });
    expect(within(section).getByText('93%')).toHaveClass('badge', 'pink');
    expect(within(section).getByText('Vs previous')).toBeInTheDocument();
    expect(within(section).getAllByRole('listitem')).toHaveLength(2);
    expect(within(section).getByText('64%')).toHaveClass('teal');
    expect(within(section).getByText('100%').parentElement).toHaveClass('inline');
  });
});
