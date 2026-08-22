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
