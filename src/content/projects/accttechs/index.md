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
  - ZeptoMail
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

I'm the lead developer. I built it from the first design mockups to the live site, and I run the servers.

## What I built

- **A store by category** (Instagram, Facebook, X, TikTok, VPN, texting apps and more), with search, a cart
  and pages that work as well on a phone as on a laptop.
- **Kora checkout in naira.** Every payment is checked with Kora from the server, and Kora's notifications are
  signed and verified, so an order is only marked paid when the money has really arrived.
- **Instant delivery.** As soon as a payment is confirmed, the order is delivered on screen and by email.
- **Encrypted stock.** What's for sale is stored encrypted, so a copy of the database alone gives nothing away.
- **Two kinds of admin.** The store manager runs products, stock and orders. Only I can change staff and
  permissions.
- **Email that arrives**, sent from the store's own domain through ZeptoMail.

## How it runs

Django 5 and Wagtail 7 on PostgreSQL, styled with Tailwind CSS. Everything runs in Docker Compose, the same way
on my laptop, in the tests and on the server. The server itself is described in code (Terraform for the
DigitalOcean machine, Ansible to set it up), so it can be rebuilt from scratch instead of being fixed by hand.
The domain and DNS run through Cloudflare.

Payment code gets the strictest rules in the project: amounts are worked out on the server, order links use
random IDs that can't be guessed, and there's no button to mark an order paid by hand.
