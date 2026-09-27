import { screen, within } from '@testing-library/react';
import { getProject, type ProjectId } from '../../../data/projects';
import { renderWithRouter } from '../../../test/renderWithRouter';
import { MoreStories } from './MoreStories';

describe('MoreStories', () => {
  it('shows the requested projects as cards', () => {
    const ids: ProjectId[] = ['edge', 'micetro', 'playbook'];
    renderWithRouter(<MoreStories projectIds={ids} />);
    const section = screen.getByRole('region', { name: 'More stories & insights' });
    const titles = within(section).getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    expect(titles).toEqual(ids.map((id) => getProject(id).title));
  });
});
