// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// GitHub Pages, repo Craigryy/Craigryy.github.io. The deploy workflow asks GitHub for the site's address and passes
// it in, so once a custom domain is set in Settings → Pages, the next deploy uses it everywhere (links, Google,
// sitemap) with no change here. Locally the site runs at http://localhost:4321/.
export default defineConfig({
  site: process.env.SITE_URL || 'https://craigryy.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  // One typeface, self-hosted from src/assets/fonts: Bricolage Grotesque (SIL Open Font License, from Google Fonts), a
  // variable font with weight 200–800, a narrow width (75%) for the route-board labels and optical sizes for headings.
  // No request to Google from visitors, and the build never depends on a font server.
  fonts: [
    {
      provider: fontProviders.local(), name: 'Bricolage Grotesque', cssVariable: '--font-sans',
      fallbacks: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/bricolage-grotesque-latin.woff2'], weight: '200 800', style: 'normal', stretch: '75% 100%', unicodeRange: ["U+0000-00FF", "U+0131", "U+0152-0153", "U+02BB-02BC", "U+02C6", "U+02DA", "U+02DC", "U+0304", "U+0308", "U+0329", "U+2000-206F", "U+20AC", "U+2122", "U+2191", "U+2193", "U+2212", "U+2215", "U+FEFF", "U+FFFD"] },
          { src: ['./src/assets/fonts/bricolage-grotesque-latin-ext.woff2'], weight: '200 800', style: 'normal', stretch: '75% 100%', unicodeRange: ["U+0100-02BA", "U+02BD-02C5", "U+02C7-02CC", "U+02CE-02D7", "U+02DD-02FF", "U+0304", "U+0308", "U+0329", "U+1D00-1DBF", "U+1E00-1E9F", "U+1EF2-1EFF", "U+2020", "U+20A0-20AB", "U+20AD-20C4", "U+2113", "U+2C60-2C7F", "U+A720-A7FF"] },
        ],
      },
    },
  ],
});
