# Changes

## Unreleased

- Project scaffolded: Vite + React + TypeScript + Tailwind CSS v4
- Harness set up: lint/typecheck/build gates, pre-commit + pre-push
  hooks, GitHub Actions CI, Impeccable design-slop detector (local,
  warn-only)
- 1a — Design system foundation: Tailwind v4 theme tokens for the
  University Reading Room direction (oak/walnut/brass palette, Vollkorn
  display + Inter body fonts), base layout shell in `App.tsx`. Verified
  in a real browser (desktop + mobile screenshots, no console errors).
  Also fixed the design-slop detector's dependency install location
  (belongs in the Impeccable plugin directory, not this project).
- 1b — Shared chrome: sticky `Nav` with anchor links and scroll-spy
  active-highlighting (`useActiveSection`), `Footer` with decorative
  `SocialBadges` and the demo-disclosure credit line. Verified click +
  scroll + active-state behavior in a real browser; fixed a bug where
  the nav defaulted to highlighting "Menu" before any section was
  actually in view.
- 1c — Hero: name, tagline, "See the Menu" CTA, and a real sourced photo
  (Resky Fernanda, Unsplash License) framed beside the text, side-by-side
  on desktop and stacked on mobile. Also added the missing
  `src/vite-env.d.ts` (asset-import type declarations — a gap from the
  original hand-written scaffold). Verified CTA scroll + nav highlight
  update in a real browser.
- 1d — Menu: category tabs (Espresso & Coffee Classics active by
  default), all 5 categories from `lib/content.ts`, per-item photo,
  price, hot/iced variants, and a 1–5 caffeine indicator. 17 item photos
  sourced from Unsplash and individually reviewed via a contact sheet;
  3 initial picks were replaced for being wrong subjects. Add-Ons has no
  photos by design (they're modifiers, not products) and renders as a
  compact list instead. Item details are always visible rather than
  hover-only, since the primary audience is on mobile where hover
  doesn't exist. Also added a "Home" nav link (scrolls back to the hero)
  and tightened nav spacing on small screens — five links overflowed
  horizontally at 320px until the spacing was reduced.
- 1e — About / Vibe: the "Pahinga means rest" story, plus a concrete
  details list (wifi, outlets, no table-time limit, quiet hours) aimed at
  the students and remote workers the café is for. Photo on the left,
  mirroring the Hero's photo-right layout so the scroll alternates.
- 1f — Location: Google Maps embed (no API key needed), address, hours
  (8:00am–10:00pm daily), and a working "Get Directions" link opening in
  a new tab. Per an explicit owner decision, this uses De La Salle
  University's real address rather than the previously-planned generic
  one — see PROJECT_FACTS.md. The map is pinned by coordinates rather
  than address text: an address query made Google label the pin with the
  building it resolved to, and a name+address query made it run a search
  and zoom out to the whole city.
- 1g — Contact: the page's one real working mechanism. Web3Forms
  submission isolated in `features/contact/service.ts` (the only outbound
  call in the app), with all four states from `docs/user-flows.md` —
  validation (submit disabled until complete), sending (button disabled
  and relabelled, so no double-submit), success (confirmation replaces
  the form), and failure (inline error, every typed value preserved).
  Fails closed: a network error shows a real error, never a fake success.
  A honeypot field is included for spam protection. All 15 state
  assertions verified in a real browser with intercepted responses.
  **Still needs a real `VITE_WEB3FORMS_KEY` in `.env.local` before the
  live success path works** — see README/`.env.local.example`.
- 1h — Whole-page finish pass. The page read as flat and empty because
  the committed "dim reading room" direction was never actually
  rendered: every section sat on one cream field for 5 viewports, with
  walnut used only for borders and the footer.
  - **Tone system**: sections now alternate light paper / dark walnut
    (`.tone-light` / `.tone-dark` in `index.css`). Components read
    `--tone-*` variables instead of hardcoded colours, so each renders
    correctly on either field. The dark Menu section is the page's
    dominant tonal event and makes the food photography carry.
  - **Fixed a real contrast bug**: brass on the cream ground was 2.3:1,
    failing AA on every button and the active nav link. Light sections
    now use a deeper brass (4.9:1); dark sections use the brighter glow
    (6.3:1). All sampled text verified passing AA at both viewports.
  - **Material**: a low-opacity grain overlay on both grounds, since
    the direction called for aged paper and worn wood rather than flat
    colour.
  - **Dead space**: Contact moved from a 50/50 split (which left a dead
    half-width column) to a narrow centred column; Location's map now
    takes 3/5 and both columns centre vertically.
  - **Menu grid** switched from CSS grid to centring flex-wrap, so a
    category that doesn't fill its last row centres the remainder
    instead of stranding one card with a two-thirds-empty gap.
  - Browser surfaces themed from the palette (selection, focus ring,
    scrollbar) rather than left as browser defaults.
