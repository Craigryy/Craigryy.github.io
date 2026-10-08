// What a project (and the About page) may contain. Astro checks every file against these fields when it builds,
// so a missing title or a wrong image path stops the build with a message naming the file. The admin page
// (public/admin/config.yml) offers the same fields.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The admin may save an emptied field as "" instead of leaving it out; treat both as "not set".
const blank = (value: unknown) => (value === '' || value === null ? undefined : value);
const optionalText = z.preprocess(blank, z.string().optional());
const optionalUrl = z.preprocess(blank, z.url().optional());

// One folder per project: src/content/projects/<name>/index.md, with its screenshot next to it.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      role: optionalText, // "Founder", "Creator"… shown as "Founder of SeeBlu"
      year: z.number().int(),
      url: optionalUrl, // the live site
      repo: optionalUrl, // the source code
      image: z.preprocess(blank, image().optional()), // the screenshot, next to index.md
      alt: optionalText,
      // More screenshots (desktop, phone…), shown on the project's own page.
      gallery: z.array(z.object({ image: image(), caption: optionalText })).default([]),
      stack: z.array(z.string()).default([]),
      featured: z.boolean().default(false), // big card at the top
      order: z.number().default(100), // smaller numbers show first
      draft: z.boolean().default(false), // hidden from the site
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    spotify: optionalUrl, // a Spotify embed link, shown under the text
  }),
});

export const collections = { projects, pages };
