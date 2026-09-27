import { render, screen, within } from '@testing-library/react';
import { ReasonList } from './ReasonList';

describe('ReasonList', () => {
  it('renders each reason with its icon', () => {
    const { container } = render(
      <ReasonList
        title="Why this works?"
        reasons={[
          { shape: 'circle', title: 'Forces decisions', description: 'Commitment.' },
          { shape: 'diamond', title: 'Prevents drift', description: 'Owners.' },
        ]}
      />,
    );
    const section = screen.getByRole('region', { name: 'Why this works?' });
    expect(within(section).getAllByRole('heading', { level: 3 }).map((h) => h.textContent)).toEqual([
      'Forces decisions',
      'Prevents drift',
    ]);
    expect(container.querySelector('img[src="/images/icons/decision.svg"]')).toBeInTheDocument();
    expect(container.querySelector('.diamond')).toBeInTheDocument();
  });
});
