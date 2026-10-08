// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// GitHub Pages, repo Craigryy/Craigryy.github.io. The deploy workflow asks GitHub for the site's address and passes
// it in, so once a custom domain is set in Settings → Pages, the next deploy uses it everywhere (links, Google,
// sitemap) with no change here. Locally the site runs at http://localhost:4321/.
export default defineConfig({
  site: process.env.SITE_URL || 'https://craigryy.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  // Fonts are downloaded when the site builds and served from this site: no Google Fonts request from visitors.
  fonts: [
    { provider: fontProviders.fontshare(), name: 'Satoshi', cssVariable: '--font-sans', weights: [400, 500, 700], styles: ['normal'] },
    { provider: fontProviders.google(), name: 'JetBrains Mono', cssVariable: '--font-mono', weights: [400, 500], styles: ['normal'] },
  ],
});
