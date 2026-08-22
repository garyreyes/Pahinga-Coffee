# Pahinga Coffee — concept landing page

A single static landing page for a fictional Manila café, built as
portfolio work. Vite + React + TypeScript + Tailwind, no backend.

See [ARCHITECTURE.md](ARCHITECTURE.md) for structure, [ROADMAP.md](ROADMAP.md)
for build progress, and [CLAUDE.md](CLAUDE.md) for project rules.

## Running it

```bash
npm install
npm run dev          # http://localhost:5173
```

Checks (all run automatically on commit/push and in CI):

```bash
npm run lint
npm run typecheck
npm run build
```

## Contact form setup

The contact form posts to [Web3Forms](https://web3forms.com). It needs an
access key to actually deliver mail:

1. Go to <https://web3forms.com>, enter the email you want messages sent to,
   and they'll email you an access key.
2. Create `.env.local` in the project root (it's gitignored):

   ```
   VITE_WEB3FORMS_KEY=your-access-key-here
   ```

3. Restart `npm run dev`.

The key is public by design — it's safe in client-side code, and lives in an
env var only so it can be rotated without a code change.

Without a key the form still validates and still fails closed with a visible
error; it just can't deliver.
