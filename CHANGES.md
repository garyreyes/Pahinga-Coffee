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
