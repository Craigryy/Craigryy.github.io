---
title: SeeBlu
tagline: A TikTok-style app for meeting people in Nigeria through short videos, photos and one tap to connect
role: lead developer
year: 2026
url: https://seeblu.pages.dev
image: cover.png
alt: SeeBlu's About page, "Meet people. Connect for real."
stack:
  - Django
  - Wagtail
  - PostgreSQL
  - JavaScript (PWA)
  - Web Push
  - ffmpeg
  - Cloudflare Turnstile
  - Paystack
  - Docker
  - Nginx
  - Cloudflare Pages
  - DigitalOcean
featured: true
order: 1
draft: false
---

SeeBlu is a meet-and-connect platform. People choose what they're there for (friendship, a relationship,
networking or something casual), scroll short videos and photos from people looking for the same thing, and tap
**Connect** when they want to talk.

I founded it and built it end to end, from the product and the design to the servers.

## What I built

- **A short-video and photo feed** with For you, Following and Nearby tabs. Nearby uses the city only, never an
  exact location.
- **Profiles** with modes, interests and identity verification.
- **Chat that feels live:** an online dot, "last seen", and voice notes up to 90 seconds, converted to AAC with
  ffmpeg so they play on every phone.
- **An installable app (PWA)** with push notifications on Android and iPhone.
- **Connection Packs:** one-time payments instead of a subscription.
- **A staff studio** in Wagtail for moderation, reports and site content.
- **Bot protection** with Cloudflare Turnstile and rate-limited logins.

## How it runs

SeeBlu is two parts: a static site on Cloudflare Pages that people open, and a Django API on a server I already
had. The API is Django 5 and Wagtail 7 on PostgreSQL, and uploads and voice notes are checked by file signature
before they are stored.

### Why I split it

It came down to cost. I didn't want to pay for a new server and a new database for an app that's still in
testing. Kinomos already runs on a DigitalOcean droplet with a managed PostgreSQL cluster, so I looked into reusing
that backend. SeeBlu's API now runs in its own container on the same droplet, with its own database inside the
existing cluster. No new server and no new database to pay for.

That left the pages. Both GitHub Pages and Cloudflare Pages host a static site for free, so I compared the two and
went with Cloudflare:

- **HTTPS that looks after itself.** Cloudflare issues the SSL certificate and renews it on its own, so the site
  can't go down because a certificate expired. I wanted the same on the API side, so a daily job renews
  its certificate and only reloads the server when something actually changed.
- **Security headers.** Cloudflare lets me set my own, including a strict Content-Security-Policy. GitHub Pages
  doesn't let you set headers.
- **Private code.** The SeeBlu repo is private, and GitHub Pages only publishes private repos on a paid plan.
- **Redirect rules** that send paths like `/media/` straight to the API.
- **Turnstile**, the bot check on sign-up and login, is Cloudflare's too.
- **Smaller things:** no bandwidth cap on the free plan (GitHub Pages has a soft limit of 100 GB a month), and
  pages are served from Cloudflare's network close to the visitor.

### Rebuilding every page

My first try was a hand-written login page, and it didn't look like the real one. So I changed approach: a build
command renders every static page from the same Django templates the server uses, so the static site and the app
show exactly the same thing. Pages that change per person load live through the API.

I kept security in view the whole way:

- The session travels in a request header, not a cookie, so another website can't make requests as a signed-in
  member.
- No inline scripts, so the Content-Security-Policy can block anything injected.
- Bots meet Turnstile on sign-up and login, plus rate limits per network and per account.
- Photos that aren't public yet load through short-lived signed links.

One thing caught me out: Cloudflare kept serving an old copy of a page I had removed, from its cache. Now every
address has a real file behind it.

If you already have a backend, put the next app's pages on a static host and point them at it. It added nothing
to my hosting bill.
