// /robots.txt: lets search engines in, keeps the admin page out, and points them at the sitemap.
// Google only reads robots.txt at the root of a domain, so this one counts once the site lives at the root
// (repo renamed to Craigryy.github.io, or a custom domain). Until then, submit the sitemap in Search Console.
import { url, absolute } from '../lib/url.js';

export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: ${url('admin/')}

Sitemap: ${absolute('sitemap.xml')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
