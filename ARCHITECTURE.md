# Architecture — Pahinga Coffee spec landing page

## What this is

A single static marketing landing page for a fictional café ("Pahinga
Coffee"), built as portfolio content — see `docs/PRD.md` and
`PRODUCT.md` for product context. No backend, no database, no auth.

## Tech stack

- **Language / build:** TypeScript, Vite
- **UI framework:** React
- **Styling:** Tailwind CSS
- **Content storage:** typed TypeScript data files (`lib/content.ts`),
  not JSON — chosen for compile-time type-checking on menu/section
  content, matching the pattern already used in the Saffron project
- **Contact form:** Web3Forms — chosen over Formspree because it needs
  no account/dashboard setup, just a public access key, and submits
  directly from the browser to their API
- **Hosting:** Vercel (matches the existing Saffron project)

## Entities (content model — no database)

- `MenuCategory` — name, ordered list of `MenuItem`
- `MenuItem` — name, description, variants (e.g. Hot/Iced), belongs to
  one `MenuCategory`
- `Section` — Hero / Menu / About / Location / Contact, each with an
  anchor id, used to drive nav links and scroll-spy highlighting

Relationship: `MenuCategory 1---* MenuItem`.

No primary/foreign keys, constraints, indexes, or ORM apply — all
content is static data shipped in the JS bundle, not persisted or
queried.

## Data flow

- All page content (menu, copy, section list) is authored directly in
  `lib/content.ts` and imported by components at build time. No fetch,
  no CMS, no runtime content loading.
- The **only** outbound network call in the whole app is the contact
  form submission: browser → Web3Forms API → forwarded to the
  developer's inbox. This call lives in `features/contact/service.ts`
  and nowhere else.

## Permissions / auth

Not applicable. Public marketing page, no user accounts, no login, no
per-user data.

## Security baseline

Scoped to what actually applies for a static, backend-less site:

- The Web3Forms access key is a **public-by-design key**, not a secret
  — safe to ship in client-side code. It is still kept in an env var
  (`VITE_WEB3FORMS_KEY`, via `.env.local`, gitignored) purely so it can
  be rotated without a code change, not because it needs hiding.
- No server-side trust boundary exists to violate (no backend, nothing
  the client claims about itself is trusted for anything sensitive).
- No database, so no read/write default-lockdown question applies.

## Folder structure

```
src/
  features/
    hero/       components/Hero.tsx
    menu/       components/MenuSection.tsx, MenuCategoryTabs.tsx, MenuItemCard.tsx
    about/      components/AboutSection.tsx
    location/   components/LocationSection.tsx
    contact/    components/ContactSection.tsx, ContactForm.tsx
                service.ts   (the one outbound call — Web3Forms submit)
  shared/
    components/ Nav.tsx, Footer.tsx, SocialBadges.tsx
    hooks/      useActiveSection.ts  (IntersectionObserver-based scroll-spy)
  lib/
    content.ts  (typed menu/section copy — the content "data layer")
    types.ts    (MenuCategory, MenuItem, Section)
  App.tsx       (thin — composes sections in document order)
  main.tsx
```

**Rule of thumb for new code:** UI components render and handle
interaction only — no fetch calls, no business rules. The one place
business logic and the one outbound call live is
`features/contact/service.ts`. Routing/entry (`App.tsx`) stays thin —
it composes sections, nothing else. Content additions go in
`lib/content.ts`; new content shapes get their type added to
`lib/types.ts`.

## Deferred / open

- Visual direction (palette, typography, page-level layout composition)
  is deliberately not decided here — owned by the upcoming design-
  direction step (`/impeccable new-work`), per project workflow rules.
