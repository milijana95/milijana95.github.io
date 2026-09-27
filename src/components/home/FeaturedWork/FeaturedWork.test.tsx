import { screen, within } from '@testing-library/react';
import { featuredWork } from '../../../data/featured';
import { renderWithRouter } from '../../../test/renderWithRouter';
import { FeaturedWork } from './FeaturedWork';

describe('FeaturedWork', () => {
  it('renders each featured item with a link to its story', () => {
    renderWithRouter(<FeaturedWork items={featuredWork} />);
    const section = screen.getByRole('region', { name: 'Featured Work' });

    for (const item of featuredWork) {
      expect(within(section).getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument();
      expect(within(section).getByRole('img', { name: item.imageAlt })).toHaveAttribute('src', item.image);
      expect(
        within(section).getByRole('link', { name: `See the full story: ${item.title}` }),
      ).toHaveAttribute('href', item.href);
    }
  });

  it('alternates the image side on every other row', () => {
    renderWithRouter(<FeaturedWork items={featuredWork} />);
    const rows = screen.getAllByRole('listitem');
    expect(rows.map((row) => row.hasAttribute('data-reverse'))).toEqual([false, true, false]);
  });
});
