import { render, screen, within } from '@testing-library/react';
import { TeamStructure } from './TeamStructure';

const members = ['Lead UX Research', 'UX Designer', 'Product Manager', 'Engineering Manager'];

describe('TeamStructure', () => {
  it('lists the team and highlights the first member by default', () => {
    render(<TeamStructure members={members} />);
    const items = within(screen.getByRole('list')).getAllByRole('listitem');
    expect(items.map((item) => item.textContent)).toEqual(members);
    expect(items[0]).toHaveClass('lead');
    expect(items[1]).not.toHaveClass('lead');
  });

  it('can highlight a different lead', () => {
    render(<TeamStructure members={members} lead="UX Designer" />);
    expect(screen.getByText('UX Designer')).toHaveClass('lead');
    expect(screen.getByText('Lead UX Research')).not.toHaveClass('lead');
  });
});
