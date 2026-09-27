import { useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const STORAGE_KEY = 'scroll-positions';

function readPositions(): Record<string, number> {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}') as Record<string, number>;
  } catch {
    return {};
  }
}

function savePosition(key: string, y: number) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...readPositions(), [key]: y }));
  } catch {
    // Storage can be unavailable (private mode, quota); restoration is best-effort.
  }
}

/**
 * New navigations start at the top; Back/Forward and reloads return to where the reader was.
 * Positions are stored per history entry so they survive a reload.
 */
export function useScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return;
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    if (navigationType === 'POP') {
      const y = readPositions()[location.key];
      if (y !== undefined) window.scrollTo(0, y);
    } else {
      window.scrollTo(0, 0);
    }

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => savePosition(location.key, window.scrollY));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, [location.key, navigationType]);
}
