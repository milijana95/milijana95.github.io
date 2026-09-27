import { render, screen, within } from '@testing-library/react';
import { ExperienceItem } from './ExperienceItem';

describe('ExperienceItem', () => {
  it('shows company, period, role and highlights', () => {
    render(
      <ExperienceItem
        entry={{
          company: 'Acme',
          period: '2020 - 2021',
          role: 'Researcher',
          highlights: ['Ran studies', <strong key="b">Shipped things</strong>],
        }}
      />,
    );
    expect(screen.getByRole('heading', { level: 3, name: 'Acme' })).toBeInTheDocument();
    expect(screen.getByText('2020 - 2021')).toBeInTheDocument();
    expect(screen.getByText('Researcher')).toBeInTheDocument();
    const items = within(screen.getByRole('list')).getAllByRole('listitem');
    expect(items).toHaveLength(2);
    expect(items[1]).toHaveTextContent('Shipped things');
  });

  it('omits the list when there are no highlights', () => {
    render(<ExperienceItem entry={{ company: 'Acme', period: '2018', role: 'Intern', highlights: [] }} />);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
