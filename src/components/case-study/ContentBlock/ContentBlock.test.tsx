import { render, screen } from '@testing-library/react';
import { ContentBlock } from './ContentBlock';

describe('ContentBlock', () => {
  it('renders a sub-heading above prose', () => {
    render(
      <ContentBlock title="The Shift">
        <p>Body copy</p>
      </ContentBlock>,
    );
    expect(screen.getByRole('heading', { level: 3, name: 'The Shift' })).toBeInTheDocument();
    expect(screen.getByText('Body copy').parentElement).toHaveClass('prose');
  });

  it('renders an eyebrow label instead of a title', () => {
    render(
      <ContentBlock eyebrow="User Interviews">
        <p>Body</p>
      </ContentBlock>,
    );
    expect(screen.getByRole('heading', { level: 3, name: 'User Interviews' })).toHaveClass('eyebrow');
  });

  it('places aside media next to the copy', () => {
    render(
      <ContentBlock title="Split" aside={<img alt="Quad map" src="/q.webp" />}>
        <p>Text</p>
      </ContentBlock>,
    );
    expect(screen.getByRole('img', { name: 'Quad map' }).parentElement).toHaveClass('aside');
  });

  it('can be a heading on its own', () => {
    const { container } = render(<ContentBlock title="Step 3" />);
    expect(container.querySelector('.prose')).toBeNull();
  });
});
