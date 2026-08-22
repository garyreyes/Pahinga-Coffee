# Project rules — Pahinga Coffee spec landing page

## What this project is

A single static portfolio spec page (fictional café "Pahinga Coffee"),
one piece of a larger portfolio being built to sell landing pages to
Manila small businesses. See `docs/PRD.md`, `PRODUCT.md`, and
`ARCHITECTURE.md` for full context — read those before making changes.

## Where the docs live

- `docs/PRD.md` — product scope, audience, success criteria
- `PRODUCT.md` — Impeccable's product context (users, positioning, brand)
- `ARCHITECTURE.md` — stack, entities, folder structure, security scope
- `CHANGES.md` — dated log of what shipped
- `PROJECT_FACTS.md` — durable project-specific decisions

## Locked decisions — do not reopen without asking

- Static only. No backend, database, CMS, or auth — ever, for this repo.
- One landing page, single-page anchor-nav + scroll — not a multi-page site.
- No React Native / installable app. Responsive web only.
- Pahinga Coffee is fictional. Never imply it's a real business, never
  use a real occupied address, never fabricate real testimonials/reviews.
- Imagery is stock photography only (Unsplash/Pexels licensed) — no
  scraped/unlicensed images, no claiming AI-generated images are real photos.
- Social/channel badges (Messenger, IG, Grab-style) are decorative only,
  never styled or wired as functional links, since no real accounts exist.
- The contact form (Web3Forms) is the one real, functional piece —
  don't fake other functionality to look real.

## Layer boundaries (from ARCHITECTURE.md) — enforce, don't relitigate

- UI components render and handle interaction only. No fetch calls, no
  business logic.
- The one outbound call in this app (Web3Forms submission) lives in
  `features/contact/service.ts` — nowhere else.
- `App.tsx` stays thin: composes sections in order, no logic of substance.
- New content goes in `lib/content.ts`; new content shapes get their
  type added to `lib/types.ts`.

## Security hard-halts (apply regardless of whether this repo ever needs them)

1. Never hand-roll authentication, sessions, or cryptography. This
   project has none of these and should not gain them without a real
   reason and an explicit conversation first.
2. Never hand-build raw payment or OAuth requests — use an official SDK
   if either is ever needed.
3. Any third-party auth/payment SDK gets exactly one wrapper module in
   `lib/` — features never import the SDK directly.

## What needs explicit confirmation before proceeding

- Adding any backend, database, CMS, or auth (violates the static-only
  lock above — flag it instead of silently doing it)
- Changing the contact form provider or exposing a different kind of key
- Any git push, merge, or branch-protection change
- Committing generated content (stock photos, etc.) — confirm licensing
  is fine for each asset before it goes in the repo

## Gates in place

- Pre-commit hook (`.husky/pre-commit`): lint + typecheck
- Pre-push hook (`.husky/pre-push`): build, plus the Impeccable
  design-slop detector (warn-only for now) run against `src/`
- CI (`.github/workflows/ci.yml`): lint, typecheck, build on every PR to
  `main`
- **Caveat:** the design-slop detector only runs locally (pre-push) — it
  depends on the Impeccable plugin installed in this machine's Claude
  Code plugin cache, which isn't available on the GitHub Actions runner.
  A clean local pre-push run is the only signal for that check; CI does
  not re-verify it.
