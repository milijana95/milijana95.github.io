import { render, screen, within } from '@testing-library/react';
import { stats } from '../../../data/stats';
import { Stats } from './Stats';

describe('Stats', () => {
  it('renders the title and every stat', () => {
    render(<Stats title="From sticky notes to real-world results" items={stats} />);
    const section = screen.getByRole('region', { name: 'From sticky notes to real-world results' });
    const items = within(section).getAllByRole('listitem');
    expect(items).toHaveLength(stats.length);
    expect(items[0]).toHaveTextContent('10+ Products');
    expect(items[0]).toHaveTextContent('Researched & designed');
  });
});
