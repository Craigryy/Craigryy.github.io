---
title: Kinomos
tagline: A business discovery and directory platform
role: Creator
year: 2026
url: https://kinomos.com
image: cover.png
alt: Kinomos home page on a laptop and on a phone, "What are you looking for?"
gallery:
  - image: desktop.png
    caption: Home page on desktop
  - image: mobile.png
    caption: The same page on a phone, with the app-style bottom bar
stack:
  - Django
  - Wagtail
  - PostgreSQL
  - Celery
  - Docker Compose
  - Nginx
  - Paystack
  - DigitalOcean
featured: true
order: 2
---

Kinomos helps people discover businesses and the community around them. I created it and built it end to end, from the
page design to the server it runs on.

## What I built

- **Business listings and directory pages** modelled in Wagtail, so content can be edited without touching code.
- **A Django backend** for accounts and payments with Paystack.
- **Background jobs** with Celery, so email and slow tasks don't make visitors wait.

## How it runs

Docker Compose on a DigitalOcean droplet: the web app, PostgreSQL, Celery workers and Nginx in front.
