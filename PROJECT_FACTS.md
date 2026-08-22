# Project facts

- This repo ("landing-page-1") is one spec page inside a larger
  portfolio project, not the portfolio itself. Portfolio-level decisions
  (pricing model shown, hosting handoff terms after client delivery, the
  portfolio's own CTA) are out of scope here — see HANDOFF.md.
- Pahinga Coffee is entirely fictional — no real business, no real
  Facebook/Instagram/Messenger presence. Decorative social badges are
  intentionally non-functional, not a bug.
- Location uses **De La Salle University's real address — 2401 Taft
  Avenue, Malate, Manila** — for the map embed and "Get Directions" link.
  This was a deliberate owner decision (personal nod to their alma mater)
  that **replaced** the earlier "generic area, invented street number"
  rule. The tradeoff was raised explicitly and accepted: the pin resolves
  to a real campus, which is acceptable because the footer labels the
  page as a concept design. Don't revert this to a generic address.
- Hours are a generic placeholder: open daily, 8:00am–10:00pm.
- **Sections alternate light/dark grounds** (`.tone-light` / `.tone-dark`
  in `src/index.css`). This is load-bearing, not decoration: the first
  build put every section on one cream field and read as flat and empty
  across 5 viewports, because the committed "dim reading room" direction
  was never actually rendered. Components read `--tone-*` variables, so
  don't reintroduce hardcoded colours in section components.
- **Accent colour differs by tone for contrast reasons.** Plain brass
  (`#b8863b`) on the cream ground is only 2.3:1 and fails AA — light
  sections must use `--color-brass-deep` (#7a5219, 4.9:1) and dark
  sections `--color-brass-glow` (#d9a752, 6.3:1). Don't "simplify" these
  back to one brass.
- Playwright `fullPage` screenshots do **not** composite the Google Maps
  iframe — the map shows blank in them. It renders correctly in normal
  viewport screenshots. Verify the map with a viewport capture, not a
  full-page one, before concluding it's broken.
- The Location map is pinned by **coordinates** (14.5648, 120.9932), not
  an address string. Two other approaches were tried and rejected: a
  plain address query makes Google label the pin with whatever building
  it resolves to ("Gokongwei Hall"), and a "Pahinga Coffee, <address>"
  query makes Google run a *search* and zoom out to all of Metro Manila
  with unrelated coffee-shop pins. The "Get Directions" link still uses
  the address string, which is correct there.
- Imagery: stock photography only (Unsplash/Pexels), decided over
  AI-generated images.
- Contact form: Web3Forms chosen over Formspree specifically because it
  needs no account/dashboard setup.
- Hosting: assumed Vercel, matching the existing Saffron project —
  not explicitly re-confirmed as a hard lock, flag if that changes.
- Hero has one CTA button, "See the Menu," scrolling to the Menu
  section — this is the page's single primary action per the UX floor.
- Footer carries a small demo-disclosure credit line (this is fictional,
  not a real business) — exact wording/link deferred until the
  portfolio site it should point to actually exists.
- Menu defaults to the first category ("Espresso & Coffee Classics")
  active on load.
- Location section includes a real "Get Directions" link to Google Maps
  for the generic area pin — fine since it's a real neighborhood, not a
  specific building claimed as real.

## Visual direction (locked via /impeccable new-work)

Chosen: **University Reading Room.** A university library's old reading
room — worn wood tables, brass banker's lamps, hushed academic quiet,
aged paper tones. Chosen over an alternate "Quiet Retreat House"
direction (darker/more devotional register) and over re-rolling.

- Palette: oak/walnut wood tones as the ground; brass lamp-light amber
  as the one accent color, **reserved for active/focused elements only**
  (active nav item, selected menu tab, focused form field) — not
  scattered decoratively. This discipline was explicitly raised during
  the direction round and carries forward regardless of which candidate
  was picked.
- Explicitly ruled out: **green, and anything bright/high-saturation** —
  user-stated constraint, came up when clarifying the DLSU personal tie
  wasn't meant to import DLSU's actual green/white branding.
- Material/texture cues: worn wood grain, aged paper, card-catalog /
  library-slip texture.
- Type character: academic, restrained serif register — not the
  cream+italic-serif AI-default look.
- Component translation: menu category tabs read like catalog card
  dividers; the contact form has a library-slip/call-card feel.
- Personal tie: inspired by the user's own university (De La Salle,
  Taft) in *feeling*, not branding — no DLSU shield/wordmark, no implied
  affiliation.
- Build path: **code-led** (no image generation available this
  session) — no comp/mockup round; the ambition lives in the direction
  contract written into the code, and the finish review audits behavior
  against it.
- `DESIGN.md` does not exist yet by design — Impeccable writes it at
  finish, from the actually-built result, not from this pre-build
  intent. This section is the interim record until then.
- Hero photo (`src/assets/hero-cafe.jpg`): "Bookshelves and decorations
  in a cozy, wooden interior" by Resky Fernanda (@reskyfrnd), sourced
  from Unsplash (unsplash.com/photos/BZnJ20sEeao), Unsplash License
  (free for commercial use, no attribution required — credited in
  `Hero.tsx` as a code comment anyway, as good practice). Chosen over
  three other candidates for combining "café" clarity (visible espresso
  machine) with the dark-wood/terracotta palette and book-lined "reading
  room" feel, without reading as bright/trendy like the rejected
  candidates.
- Menu item photos (`src/assets/menu/`): all sourced from Unsplash
  (Unsplash License, free for commercial use). Starbucks-branded photos
  were deliberately rejected during sourcing — real brand imagery inside
  a fictional café's menu would be wrong. Unsplash+ (`plus.unsplash.com`)
  results were also avoided, as those require a paid subscription.
- Menu item details (price, description, variants, caffeine level) are
  **always visible, never hover-only** — the Pickup Coffee reference used
  hover, but hover doesn't exist on touchscreens and this page's primary
  audience is on mobile.
- Menu prices and caffeine levels (1–5) are authored demonstration data
  for a fictional business — plausible Manila specialty-café pricing
  (₱110–₱190), not real quoted prices.
- "Add-Ons & Customizations" intentionally has no photos and renders as a
  compact list — they're modifiers, not products.
