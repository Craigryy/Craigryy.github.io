---
title: AcctTechs
tagline: An online store for digital accounts, with Kora payments in naira and instant delivery after payment
role: Lead Developer
year: 2026
period: Nov 2026 – Present
url: https://accttechs.com
image: cover.png
alt: AcctTechs home page, "Find the digital account you need"
stack:
  - Django
  - Wagtail
  - PostgreSQL
  - Tailwind CSS
  - Kora
  - Zoho Mail
  - ZeptoMail
  - Nginx
  - Docker Compose
  - Terraform
  - Ansible
  - Cloudflare
  - DigitalOcean
review:
  quote: You really did an excellent job. I’m so happy.
  name: Daniel
  role: Owner, AcctTechs
featured: true
order: 3
draft: false
---

AcctTechs is an online store for digital accounts and services. Customers browse by category, pay with Kora in
naira, and get what they bought straight away, on screen and by email.

I'm the lead developer. I built it end to end, from the first design mockups to the live site, the email and the
servers it runs on.

## What I built

### The frontend

The whole shop, built from the design mockups with Tailwind CSS: a home page with a sliding banner, categories
(Instagram, Facebook, X, TikTok, VPN, texting apps and more), search, product pages, a cart and checkout. Every
page works as well on a phone as on a laptop; on phones the categories sit in small pages you swipe through with
arrows. Buyers stay signed in for two weeks, so they don't have to log in every time they come back.

### The backend

Django 5 and Wagtail 7 on PostgreSQL.

- **Kora checkout in naira.** Every payment is checked with Kora from the server, and Kora's payment notices are
  signed and verified, so an order is only marked paid when the money has really arrived.
- **Instant delivery.** As soon as a payment is confirmed, the order is delivered on screen and by email.
- **Encrypted stock.** What's for sale is stored encrypted, so a copy of the database alone gives nothing away.
- **Strict payment rules:** amounts worked out on the server, order links with random IDs that can't be guessed,
  and no button to mark an order paid by hand.
- **A shop admin in Wagtail** for products, stock and orders.

### The email server

- **Inboxes on Zoho Mail:** `admin@` and `support@accttechs.com`.
- **Site emails through ZeptoMail** from `noreply@`: account verification, password resets, order delivery and
  contact-form messages. When a customer replies, it lands in `support@`.
- **SPF, DKIM and DMARC** set up on the domain, so the shop's emails reach the inbox instead of spam.

### Cloudflare security

- **The server's address stays hidden** behind Cloudflare, and the server's firewall only accepts traffic that
  comes through Cloudflare.
- **HTTPS all the way:** SSL set to Full (strict), every visitor sent to https, TLS 1.2 or newer.
- **Firewall (WAF) rules and rate limits** to slow down bots and password guessing.
- **Turnstile**, Cloudflare's bot check, on sign-up, login, password reset and the contact form.

One trade-off I made on purpose: Cloudflare's Bot Fight Mode stays off. On the free plan it can't be told to let
anything through, so it would also block Kora's payment notices and delay orders. The WAF rules give the same
protection without that risk.

### Infrastructure as code: Terraform and Ansible

Nothing on the server is set up by hand, so it can be rebuilt from scratch with a few commands.

- **Terraform** creates the DigitalOcean server, a data disk that can't be deleted by accident, the firewall,
  the Cloudflare DNS and SSL settings, and a Cloudflare R2 bucket for backups.
- **Ansible** sets up the server in six steps: updates and SSH hardening, Docker, the data disk, Nginx with a
  free SSL certificate that renews itself, the shop, and nightly backups to R2.
- **Deploys check themselves:** if a new version fails its health checks, it rolls back to the previous one
  automatically.

### The domain

I set up accttechs.com: moved its DNS from the registrar (DomainKing) to Cloudflare, pointed the domain and `www`
at the server, and added the mail records, kept "DNS only" so email isn't routed through Cloudflare's proxy.
