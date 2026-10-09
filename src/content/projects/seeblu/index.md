---
title: SeeBlu
tagline: A TikTok-style app for meeting people in Nigeria through short videos, photos and one tap to connect
role: lead developer
year: 2026
url: https://seeblu.onrender.com
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
  - Docker
  - Render
  - Terraform
  - Ansible
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

Django 5 and Wagtail 7 on PostgreSQL. Uploads and voice notes are checked by file signature before they are
stored. It runs on Render today. For production, the repo includes a DigitalOcean setup: Terraform creates the
servers, Ansible configures them and GitHub Actions deploys on every merge.
