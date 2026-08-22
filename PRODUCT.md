# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React, Tailwind CSS. Static hosting on Vercel.

## Users

Primary user: a small-business owner (café/restaurant, Manila-based) who
has just been cold-called or sent a link, evaluating whether this
developer's landing-page work is professional enough to trust with
their own business's page. They are not a customer of Pahinga Coffee —
Pahinga Coffee is fictional; the real audience is the prospect
assessing craft, not a café patron.

## Product Purpose

A single spec/demo landing page for a fictional café ("Pahinga
Coffee"), built as portfolio content for a developer who sells landing
pages to small Manila businesses. It exists to prove three things to a
prospect: the work isn't generic AI-template output, it convincingly
fits a specific brand vibe, and it actually functions end-to-end (a
real, submittable contact form). Success means a prospect perceives it
as bespoke and relevant to their own business, and the form works when
tried live.

## Positioning

Deliberately reacts against two failure modes already identified in
competitor sites: (1) generic "every AI landing page" tropes, and (2)
the bright, commercial, aggressively-zoomed-in product-photo style of
chains like Pickup Coffee. The position is a landing page that feels
intimate and unhurried and specific to one imagined business — not a
template with a logo swapped in.

## Operating Context

Viewed primarily on a mobile browser (Philippine traffic skews mobile),
often moments after a cold call or a messaged link — not discovered
organically. One page, anchor-nav navigation with smooth scroll between
sections (Hero, Menu, About/Vibe, Location, Contact). This repo covers
only this one spec page; it is one piece of a larger portfolio site
being planned separately (see docs/PRD.md's scope note).

## Capabilities and Constraints

- Static only: no backend, database, CMS, or auth (locked project-wide constraint)
- No React Native / installable app — this is a browser page;
  responsiveness is handled via ordinary responsive web design
- One real, working contact form (Formspree or Web3Forms), submitting
  to the developer's own inbox for demo purposes
- Other channels (Messenger, Instagram, Grab-style) are shown only as
  decorative, non-functional badges — no real accounts exist for this
  fictional business, and faking working links was explicitly rejected
  as looking "broken" if inert, so they stay clearly decorative rather
  than styled as clickable buttons
- Location is fictional and generic (Taft Avenue, Manila area, near
  De La Salle University) — must not resolve to a real occupied address
- No before/after comparison — not applicable, this is not a real
  business's existing site being replaced

## Brand Commitments

- Name: **Pahinga Coffee** ("pahinga" is Tagalog for "rest")
- Binding vibe constraint (user-stated; new-work owns the full visual
  direction, not expanded here): cozy, dim, woody, lowkey — part café,
  part quiet study/library space, appealing to students and remote
  workers who linger rather than grab-and-go customers

## Evidence on Hand

- Full fictional menu content exists (see docs/PRD.md): espresso
  classics, local signature lattes (Spanish Latte, Sea Salt Spanish
  Latte, Buttercreme Latte, Dirty Matcha Latte), tea/non-coffee,
  add-ons, pastries
- No real photos, logo, or brand assets exist yet. Imagery source is
  decided: **stock photography only** (Unsplash/Pexels) — future work
  must source real stock photos, not fabricate or imply photography
  that doesn't exist
- No real testimonials, reviews, or press exist — none should be invented

## Product Principles

1. Specificity beats genericness — every content and design choice
   should feel true to one imagined café, not swappable with any other
   coffee-shop template
2. One real working mechanism (the contact form) matters more than
   several fake ones — don't fake functionality that doesn't exist
3. Static-site constraints are permanent for this project, not a
   placeholder for a future backend
4. This page is a persuasion surface aimed at the developer's prospect,
   not at a real café's customer — every decision should be evaluated
   against "does this prove craft to a business owner," not "does this
   serve a real diner"
5. Mobile-first: the primary viewing context is a phone browser moments
   after a cold outreach, not a desktop researcher browsing at leisure
