---
name: run-pahinga-coffee-landing
description: Build, run, and screenshot the Pahinga Coffee landing page (Vite + React + Tailwind). Use when asked to start the dev server, screenshot the page, check it renders, or verify a UI change on desktop and mobile.
---

This is a static Vite + React + TypeScript site with no backend. Drive
it by starting the Vite dev server, then running the Playwright driver
at `.claude/skills/run-pahinga-coffee-landing/driver.mjs`, which
screenshots the page at desktop and mobile viewports and reports any
browser console errors.

All paths below are relative to the repo root.

## Prerequisites

Verified on Windows (Git Bash) with Node v24 / npm 11 — no OS packages
needed (no Electron, no native GUI toolkit; this is a plain web page).

The driver has its own `package.json` inside the skill directory so its
Playwright dependency never touches the app's own `package.json`.
Chromium's browser binary is cached by Playwright in a shared, per-user
location (not per-project), so this install is a one-time cost per
machine:

```bash
cd .claude/skills/run-pahinga-coffee-landing
npm install
npx playwright install chromium
```

## Setup

App dependencies (separate from the driver's):

```bash
npm install
```

No env vars are required to view the page. `VITE_WEB3FORMS_KEY` is only
needed once the Contact section (sub-phase 1g) is wired up — see
`.env.local.example` at the repo root.

## Build

No build step is needed to run the driver — it targets the dev server,
not the production build. If you need to verify the production build
specifically:

```bash
npm run build && npm run preview   # serves dist/ on a different port
```

## Run (agent path)

Start the dev server in the background, wait for it to actually serve,
then run the driver:

```bash
npm run dev &
timeout 30 bash -c 'until curl -sf http://localhost:5173 >/dev/null; do sleep 1; done'

node .claude/skills/run-pahinga-coffee-landing/driver.mjs
```

Screenshots land in `.claude/skills/run-pahinga-coffee-landing/screenshots/`
(`desktop.png` at 1280x800, `mobile.png` at 390x844, both full-page).
The driver prints any browser console errors and exits non-zero if
there were any — treat a non-zero exit the same as a failed check, not
just the screenshots.

Stop the server when done (port 5173 on Windows; adjust for your OS):

```bash
# Windows (PowerShell):
Get-NetTCPConnection -LocalPort 5173 -State Listen | Select-Object -ExpandProperty OwningProcess | ForEach-Object { Stop-Process -Id $_ -Force }
# Linux/macOS:
lsof -ti:5173 -sTCP:LISTEN | xargs -r kill
```

Optional flags:

| flag | what it does |
|---|---|
| `--url <url>` | point at a different URL (default `http://localhost:5173`) |
| `--out <dir>` | write screenshots elsewhere (default `screenshots/` next to the driver) |

## Run (human path)

```bash
npm run dev   # → opens on http://localhost:5173, Ctrl-C to stop
```

## Test

```bash
npm run lint
npm run typecheck
npm run build
```

All three currently pass clean. There is no unit test suite — this
project has no correctness-critical logic (no auth, no money, no data
merging), so per this repo's `CLAUDE.md` there's nothing that needs
test-first treatment; visual/content changes go through the reviewer +
Impeccable path instead.

---

## Gotchas

- **`chromium-cli` isn't available in this environment** — this driver
  uses Playwright directly instead. If a future session has
  `chromium-cli`, that's the preferred path per the `run` skill; this
  driver is the fallback that was actually verified here.
- **Don't add Playwright to the app's own `package.json`.** It was
  installed there once by mistake this session and had to be removed —
  this is a static marketing site with no test/interaction tooling of
  its own; the driver's dependency stays scoped to this skill
  directory's own `package.json`.
- **The Impeccable design-slop detector's parser dependencies
  (`htmlparser2`, `css-select`, `css-tree`, `domutils`) do not belong
  in this project either** — they were also installed here by mistake
  once and removed. They install into the Impeccable plugin's own
  directory instead (see `CLAUDE.md`), because Node resolves them from
  the detector script's location, not this repo's.

## Troubleshooting

- **`curl: (7) Failed to connect`** while waiting for the dev server:
  Vite wasn't done starting yet — the polling loop handles this, just
  don't shorten the timeout below ~15s on a cold start.
- **Driver reports console errors on first run only**: usually a
  `net::ERR_ABORTED` from Vite's dev-server HMR websocket during the
  very first page load — re-run once; if it persists on a second run,
  it's real.
