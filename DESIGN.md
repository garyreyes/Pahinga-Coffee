---
name: Pahinga Coffee
description: A dim reading-room landing page — worn walnut, aged paper, and one lamp of brass.
colors:
  paper: "#e4d9c0"
  paper-card: "#efe6d2"
  paper-muted: "#c4b192"
  ink: "#2b2018"
  ink-muted: "#5b4a3a"
  walnut: "#3b2a1e"
  walnut-deep: "#2a1d13"
  walnut-light: "#5c4430"
  brass: "#b8863b"
  brass-deep: "#7a5219"
  brass-glow: "#d9a752"
typography:
  display:
    fontFamily: "Vollkorn, Georgia, serif"
    fontSize: "clamp(3rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Vollkorn, Georgia, serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Vollkorn, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "normal"
  subtitle:
    fontFamily: "Vollkorn, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body-lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.025em"
  micro:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.025em"
rounded:
  none: "0px"
  pill: "9999px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section-y: "96px"
  section-y-md: "128px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.brass-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.walnut}"
    textColor: "{colors.paper}"
  tab-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
  tab-active:
    backgroundColor: "{colors.walnut}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
  input-field:
    backgroundColor: "{colors.paper-card}"
    textColor: "{colors.walnut}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
    width: "100%"
  media-frame:
    backgroundColor: "{colors.walnut}"
    rounded: "{rounded.none}"
    padding: "4px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  nav-link-active:
    textColor: "{colors.brass-deep}"
  badge-decorative:
    backgroundColor: "transparent"
    textColor: "{colors.paper-muted}"
    typography: "{typography.micro}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
---

# Design System: Pahinga Coffee

## Overview

**Creative North Star: "The University Reading Room"**

The world is an old university library's reading room after the afternoon has gone quiet: worn walnut tables, aged paper, a single brass banker's lamp, and no urgency anywhere. The page is built to feel like a room you sit down in rather than a storefront that sells at you. Density is generous and unhurried — sections breathe at 96–128px of vertical air, copy stays in short measured columns, and nothing blinks, badges, or shouts.

The most load-bearing decision in the built system is that the page has two grounds, not one. Sections alternate a light paper field and a dark walnut field, and every component inside `main` reads `--tone-*` variables instead of naming a colour. One card, one button, one rule line renders correctly on either field. This exists because the first build put everything on a single cream ground and read as flat and empty across every viewport — the alternation is structure, not decoration, and it is what makes the "dim room" actually dim.

The aesthetic is fixed. It does not respond to `prefers-color-scheme`; a reading room is the temperature it is. Two clusters are explicitly rejected: the generic AI-landing-page look (cream ground, italic display serif, terracotta accent) and the bright, high-saturation, aggressively-zoomed product-photo style of commercial chain cafés. Green and any high-saturation hue are out of the palette entirely.

**Key Characteristics:**
- Two alternating grounds — paper light, walnut dark — driven by a tone-variable layer
- One accent (brass), reserved for active and focused states only
- Serif display (Vollkorn, regular weight, tight tracking) over sans body (Inter)
- Square corners everywhere except pill buttons and status dots
- A visible grain overlay on every ground, so colour fields read as material
- Flat by default; the only shadow in the system sits under framed photography

## Colors

An interior palette pulled from wood, paper, and lamplight — low saturation throughout, with a single warm metal as the only bright note.

### Primary
- **Lamp Brass** (`brass`): The one accent, and the only saturated colour in the system. It appears on the active nav link, the caffeine meter's filled dots, focused form-field borders, the browser selection highlight, and the focus ring. Never used as a fill for large areas and never used decoratively.
- **Deep Brass** (`brass-deep`): The accent as rendered on light paper grounds. Reaches 4.9:1 on `paper`.
- **Brass Glow** (`brass-glow`): The accent as rendered on dark walnut grounds. Reaches 6.3:1 on `walnut`.

### Neutral
- **Aged Paper** (`paper`): The light ground. Body background, dark-tone heading colour, and the hover fill for buttons on dark grounds.
- **Library Slip** (`paper-card`): A half-step lighter than the ground; the fill for form fields on light sections, which is the only place a "raised" surface exists.
- **Faded Paper** (`paper-muted`): Body copy on dark grounds, and the footer's text colour.
- **Ink** (`ink`): The darkest text value; the document default and the nav's hover state.
- **Muted Ink** (`ink-muted`): Body copy on light grounds and the resting nav link.
- **Walnut** (`walnut`): The dark ground, the light-ground heading colour, and the colour of every photo frame on light sections.
- **Deep Walnut** (`walnut-deep`): The footer ground and the frame colour on dark sections — the darkest surface on the page.
- **Walnut Light** (`walnut-light`): Hairline borders under the nav and above the footer, and the scrollbar thumb.

### Named Rules

**The Two Grounds Rule.** Sections alternate `tone-light` and `tone-dark` down the page — never two of the same tone in sequence. Components inside `main` read `--tone-bg`, `--tone-heading`, `--tone-body`, `--tone-accent`, `--tone-rule`, `--tone-frame`, `--tone-field-bg`, `--tone-field-border`, `--tone-hover-bg`, `--tone-hover-fg`. A hardcoded colour inside a section component is a bug.

**The Contrast-Bound Accent Rule.** The accent is tone-dependent for legibility, not for effect. Plain `brass` on the paper ground measures 2.3:1 and fails AA; light sections therefore use `brass-deep` and dark sections `brass-glow`. Do not collapse these back into one brass value. Plain `brass` is permitted only on the browser surfaces where it sits against `walnut-deep` (selection) or acts as a ring rather than text (focus outline).

**The One Lamp Rule.** Brass marks state — active, selected, focused, filled — and nothing else. If an element is neither active nor focused, it is wood, paper, or ink. No green; no high-saturation hue of any kind enters the palette.

**The Fixed Room Rule.** The aesthetic does not adapt to system light/dark preference. There is no `prefers-color-scheme` branch and none should be added; the tone system already carries both temperatures deliberately.

## Typography

**Display Font:** Vollkorn (with Georgia, serif)
**Body Font:** Inter (with system-ui, sans-serif)

**Character:** An academic pairing, not a fashion one. Vollkorn is set at regular weight (400) with slightly negative tracking (-0.02em) so headings read as printed book pages rather than as poster type — no italic display, no hairline light weights, no dramatic thin/thick contrast. Inter carries everything functional at 400, stepping to 500 only for the two interactive roles (nav links, buttons).

### Hierarchy
- **Display** (Vollkorn 400, 3rem → 4.5rem at `md`, line-height 1.05, -0.02em): The café name in the hero. Appears exactly once per page.
- **Headline** (Vollkorn 400, 2.25rem → 3rem at `md`, -0.02em): Section titles ("The Menu", "Find Us", "Say Hello", "Pahinga means rest"). Centred on full-width sections, left-aligned when paired with a photo column.
- **Title** (Vollkorn 400, 1.5rem, line-height 1.375): The address block and the form's sent-confirmation line — short, standalone statements that need weight without becoming a section heading.
- **Subtitle** (Vollkorn 400, 1.125rem): Menu item names, so a product name reads as a heading in miniature rather than as bold body text.
- **Body Lead** (Inter 400, 1.125rem): The hero's single supporting line, capped at ~24rem measure.
- **Body** (Inter 400, 1rem, line-height 1.5): Section prose, capped at ~28rem measure in the contact intro and by the half-column width elsewhere.
- **Label** (Inter 400–500, 0.875rem, 0.025em tracking where used): Form labels, definition-list terms, prices, descriptions, buttons, nav links. The workhorse size.
- **Micro** (Inter 400, 0.75rem, 0.025em tracking): Variant lists, the caffeine reading, decorative footer badges.

### Named Rules

**The Serif-For-Nouns Rule.** Vollkorn is for names of things — the café, the sections, the drinks, the address. Everything a reader scans or acts on (labels, prices, descriptions, buttons, nav) is Inter. Never set body prose in the display face.

**The Regular-Weight Rule.** Display type earns emphasis from size and tracking, never from weight. Vollkorn is used at 400 throughout; bold and italic display settings are loaded by the font link but unused, and should stay that way.

**The No Shouting Rule.** There is no uppercase type anywhere in the system, and no tracked-out eyebrow or kicker above any heading. Sections open directly on their headline. Letter-spacing above zero appears only at 0.025em on labels and micro text, to keep small sans readable — never as a decorative device.

## Layout

A single centred column model. Content sits in a `max-w-5xl` (64rem) container with 24px side gutters at every breakpoint; the contact section deliberately narrows to `max-w-xl` (36rem) because its copy is short and a wider column left dead space beside it.

Vertical rhythm is the strongest spacing signal: every section pads 96px top and bottom, rising to 128px at `md`. Inside a section the ladder is consistent — 24px from headline to its supporting line, 40px from headline to a control row, 56px from a control row to content, 32–40px before a terminal call to action. Definition rows (hours, amenities) sit at 14px of vertical padding between hairlines.

There is one breakpoint that matters, `md` (768px): below it every section is a single stacked column with the image above the text and headings centred; at and above it, paired sections become two columns (`flex-row`) with 64px of gutter. The menu grid is the exception, stepping at `sm` (640px) to two columns and `lg` (1024px) to three, and only when the active category has photography — photoless categories cap at two columns inside a 42rem measure. The grid is built with wrapped flex rather than CSS grid so a partial last row centres its remainder instead of stranding items against the left edge.

Navigation is sticky at the top of the viewport on all sizes; it never becomes a hamburger, because five short labels fit a phone at a reduced 12px gutter and 12px gap.

## Elevation & Depth

This is a flat system with one deliberate exception. Depth comes from tonal alternation and from material texture, not from stacked shadows: sections separate by changing ground colour, and every ground carries a fractal-noise grain overlay (5.5% opacity multiplied on light, 7% overlaid on dark) so a colour field reads as paper or wood rather than as empty fill. The grain is non-interactive and sits behind all content.

The exception is framed media. Photographs and the map sit in thick solid frames with a single soft downward shadow, so they read as objects resting on the table rather than as windows cut into it. Cards, form fields, tabs, and buttons carry no shadow in any state.

### Shadow Vocabulary
- **Framed Media** (`box-shadow: 0 18px 40px -24px rgb(43 29 19 / 0.7)`): The only shadow in the system. Sits under photo and map frames. On dark grounds the same geometry is tinted to near-black (`rgb(0 0 0 / 0.8)`) so it still reads against walnut.

### Named Rules

**The Flat-Except-Frames Rule.** Nothing is elevated except framed media. Interactive elements respond by changing colour, never by lifting, glowing, or gaining a shadow. There are no hard offset shadows anywhere in this world and none should be introduced.

**The Grain Rule.** Every ground carries the grain overlay via `tone-light` / `tone-dark`. A new full-bleed surface joins the tone system rather than setting its own background colour, or it will read as a flat patch against a textured page.

## Shapes

Square by default. Photo frames, the map frame, menu cards, category tabs, form fields, and the success panel all have zero radius — the reading-room world is made of rectangles: table edges, card-catalog slips, book pages. Two exceptions are permanent: buttons and decorative badges are full pills (9999px), and the caffeine meter's five state dots are circles (6px).

Borders are the primary grouping device, and they come in three weights. Hairlines at 1px (`--tone-rule`, 20% ink or paper) separate definition rows and mark inactive tabs. A 1px `--tone-field-border` (30%) draws form fields and pill buttons. Frames are heavy: 8px solid `--tone-frame` around hero, about, and map media, and 4px around menu item photography — thick enough to read as a mount, not a stroke. Frames add 4px of interior padding so the border and image do not touch.

Aspect ratios are fixed per role: 4:5 portrait for the hero and about photography, 1:1 for menu items, 4:3 for the map.

## Components

### Buttons
- **Shape:** Full pill (9999px), 12px vertical and 28px horizontal padding.
- **Primary:** The only button style in the system — an outlined pill, transparent fill, 1px `--tone-field-border` stroke, accent-coloured label at Inter 500 / 0.875rem. Used for "See the Menu", "Get Directions", and "Send Message".
- **Hover / Focus:** Fills with `--tone-hover-bg` and flips the label to `--tone-hover-fg` — a full inversion, transitioned on colour only (~150ms). No lift, no shadow, no scale. Focus draws the global 2px brass ring at 2px offset.
- **Disabled:** 40% opacity with the hover inversion suppressed, so an incomplete form's submit stays visibly inert.
- There is no second button variant. A secondary action is a link or nothing.

### Chips (menu category tabs)
- **Style:** Square (0 radius), 8px/16px padding, 0.875rem label.
- **Inactive:** Transparent, hairline `--tone-rule` border, `--tone-body` text; on hover the border strengthens to `--tone-field-border` and the text rises to `--tone-heading`.
- **Selected:** Fully inverted — filled with `--tone-heading`, labelled in `--tone-bg`. The strongest contrast on the page after the display type, which is what makes the active category unmissable. Note the tabs deliberately do *not* use brass; brass marks the caffeine meter and nav within the same viewport, and a second brass fill would break the One Lamp Rule.
- The first category is selected on load; there is no unselected state for the tab set.

### Cards / Containers
- **Corner Style:** Square (0 radius).
- **Background:** None. Menu items are borderless and sit directly on the section ground — the photo frame is the only enclosure.
- **Shadow Strategy:** Only the media frame carries the Framed Media shadow; the text block below it carries none.
- **Border:** 4px solid `--tone-frame` around the photo only.
- **Internal Padding:** None on the card; 16px from photo to name, 6px name to description, 10px description to the metadata row.
- Photography scales to 105% over 700ms with an ease-out curve on card hover, clipped by the frame — the one piece of non-instant motion in the system, and it is slow enough to read as settling rather than as an effect.

### Inputs / Fields
- **Style:** Square, full width, 1px `--tone-field-border` stroke over a `--tone-field-bg` fill (paper-card on light grounds, a 6% paper wash on dark). 10px/12px padding, 0.875rem text in `--tone-heading`. Labels sit above at 0.875rem with 0.025em tracking and 6px of separation.
- **Focus:** Border shifts to `--tone-accent` with the default outline suppressed on the field itself; the global brass focus ring still governs keyboard traversal elsewhere.
- **Error:** No red. A failure message appears below the fields as a line of `--tone-heading` text with a single left rule in `--tone-accent` and 12px of indent — the system has no error colour, and adding one would break the palette.
- **Disabled (sending):** Fields lock without visual restyling; the submit button carries the state.
- **Success:** The form is replaced in place by a bordered `--tone-field-bg` panel with a Vollkorn 1.5rem confirmation line — the same square-bordered field language, scaled up.

### Navigation
- **Style:** Sticky, full-width, `paper` at 95% opacity with a small backdrop blur, closed by a 1px `walnut-light` hairline. Links are centred in a 48rem row, Inter 500 / 0.875rem.
- **States:** Resting links are `ink-muted` and transition to `ink` on hover; the active link is `brass-deep` and does not transition. Active state is derived from scroll position via an intersection observer with a `-40% / -55%` root margin, so the highlight changes when a section reaches the middle band of the viewport, not its edge.
- **Mobile:** The same horizontal row at reduced gutter and gap. No hamburger, no drawer.
- The nav and footer are fixed chrome and sit outside the tone system — the nav is permanently paper, the footer permanently `walnut-deep`. This is the one intentional exception to the Two Grounds Rule, and it holds only for page-level chrome.

### Caffeine Meter (signature component)
A five-step dot readout beside each drink. Filled dots use `--tone-accent`, empty dots `--tone-rule`; each is a 6px circle at 2px spacing, preceded by the word "Caffeine" at 0.75rem. Zero-caffeine items render the words "Caffeine-free" instead of an empty meter. The dot row is `aria-hidden` with a screen-reader-only "N out of 5" beside it. It is the only quantitative display in the system and the only place brass appears in bulk — which is precisely why the tabs beside it stay wood-coloured.

### Framed Media (signature pattern)
Every photograph and the map are mounted the same way: a solid `--tone-frame` border (8px for section-scale media, 4px for menu items), 4px of interior padding, a fixed aspect ratio, and the Framed Media shadow. This mount is what makes imagery read as something hanging in the room rather than as a hero background, and it is the reason no image in the build is full-bleed or overlaid with text.

## Do's and Don'ts

### Do:
- **Do** wrap any new full-width section in `tone-light` or `tone-dark` and alternate it against its neighbour, so the page keeps its light/dark rhythm and inherits the grain overlay.
- **Do** read colours from the `--tone-*` variables inside section components; a new component should render correctly on either ground without a conditional.
- **Do** keep the accent tone-dependent — `brass-deep` (4.9:1) on paper, `brass-glow` (6.3:1) on walnut.
- **Do** reserve brass for active, selected, focused, and filled states only.
- **Do** set names of things in Vollkorn at weight 400 with -0.02em tracking, and everything scannable or clickable in Inter.
- **Do** pad new sections 96px vertically, 128px at `md`, inside the 64rem container with 24px gutters.
- **Do** mount imagery in the solid `--tone-frame` border with its fixed aspect ratio and the single Framed Media shadow.
- **Do** design the empty, sending, error, and success states of any new interaction in the existing palette — no new colour is needed for failure.
- **Do** keep corners square, reserving pills for buttons and circles for status dots.

### Don't:
- **Don't** hardcode a hex or Tailwind colour class inside a section component; that breaks tone portability. (Nav and footer are the deliberate, already-recorded exception.)
- **Don't** collapse `brass-deep` and `brass-glow` into a single brass, and don't put plain `brass` (#b8863b) on the paper ground as text — it measures 2.3:1 and fails AA.
- **Don't** add a `prefers-color-scheme` branch; the aesthetic is fixed by design.
- **Don't** introduce green or any high-saturation hue, including a red error colour.
- **Don't** add shadows to buttons, cards, tabs, or fields, and don't add hard offset shadows anywhere — the Framed Media shadow is the entire vocabulary.
- **Don't** add an uppercase tracked kicker, eyebrow, or category label above a heading; sections open on their headline.
- **Don't** use italic or bold Vollkorn for display type, and don't reach for a second accent when a hierarchy feels weak — increase size or space instead.
- **Don't** hide menu item details (price, description, variants, caffeine) behind hover; the primary audience is on touchscreens where hover does not exist.
- **Don't** use entrance animations or motion that delays reading. Transitions are colour-only at ~150ms; the 700ms photo scale on hover is the single deliberate exception and it is not a load effect.
- **Don't** add a second button variant. If a second action is needed on a screen, demote it to a text link — the UX floor allows one obvious primary action per screen.
