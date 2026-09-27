import { render } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
  it('is decorative so it is not announced twice next to the name', () => {
    const { container } = render(<Logo />);
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('alt', '');
    expect(img).toHaveAttribute('src', '/images/icons/logo.svg');
  });
});
