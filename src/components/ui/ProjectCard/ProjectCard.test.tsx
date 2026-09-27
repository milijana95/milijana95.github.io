import { screen } from '@testing-library/react';
import { getProject } from '../../../data/projects';
import { renderWithRouter } from '../../../test/renderWithRouter';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  it('links public projects to their full story', () => {
    const project = getProject('edge');
    renderWithRouter(<ProjectCard project={project} />);

    expect(screen.getByRole('heading', { level: 2, name: project.title })).toBeInTheDocument();
    expect(screen.getByText('Case study')).toBeInTheDocument();
    expect(screen.getByText(project.summary)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: `Read the full story: ${project.title}` })).toHaveAttribute(
      'href',
      '/edge',
    );
  });

  it('marks private case studies instead of linking', () => {
    renderWithRouter(<ProjectCard project={getProject('copilot-idea')} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.getByText(/Request, private case study/)).toBeInTheDocument();
  });

  it('renders the requested heading level', () => {
    renderWithRouter(<ProjectCard project={getProject('playbook')} headingLevel="h3" />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('My Practical Playbook');
  });
});
