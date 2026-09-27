import { screen, within } from '@testing-library/react';
import { projects } from '../../../data/projects';
import { renderWithRouter } from '../../../test/renderWithRouter';
import { ProjectGrid } from './ProjectGrid';

describe('ProjectGrid', () => {
  it('renders one list item per project, in order', () => {
    renderWithRouter(<ProjectGrid projects={projects} />);
    const items = within(screen.getByRole('list')).getAllByRole('listitem');
    expect(items).toHaveLength(projects.length);
    items.forEach((item, index) => {
      expect(within(item).getByRole('heading')).toHaveTextContent(projects[index].title);
    });
  });
});
