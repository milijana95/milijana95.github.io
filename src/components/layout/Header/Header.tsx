import { useEffect, useId, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { matchRoute, routes, routeSections, type NavSection } from '../../../data/routes';
import { site } from '../../../data/site';
import { Logo } from '../../ui/Logo/Logo';
import styles from './Header.module.css';

interface NavItem {
  label: string;
  to: string;
  section: NavSection;
}

const navItems: readonly NavItem[] = [
  { label: 'Home', to: routes.home, section: 'home' },
  { label: 'Projects', to: routes.projects, section: 'projects' },
  { label: 'About me', to: routes.about, section: 'about' },
];

export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const menuId = useId();

  // Close the mobile menu whenever the route changes.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const route = matchRoute(pathname);
  const currentSection = route && routeSections[route];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to={routes.home} className={styles.brand}>
          <Logo />
          <span className={styles.name}>{site.name}</span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className={[styles.menuIcon, menuOpen ? styles.menuIconOpen : ''].join(' ')} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id={menuId}
          aria-label="Main"
          className={[styles.nav, menuOpen ? styles.navOpen : ''].join(' ')}
        >
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const current = item.section === currentSection;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={[styles.navLink, current ? styles.navLinkActive : ''].join(' ')}
                    aria-current={current ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
