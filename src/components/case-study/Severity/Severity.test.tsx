import { render, screen } from '@testing-library/react';
import { Severity } from './Severity';

describe('Severity', () => {
  it.each(['Critical', 'High', 'Medium'] as const)('renders the %s level with its colour', (level) => {
    render(<Severity level={level} />);
    expect(screen.getByText(`Severity: ${level}`)).toHaveClass(level.toLowerCase());
  });
});
