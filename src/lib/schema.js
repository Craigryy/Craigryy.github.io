// Structured data (schema.org JSON-LD): tells Google in a machine-readable way who you are, where you work, what
// you know and what you founded. It is what lets Google connect "Harrison James", "web developer", "Lagos" and
// "founder of SeeBlu" to this site. Built from the same data files the pages use.
import { getImage } from 'astro:assets';
import photo from '../images/profile.jpg';
import profile from '../data/profile.json';
import stack from '../data/stack.json';
import journey from '../data/journey.json';
import { absolute } from './url.js';
import { projectPath } from './projects.js';

export const personId = () => absolute('#person');
const websiteId = () => absolute('#website');
const full = (path) => new URL(path, import.meta.env.SITE).href;

export async function profilePhotoUrl() {
  const image = await getImage({ src: photo, width: 600, height: 600, format: 'jpg' });
  return full(image.src);
}

export async function person() {
  const { area, city, country, countryCode } = profile.location;
  return {
    '@type': 'Person',
    '@id': personId(),
    name: profile.name,
    alternateName: [profile.fullName].filter(Boolean),
    jobTitle: profile.role,
    description: profile.seo.description,
    url: absolute(),
    image: await profilePhotoUrl(),
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: area || city,
      addressRegion: city,
      addressCountry: countryCode,
    },
    homeLocation: { '@type': 'Place', name: [area, city, country].filter(Boolean).join(', ') },
    hasOccupation: {
      '@type': 'Occupation',
      name: profile.role,
      occupationLocation: { '@type': 'City', name: `${city}, ${country}` },
      skills: stack.groups.flatMap((group) => group.items).join(', '),
    },
    knowsAbout: stack.groups.flatMap((group) => group.items),
    alumniOf: journey.education
      .filter((item) => /university|college|polytechnic/i.test(item.org))
      .map((item) => ({ '@type': 'CollegeOrUniversity', name: item.org })),
    sameAs: profile.socials.map((social) => social.url),
  };
}

export const website = () => ({
  '@type': 'WebSite',
  '@id': websiteId(),
  url: absolute(),
  name: profile.name,
  description: profile.seo.description,
  inLanguage: 'en',
  publisher: { '@id': personId() },
});

// A project you founded becomes an Organization with you as founder; anything else a piece of work you created.
export function projectThing(project) {
  const { title, tagline, role, url, repo, year, stack: tools } = project.data;
  const base = { name: title, description: tagline, url: url || absolute(projectPath(project)) };
  if (role && /found/i.test(role)) return { '@type': 'Organization', ...base, founder: { '@id': personId() } };
  return {
    '@type': 'CreativeWork',
    ...base,
    creator: { '@id': personId() },
    dateCreated: String(year),
    keywords: tools.join(', '),
    ...(repo && { codeRepository: repo }),
  };
}

export const graph = (...nodes) => ({ '@context': 'https://schema.org', '@graph': nodes.flat().filter(Boolean) });

export const breadcrumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], index) => ({ '@type': 'ListItem', position: index + 1, name, item: absolute(path) })),
});

export { websiteId };
