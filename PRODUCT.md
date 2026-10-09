# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People deciding whether to hire or contract Harrison, usually arriving from his CV, LinkedIn or a Google search, often on a phone:

- hiring managers and recruiters at international companies hiring a Nigerian developer remotely;
- freelance clients: founders and businesses who want a product built;
- Nigerian companies, mainly Lagos tech teams hiring on-site or hybrid.

Their job on the site: work out quickly who he is, whether he can deliver, and how to reach him.

## Product Purpose

The personal site of Harrison James (James Harrison Onoriode), a full-stack web developer in Festac Town, Lagos, Nigeria. It exists to get him hired or contracted. Success is a visitor who understands within a minute that he ships whole products, then emails him, uses the contact form, messages him on LinkedIn or downloads his CV. It should also be found on Google for searches like "web developer in Lagos / Nigeria / Festac".

## Positioning

He ships whole products, from idea to live product with real users: lead developer of SeeBlu and of Kinomos, contributor to Scriptures and Power (the roles as set in the admin; they change there). Python, Django and Wagtail depth, plus the frontend and the deploy.

## Operating Context

- Visitors skim: a CV link or LinkedIn tap, a minute on the page, then contact or leave. Many read on phones, some on slow Nigerian mobile networks.
- Harrison edits projects, profile, About, stack, journey and articles himself from the admin page (`/admin/`, Sveltia CMS), which commits to GitHub; GitHub Actions publishes to GitHub Pages (https://craigryy.github.io, a custom domain later).

## Capabilities and Constraints

- Astro 7 static site. Content collections: projects (title, tagline, role, year, live and code links, cover, alt, gallery, stack, featured, order, draft, write-up) and pages (About). Data files: profile and Google text, stack, journey (experience, education, references), writing.
- Routes: home (hero, work, stack, journey, writing, contact), `/projects/`, `/projects/<slug>/`, `/about/`, 404, sitemap, robots.txt, JSON-LD structured data.
- The admin config (`public/admin/config.yml`) must stay in step with the content fields; the design must not hard-code anything the admin edits.
- Contact form through Web3Forms when a key is set; otherwise email and LinkedIn buttons.
- No client-side framework, little JavaScript, images optimised at build, fonts self-hosted through Astro's font API. Site address and base path come from the deploy workflow.

## Brand Commitments

- Name: Harrison James. Roles are shown as titles built from each project's role ("Lead developer of SeeBlu", "Contributor to Scriptures and Power").
- Harrison is a Black Clover fan and wants it visible (Asta, King Julius): a manga panel before Contact with a black grimoire and a speech bubble, and an admin slot for up to three character pictures. Official Black Clover artwork is not used (copyright); only art Harrison has the rights to (his own, commissioned or licensed) goes in that slot.
- Colours: grey and burgundy (Harrison: "I'm more of a grey or burgundy guy"); no yellow. Type: Bricolage Grotesque. No rolling or animated signs in the header.
- No visible location on the page (Harrison removed "Festac Town, Lagos, Nigeria"); it stays in metadata for search.
- No glassmorphism: Harrison called frosted-glass panels everywhere AI slop. No AI-slop patterns in general.
- "Built with Astro" credit stays (footer and the "How this site is built" section).
- His current live design stays available: a redesign never replaces it without his say, and he wants to be able to switch between designs.

## Evidence on Hand

- Projects with screenshots and write-ups in `src/content/projects/`: SeeBlu (live at https://seeblu.onrender.com), Kinomos (https://kinomos.com), Scriptures and Power (https://scripturesandpower.com), Pycam, Recipes API, Halo, Assemble.
- CV: `public/files/Harrison_James_CV.pdf`. Photo: `src/images/profile.jpg`. Medium articles: `src/data/writing.json`.
- Experience: Heritage Energy intern (2021–2022). Education: BSc Biochemistry, Delta State University, Abraka; Udemy courses. Reference: Samuel James.
- There are no testimonials, client logos, user counts or performance metrics. Do not invent any.

## Product Principles

1. Prove by shipping: lead with real products and the role he played, not adjectives.
2. A phone visitor gets who he is, what he has built and how to reach him in the first screen.
3. Personality (the Black Clover nods) never costs clarity or credibility.
4. Everything the admin edits stays data-driven.
5. Fast on slow mobile networks.

## Accessibility & Inclusion

WCAG AA contrast, full keyboard use, visible focus, and reduced-motion preferences respected, as the current site already does.
