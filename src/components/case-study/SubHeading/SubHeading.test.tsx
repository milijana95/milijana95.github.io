import { render, screen } from '@testing-library/react';
import { SubHeading } from './SubHeading';

describe('SubHeading', () => {
  it('renders an h3 by default', () => {
    render(<SubHeading>The Shift</SubHeading>);
    expect(screen.getByRole('heading', { level: 3, name: 'The Shift' })).toHaveClass('heading');
  });

  it('supports h2 and an id', () => {
    render(
      <SubHeading as="h2" id="team">
        Team structure
      </SubHeading>,
    );
    expect(screen.getByRole('heading', { level: 2, name: 'Team structure' })).toHaveAttribute('id', 'team');
  });
});
