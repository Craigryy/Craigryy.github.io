# Harrison James · portfolio

My developer site: **https://craigryy.github.io**. Built with [Astro](https://astro.build), published free on
GitHub Pages, edited from an admin page at **https://craigryy.github.io/admin/**.

- **Projects** live in `src/content/projects/`, one folder per project (`index.md` plus its screenshots).
- **Everything else** (profile, About page, stack, experience, articles) is in `src/data/` and `src/content/pages/`.
- Every push to `main` rebuilds and republishes the site in about a minute. Saves from the admin page are pushes too.
- Pages ship no JavaScript framework; icons and images are prepared when the site builds.

## Edit the site from the admin page

The admin page saves straight to this repo, so it needs a GitHub token that can write to it. One time:

1. GitHub → your photo → **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens**
   → **Generate new token**.
2. Repository access: **Only select repositories** → `Craigryy.github.io`.
3. Permissions → Repository permissions → **Contents: Read and write**. Nothing else.
4. Pick an expiry date, generate, and copy the token.
5. Open https://craigryy.github.io/admin/, choose **Sign in with token**, and paste it. The browser remembers it.

Then:

- **Add a project:** Projects → New Project. Fill in the fields, add a screenshot, save. "Your role" (Founder,
  Creator…) appears as the green tag and in the hero, e.g. "Founder of SeeBlu".
- **Change a link** (for example when SeeBlu moves to its own domain): open the project, edit "Live site", save.
- **Replace the CV:** Site content → Profile → CV, upload the new PDF.
- **Google text:** Site content → Profile → Google.

Each save is a commit to `main`; the site updates about a minute later (watch the **Actions** tab).

## Add a project by hand

Create a folder in `src/content/projects/`, e.g. `src/content/projects/myapp/`, put the screenshot in it, and add
`index.md`:

```md
---
title: My App
tagline: What it does, in one line
role: Founder
year: 2026
url: https://myapp.com
repo: https://github.com/Craigryy/myapp
image: ./cover.png
alt: My App home screen
gallery:
  - image: ./phone.png
    caption: On a phone
stack: [Django, React, PostgreSQL]
featured: true
order: 1
---

A few paragraphs about the project: the problem, what you built, what you learned.
```

| Field | Meaning |
|---|---|
| `title`, `tagline` | Card heading and the line under it |
| `role` | Optional. "Founder", "Creator", "Architect & maintainer"… shown as a tag and as "Founder of My App" |
| `year` | Year shown on the card |
| `url`, `repo` | Optional. "Live site" and "Code" links |
| `image`, `alt` | Optional cover screenshot and its description. Any size: Astro resizes and converts it |
| `gallery` | Optional extra screenshots, shown on the project's page under "Screens" |
| `stack` | Technologies, shown as chips |
| `featured` | `true` for a big card at the top of the home page |
| `order` | Smaller shows first; ties go newest year first |
| `draft` | `true` hides the project without deleting it |

To remove a project, delete its folder. A mistake in a project file (missing field, wrong image path) stops the build
with a message naming the file and the field.

## Run it on your computer

Needs Node.js 22.12 or newer.

```sh
npm install
npm run dev        # http://localhost:4321/ (reloads as you edit)
npm run build      # the finished site, in dist/
npm run preview    # serve dist/ to check it
```

## Use your own domain

When you buy a domain (e.g. `harrisonjames.dev`):

1. **DNS, at the company you bought it from.** For the bare domain add four `A` records pointing to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153` (and, if they offer `AAAA`,
   `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`). For `www` add a
   `CNAME` record pointing to `craigryy.github.io`.
2. **GitHub:** this repo → Settings → **Pages** → Custom domain → type the domain → Save. Wait for the DNS check to
   pass (minutes to a few hours), then tick **Enforce HTTPS**.
3. **Rebuild:** Actions → Deploy to GitHub Pages → **Run workflow**. The workflow reads the new address from the Pages
   settings, so links, the sitemap and what Google sees all switch to the domain. No code change.
4. Recommended: GitHub → your Settings → **Pages** → Add a verified domain, so nobody else can point a site at it.

`craigryy.github.io` keeps working and forwards visitors to the new domain.

## Google

1. Open [Google Search Console](https://search.google.com/search-console), add a property for the site's address,
   choose the **HTML tag** method, and copy only the `content="…"` value.
2. Admin → Site content → Profile → Google → **Google Search Console code**, paste, save. Wait a minute for the
   deploy, then press **Verify** in Search Console.
3. Search Console → Sitemaps → submit `sitemap.xml`.

After moving to your own domain, add the domain as a new property and submit its sitemap too.

## Contact form

GitHub Pages only serves files; it can't send email. [Web3Forms](https://web3forms.com) does that part for free:

1. Enter the email address messages should go to on web3forms.com and copy the **Access Key** they send you. The key
   is meant to be public.
2. This repo → Settings → Secrets and variables → Actions → **Variables** → New repository variable: name
   `WEB3FORMS_KEY`, value = the key.
3. Actions → Deploy to GitHub Pages → Run workflow.

Without the key, the Contact section shows "Email me" and LinkedIn buttons instead of a form. For local testing,
copy `.env.example` to `.env` and fill in `PUBLIC_WEB3FORMS_KEY`. `.env` is never committed.

## Where things are

| Path | What |
|---|---|
| `src/pages/` | Home, About, project pages, 404, sitemap and robots.txt |
| `src/components/` | Header, hero, code card, project card, sections, footer, error page |
| `src/content/projects/` | One folder per project |
| `src/content/pages/about.md` | About page text |
| `src/content.config.ts` | The fields a project must have |
| `src/data/` | Profile and Google text, stack, experience and education, articles |
| `src/lib/schema.js` | What Google is told about you (structured data) |
| `src/styles/global.css` | Colours, fonts and shared styles |
| `public/` | Files served as they are: CV, icons, share image, admin page |
| `.github/workflows/deploy.yml` | Builds and publishes on every push to `main` |
