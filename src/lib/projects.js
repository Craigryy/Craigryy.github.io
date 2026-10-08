import { getCollection } from 'astro:content';
import { url } from './url.js';

// Every project that isn't a draft, in the order shown on the site: smallest "order" first, then newest.
export async function getProjects() {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

// "seeblu/index" (a folder) and "seeblu" (a single file) both become /projects/seeblu/.
export const slugOf = (project) => project.id.replace(/\/index$/, '');
export const projectPath = (project) => `projects/${slugOf(project)}/`; // for absolute()
export const projectUrl = (project) => url(projectPath(project));

// Name for the screenshot's page-to-page animation; must be unique on a page and a valid CSS name.
export const coverName = (project) => `cover-${slugOf(project).replace(/[^a-z0-9-]/gi, '-')}`;

// "Founder of SeeBlu", "Creator of Kinomos": every project with a role.
export const titlesOf = (projects) => projects.filter((p) => p.data.role).map((p) => ({ project: p, text: `${p.data.role} of ${p.data.title}` }));
