import { screen, within } from '@testing-library/react';
import { experience } from '../../../data/experience';
import { site } from '../../../data/site';
import { renderWithRouter } from '../../../test/renderWithRouter';
import { Experience } from './Experience';

describe('Experience', () => {
  it('lists every role in order', () => {
    renderWithRouter(<Experience entries={experience} />);
    const section = screen.getByRole('region', { name: 'My Work Experience' });
    const companies = within(section)
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent);
    expect(companies).toEqual(experience.map((entry) => entry.company));
  });

  it('links to the full CV in a new tab', () => {
    renderWithRouter(<Experience entries={experience} />);
    const link = screen.getByRole('link', { name: 'Download Full CV' });
    expect(link).toHaveAttribute('href', site.cvUrl);
    expect(link).toHaveAttribute('target', '_blank');
  });
});
