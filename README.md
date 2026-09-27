# milijana95.github.io

Portfolio of Milijana Smiljanic, built from the Figma “Portfolio” design with React, TypeScript and Vite.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server at http://localhost:5173 |
| `npm run build` | Type-check and build to `dist/` (also writes `404.html` for client-side routing on GitHub Pages) |
| `npm run preview` | Serve the production build locally |
| `npm test` | Unit and component tests (Vitest + Testing Library) |
| `npm run test:e2e` | End-to-end tests (Playwright) at mobile, tablet and desktop sizes |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript |

Run `npx playwright install chromium` once before the first e2e run.

## Structure

```
src/
  components/
    layout/      Header (with mobile menu), Footer, Layout
    ui/          Button, Eyebrow, Logo, DisplayHeading, ProjectCard, ProjectGrid
    home/        Hero, Stats, FeaturedWork
    about/       AboutIntro, Experience, ExperienceItem
    case-study/  Building blocks for case studies and articles
  data/          Site copy: projects, featured work, stats, experience, routes
  pages/         One component per route
  styles/        Design tokens and global styles
e2e/             Playwright specs
public/images/   Optimised WebP images exported from Figma
```

Styles are mobile-first CSS Modules; breakpoints are 768px (tablet) and 1024px (desktop).
Design tokens (colours, fonts, shadows) live in `src/styles/global.css`.

## Deployment

`.github/workflows/deploy.yml` lints, type-checks, runs unit + e2e tests and, on `main`,
deploys `dist/` to GitHub Pages. In the repository settings set **Pages → Source** to
**GitHub Actions**.
