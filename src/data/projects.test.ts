import { featuredWork } from './featured';
import { getProject, projects } from './projects';
import { routes, routeSections } from './routes';

describe('project data', () => {
  it('has unique ids', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('only links to routes that exist', () => {
    const known = new Set<string>(Object.values(routes));
    for (const project of projects) {
      if (project.href) expect(known).toContain(project.href);
    }
    for (const item of featuredWork) expect(known).toContain(item.href);
  });

  it('gives every page in the Projects section (except the list itself) a project card', () => {
    const linked = projects.map((p) => p.href).filter(Boolean);
    const detailPages = Object.entries(routeSections)
      .filter(([path, section]) => section === 'projects' && path !== routes.projects)
      .map(([path]) => path);
    expect([...linked].sort()).toEqual(detailPages.sort());
  });

  it('serves images from the public images folder', () => {
    for (const project of projects) expect(project.image).toMatch(/^\/images\/.+\.webp$/);
  });

  it('looks projects up by id and rejects unknown ids', () => {
    expect(getProject('micetro').title).toContain('Micetro');
    expect(() => getProject('nope' as never)).toThrow('Unknown project: nope');
  });
});
