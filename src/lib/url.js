// Links inside the site. They follow Astro's base path, so the site also works from a sub-folder (e.g. /craigs/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path = '') => `${base}/${path.replace(/^\//, '')}`;

// Full address (https://…) for Google, link previews and the sitemap.
export const absolute = (path = '') => new URL(url(path), import.meta.env.SITE).href;
