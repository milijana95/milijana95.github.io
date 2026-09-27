import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Link, MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { useScrollRestoration } from './useScrollRestoration';

function Shell() {
  useScrollRestoration();
  const navigate = useNavigate();
  return (
    <>
      <Link to="/b">to b</Link>
      <button onClick={() => navigate(-1)}>back</button>
      <Routes>
        <Route path="/a" element={<p>page a</p>} />
        <Route path="/b" element={<p>page b</p>} />
      </Routes>
    </>
  );
}

function scrollWindowTo(y: number) {
  Object.defineProperty(window, 'scrollY', { value: y, configurable: true });
  window.dispatchEvent(new Event('scroll'));
}

describe('useScrollRestoration', () => {
  let scrollTo: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    sessionStorage.clear();
    vi.useFakeTimers({ toFake: ['requestAnimationFrame', 'cancelAnimationFrame'] });
    scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.useRealTimers();
    scrollTo.mockRestore();
  });

  it('leaves the initial load alone and scrolls new navigations to the top', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(
      <MemoryRouter initialEntries={['/a']}>
        <Shell />
      </MemoryRouter>,
    );
    expect(scrollTo).not.toHaveBeenCalled();

    await user.click(screen.getByRole('link', { name: 'to b' }));
    expect(screen.getByText('page b')).toBeInTheDocument();
    expect(scrollTo).toHaveBeenLastCalledWith(0, 0);
  });

  it('restores the previous position when going back', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(
      <MemoryRouter initialEntries={['/a']}>
        <Shell />
      </MemoryRouter>,
    );

    act(() => {
      scrollWindowTo(640);
      vi.advanceTimersToNextFrame();
    });
    await user.click(screen.getByRole('link', { name: 'to b' }));
    act(() => {
      scrollWindowTo(0);
      vi.advanceTimersToNextFrame();
    });

    await user.click(screen.getByRole('button', { name: 'back' }));
    expect(screen.getByText('page a')).toBeInTheDocument();
    expect(scrollTo).toHaveBeenLastCalledWith(0, 640);
  });

  it('keeps working when session storage is unavailable', async () => {
    const getItem = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('denied');
    });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(
      <MemoryRouter initialEntries={['/a']}>
        <Shell />
      </MemoryRouter>,
    );
    await user.click(screen.getByRole('link', { name: 'to b' }));
    await user.click(screen.getByRole('button', { name: 'back' }));
    expect(screen.getByText('page a')).toBeInTheDocument();
    getItem.mockRestore();
  });
});
