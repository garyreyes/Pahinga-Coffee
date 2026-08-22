# PRD — Pahinga Coffee (Portfolio Spec Page)

## Scope note
This document covers **this repo only** — one spec/demo landing page
("landing page 1") that will live inside a larger portfolio site.
It is not the PRD for the portfolio site itself. Portfolio-level
decisions (pricing model shown, hosting handoff terms, the portfolio's
own CTA) are intentionally out of scope here — see HANDOFF.md.

## What this is
A fictional café landing page, built as portfolio content to demonstrate
skill to prospective small-business clients — not a real business, not a
real client engagement.

## Audience — who lands on this page
A small-business owner (café/restaurant, Manila-based) who has just been
cold-called or messaged a link, evaluating whether this developer's work
looks professional enough to trust with their own landing page.

## Primary job to be done
Prove the developer can build a landing page that:
1. Doesn't look like generic AI-template output
2. Convincingly fits a specific brand vibe
3. Actually works end-to-end (a real, functioning contact form)

## Success signal
A prospect viewing this page perceives it as bespoke and relevant to
their own business, not generic — and can successfully submit the
contact form.

## In scope
- Single-page site with sections: Hero, Menu, About/Vibe, Location, Contact
- Sticky nav that anchor-jumps to each section, smooth scroll with
  active-section highlighting (not the default instant jump)
- Full fictional menu (espresso classics, local signature lattes,
  tea/non-coffee, add-ons, pastries — see content below)
- Fictional, generic location (Katipunan Ave., Quezon City area — no
  real address, no real occupied building)
- One real, working contact form (Formspree or Web3Forms), submitting to
  the developer's own inbox for demo purposes
- Decorative (non-functional) channel badges — Messenger/IG/Grab-style —
  to signal local-market awareness without faking real links
- Fully responsive, mobile-browser-first (PH traffic skews mobile)

## Explicitly out of scope
- Multi-page site / separate routes (this is a landing page, not a site)
- Any backend, database, CMS, or auth
- Real social media accounts or functioning social links
- React Native or an installable app — this is a browser page
- Before/after framing (not applicable — fictional business, no real "before")
- Portfolio-site-level decisions (pricing shown, hosting handoff, the
  portfolio's own CTA) — belong to the portfolio shell, not this page

## Brand direction seed
- **Name:** Pahinga Coffee ("pahinga" = Tagalog for "rest")
- **Vibe:** cozy, dim, woody, lowkey — part café, part quiet study/library
  space. Appeals to students and remote workers who want to linger, not
  grab-and-go customers.
- **Explicit anti-reference:** reacted against Pickup Coffee's bright,
  commercial look and aggressively zoomed-in product photography — wants
  photography/mood that feels intimate and unhurried, not corporate.

## Menu content
- **Espresso & Coffee Classics:** Americano, Café Latte, Caramel
  Macchiato, Iced Coffee Jelly Latte
- **Local Signatures & Specialty Lattes:** Spanish Latte, Sea Salt
  Spanish Latte, Buttercreme Latte, Dirty Matcha Latte
- **Tea, Refreshers & Non-Coffee:** Iced Sea Salt Matcha, Strawberry
  Matcha Latte, Ube Cream Latte, Pink Lemonade / Berry Refresher
- **Add-Ons:** Extra Espresso Shot, Sea Salt Cold Foam, Plant-Based Milk
  (Oat/Almond), Flavored Syrups (Hazelnut, Vanilla, Caramel, Brown Sugar)
- **Pastries & Bakes:** Classic Butter Croissant, Flaky Croffle, Cheesy
  Ensaymada/Cheese Roll, Fudgy Dark Chocolate Cake, Basque Burnt Cheesecake

## Stack
- Vite + React
- Tailwind CSS
- Static hosting on Vercel (matching the existing Saffron project)
