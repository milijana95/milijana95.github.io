import { render, screen } from '@testing-library/react';
import { Figure } from './Figure';

describe('Figure', () => {
  it('renders a lazily loaded image with intrinsic size', () => {
    render(<Figure src="/a.webp" alt="Process" width={1600} height={781} />);
    const img = screen.getByRole('img', { name: 'Process' });
    expect(img).toHaveAttribute('width', '1600');
    expect(img).toHaveAttribute('height', '781');
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).not.toHaveClass('capped');
  });

  it('caps the height and shows a caption when asked', () => {
    render(<Figure src="/a.webp" alt="Hero" width={800} height={733} maxHeight={380} caption="Fig 1" />);
    const img = screen.getByRole('img', { name: 'Hero' });
    expect(img).toHaveClass('capped');
    expect(img).toHaveStyle({ maxHeight: '380px' });
    expect(screen.getByText('Fig 1').tagName).toBe('FIGCAPTION');
  });
});
