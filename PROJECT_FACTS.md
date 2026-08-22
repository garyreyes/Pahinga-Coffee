# Project facts

- This repo ("landing-page-1") is one spec page inside a larger
  portfolio project, not the portfolio itself. Portfolio-level decisions
  (pricing model shown, hosting handoff terms after client delivery, the
  portfolio's own CTA) are out of scope here — see HANDOFF.md.
- Pahinga Coffee is entirely fictional — no real business, no real
  Facebook/Instagram/Messenger presence. Decorative social badges are
  intentionally non-functional, not a bug.
- Location is a deliberately generic placeholder: **Taft Avenue, Manila**
  area (near De La Salle University — the user's own alma mater; a
  personal touch, not literal DLSU affiliation). No specific real
  address/building — same rule as before, just a different neighborhood
  than the earlier Katipunan placeholder.
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
