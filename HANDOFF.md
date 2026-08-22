# HANDOFF — Portfolio site for a landing-page side hustle

**For a fresh Claude Code session.** This is the brief, not the plan.
Read it, then plan with me — don't start building.

Workflow reference lives in [WORKFLOW.md](WORKFLOW.md) and
[REFERENCE.md](REFERENCE.md) in this same folder.

---

## The situation

I'm in Manila. Most small local businesses here have no real website —
their Google listing just redirects to a Facebook page. I want to cold
call / cold approach those businesses and sell them a **landing page**.

To do that I need a portfolio site that makes a business owner trust me
enough to reply. **That portfolio is the project being planned here.**

### Three separate things — don't conflate them

1. **My portfolio site** ← *this is what we're planning now*
2. **Spec landing pages** — unsolicited "reimagined" pages for real
   local businesses. These are portfolio *content*, and they double as
   cold-call sales material.
3. **Actual client landing pages** — each one is its own separate small
   project later, not part of this build.

---

## Locked decisions — don't reopen these

- **Static only.** No backend, no database, no CMS, no auth.
- **"1-and-done" service model.** I build it, hand it over, I'm out.
  Minimal to zero ongoing maintenance is the whole point — this is a
  side hustle, not an agency.
- **Landing pages only.** Not full multi-page sites, not e-commerce,
  not backend work. That's too much for a side hustle.
- **Stack:** React ecosystem (I use React / React Native / Node /
  Postgres normally, but Postgres and Node are irrelevant here).
  Exact framework is still open — see below.

## Existing assets

- **Saffron** — my one real completed project. Currently live on a raw
  `*.vercel.app` URL. It needs a real custom domain before it goes in
  the portfolio; a `vercel.app` link reads as "hobby project," not
  "hired professional."
- I have **never set up a custom domain before.** I'll need this walked
  through, not assumed.

---

## Open decisions — these need actual answers before building

Push back on vague answers here. Don't pick for me silently.

### About the service I'm selling
1. **Productized or custom?** Is this a fixed package at a fixed price
   ("landing page, ₱X, delivered in Y days"), or custom-quoted per
   client? This changes the entire portfolio — a productized service
   shows a price and a package; custom work shows a "let's talk" CTA.
2. **Who owns hosting after handoff?** If I keep hosting it, I've
   quietly signed up for permanent support I didn't intend. If I
   transfer the Vercel project + their domain to them, I'm genuinely
   out. This decision defines whether "1-and-done" is real or a fiction.
3. **What happens when a client wants to change their hours / menu /
   photos in six months?** Options: not offered at all; paid follow-up
   job; or some self-edit mechanism (which would break the no-backend
   rule). Needs a real answer — this is the thing that silently turns a
   side hustle into unpaid ongoing work.
4. **What's explicitly NOT included?** Logo design? Copywriting? Photos?
   SEO? Google Business Profile setup? If undefined, clients will assume
   it's all included.

### About the portfolio site itself
5. **Who exactly lands on it?** A business owner I just called? Someone
   who got a link in a message? This determines whether it needs to
   explain who I am at all, or just prove I can build.
6. **What's the single action I want them to take?** Message me on
   Messenger / Viber? Email? Book a call? Manila-specific: Facebook
   Messenger may convert far better than an email form.
7. **How many spec pages before launching?** 2? 3? Which business types
   (café, salon, retail, restaurant, services)?
8. **Do I show before/after?** Their current Facebook-page-as-website
   vs. my version. Strong, but is it insulting to a prospect I'm about
   to call?
9. **Do I show prices publicly?** Filters out time-wasters, but also
   loses negotiating room.
10. **Framework choice** — Astro, Next.js static export, or plain Vite +
    React? A static marketing site has real reasons to prefer Astro over
    Next, but I default to React. Surface the tradeoff, don't assume.

---

## What I want from this session

1. **Plan, don't build.** Stop at the checkpoint and let me confirm.
2. **Quiz me on the open decisions above** — one at a time, not as a
   questionnaire dump. I know I'm going to miss things; that's why I
   want to be pushed.
3. **Scale the ceremony to the risk.** This is a static marketing site
   with no auth, no payments, no user data. Full PRD interrogation is
   probably too heavy — but positioning and conversion genuinely matter,
   so don't skip those.
4. **The visual direction matters more than usual here.** The portfolio
   IS the product demo. If it looks like every AI-generated landing
   page, it actively disproves the thing it's claiming. See the design
   section in REFERENCE.md — the direction roll is not optional.
5. **Walk me through the domain setup** when we get there. I've never
   done it.

## Guardrails

- I'm a non-technical vibe coder. Explain in plain language first.
- Don't let scope creep into a backend, a CMS, or a multi-page site.
- Don't build client landing pages in this project — those are separate.
