import { render, screen } from '@testing-library/react';
import { DisplayHeading } from './DisplayHeading';

describe('DisplayHeading', () => {
  it('renders an h1 centred by default', () => {
    render(<DisplayHeading>Projects</DisplayHeading>);
    expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toHaveClass('center');
  });

  it('supports a different level, alignment and id', () => {
    render(
      <DisplayHeading as="h2" align="start" id="featured">
        Featured Work
      </DisplayHeading>,
    );
    const heading = screen.getByRole('heading', { level: 2, name: 'Featured Work' });
    expect(heading).toHaveClass('start');
    expect(heading).toHaveAttribute('id', 'featured');
  });
});
