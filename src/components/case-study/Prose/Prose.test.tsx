import { render, screen } from '@testing-library/react';
import { Prose } from './Prose';

describe('Prose', () => {
  it('wraps rich body copy', () => {
    render(
      <Prose className="extra">
        <p>
          Talk to <em>support</em>.
        </p>
      </Prose>,
    );
    const wrapper = screen.getByText(/Talk to/).parentElement;
    expect(wrapper).toHaveClass('prose', 'extra');
    expect(screen.getByText('support').tagName).toBe('EM');
  });
});
