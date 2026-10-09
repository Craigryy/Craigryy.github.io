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

// A role as typed in the admin ("lead developer ", "Lead Developer", "contributor"), tidied for display in sentence
// case: "Lead developer". Words in capitals (CTO, DevOps) are left as they are.
export const roleLabel = (role) =>
  (role || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word, i) => (i === 0 ? word.replace(/^\p{Ll}/u, (c) => c.toUpperCase()) : /^\p{Lu}\p{Ll}+$/u.test(word) ? word.toLowerCase() : word))
    .join(' ');

// "Lead developer of SeeBlu", "Contributor to Scriptures and Power": every project with a role.
export const titleOf = (project) => {
  const role = roleLabel(project.data.role);
  return `${role} ${/^contribut/i.test(role) ? 'to' : 'of'} ${project.data.title}`;
};
export const titlesOf = (projects) => projects.filter((p) => roleLabel(p.data.role)).map((p) => ({ project: p, text: titleOf(p) }));
