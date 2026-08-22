# Roadmap — Pahinga Coffee spec landing page

One phase, sequenced from `docs/user-flows.md`'s section order and the
folder structure in `ARCHITECTURE.md`. Visual direction (University
Reading Room — see `PROJECT_FACTS.md`) is locked, so design tokens land
first and nothing later inherits a placeholder look.

Status values: `not started` / `in progress` / `done`. This file and
`CHANGES.md` track the same progress from two angles — keep them in
sync as sub-phases complete.

## Phase 1 — Pahinga Coffee Landing Page

- [x] **1a. Design system foundation** — done
      Tailwind theme tokens for the University Reading Room direction:
      oak/walnut palette, brass-amber accent reserved for active states
      only, aged-paper texture, restrained academic serif type
      character. Base layout shell. Everything after this inherits these
      tokens — nothing built before this step.

- [ ] **1b. Shared chrome** — not started
      Sticky `Nav` (anchor links to each section + scroll-spy active-item
      highlighting via `useActiveSection`) and `Footer` (decorative,
      non-functional social/channel badges + the demo-disclosure credit
      line).

- [ ] **1c. Hero** — not started
      Pahinga Coffee name/logo, one-line vibe tagline, "See the Menu"
      CTA button scrolling to the Menu section.

- [ ] **1d. Menu** — not started
      Category tabs (Espresso & Coffee Classics active by default), all
      five categories' items from `docs/PRD.md`, tabs styled as
      catalog-card dividers per the chosen direction.

- [ ] **1e. About / Vibe** — not started
      The cozy/dim/woody/library-vibe story content.

- [ ] **1f. Location** — not started
      Google Maps iframe embed (generic Taft Avenue, Manila pin, near De
      La Salle University), address text, hours, real "Get Directions"
      link opening Google Maps in a new tab.

- [ ] **1g. Contact** — not started
      The form (name, email/phone, message — all required), Web3Forms
      submission wired in `features/contact/service.ts`, and all four
      states from `docs/user-flows.md`: inline validation errors,
      disabled "Sending..." while in flight, inline success confirmation
      replacing the form, inline failure message with typed values
      preserved.

- [ ] **1h. Whole-page finish pass** — not started
      `/impeccable critique` + `/impeccable polish` across the completed
      page (judged together for visual consistency, not section by
      section). Responsive check across mobile and desktop. Impeccable
      finish review (screenshot-based, code-led — no comp exists to
      compare against). This is also the project's closing full-app
      polish pass, not a per-section one.

## Design checkpoints

- **Per sub-phase (1a–1g):** a lightweight `/impeccable audit`
  immediately after each lands — accessibility, responsiveness, broken
  states. Cheap, catches concrete problems immediately.
- **End of phase (1h):** the heavier critique + polish pass, once every
  sub-phase is done — sections judged together, not in isolation.

## Handoff

The first sub-phase (**1a**) is the next `feature-planner` invocation.
As each sub-phase completes, mark it done here and log it in
`CHANGES.md` — the two files should never drift out of sync.
