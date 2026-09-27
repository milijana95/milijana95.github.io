import { render, screen } from '@testing-library/react';
import { Eyebrow } from './Eyebrow';

describe('Eyebrow', () => {
  it('renders a paragraph by default', () => {
    render(<Eyebrow>Case study</Eyebrow>);
    expect(screen.getByText('Case study').tagName).toBe('P');
  });

  it('can render as a heading with muted tone', () => {
    render(
      <Eyebrow as="h3" tone="muted">
        User interviews
      </Eyebrow>,
    );
    const heading = screen.getByRole('heading', { level: 3, name: 'User interviews' });
    expect(heading).toHaveClass('eyebrow', 'muted');
  });
});
