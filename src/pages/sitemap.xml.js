// /sitemap.xml: every public page, for Google Search Console.
import { getProjects, projectPath } from '../lib/projects.js';
import { absolute } from '../lib/url.js';

export async function GET() {
  const projects = await getProjects();
  const pages = [
    { path: '', priority: '1.0' },
    { path: 'projects/', priority: '0.8' },
    ...projects.map((project) => ({ path: projectPath(project), priority: project.data.featured ? '0.8' : '0.6' })),
    { path: 'about/', priority: '0.6' },
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(({ path, priority }) => `  <url><loc>${absolute(path)}</loc><priority>${priority}</priority></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
