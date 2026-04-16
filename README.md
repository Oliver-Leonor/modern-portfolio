# Oliver Leonor — Portfolio

Dual-track full-stack + AI engineer portfolio. Built for the 30-second test: a hiring manager or CTO lands on the page and immediately knows what you do, what you've shipped, and how to reach you.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind · shadcn/ui · IBM Plex Sans/Mono · Vercel

---

## Quick start

```bash
# 1. Install
npm install

# 2. Run locally
npm run dev
# → http://localhost:3000

# 3. Production build (sanity check)
npm run build && npm start
```

---

## Deploy to Vercel

Zero manual config needed. The project is a standard Next.js App Router app.

```bash
# If you don't have the CLI
npm i -g vercel

# From the project root, on your personal Oliver-Leonor account
vercel login          # authenticate as oliver.leonor90@gmail.com
vercel                # first-time deploy (creates project)
vercel --prod         # promote to production
```

Or connect via the Vercel dashboard: New Project → import from GitHub → accept defaults → Deploy.

### GitHub account note

You're currently signed into the Leadify GitHub account in some terminals. For pushing this repo to your personal account:

```bash
# In this project folder only — scope the identity to this repo
git init
git config user.name  "Oliver-Leonor"
git config user.email "oliver.leonor90@gmail.com"
git remote add origin git@github.com:Oliver-Leonor/<new-repo-name>.git
git add -A
git commit -m "Initial commit: dual-track portfolio"
git branch -M main
git push -u origin main
```

If SSH uses your Leadify key by default, either use an SSH config alias (e.g. `git@github-personal:Oliver-Leonor/...`) or switch to HTTPS and a personal-access token on push.

---

## Editing content

Every piece of copy, every link, every timeline entry is in **one file**:

```
lib/data.ts
```

Edit there. Components read from it. No copy lives inside component files.

Common edits:

- Tweak the hero pitch → `hero.pitch`
- Add / remove a project → `projects` array (each card has `liveUrl`, `githubUrl`, `stack`, `description`)
- Update the timeline → `timeline` array (newest-first ordering)
- Philosophy blurb → `philosophy.quote` and `.subtext`
- Email / GitHub / LinkedIn → `personal`

---

## Project structure

```
.
├── app/
│   ├── globals.css          # Design tokens (near-black bg, amber accent, grain)
│   ├── layout.tsx           # IBM Plex fonts, SEO metadata, OG tags
│   └── page.tsx             # Section assembly
├── components/
│   ├── nav/
│   │   ├── sidebar-nav.tsx  # Desktop: sticky sidebar w/ scroll-spy
│   │   └── mobile-nav.tsx   # Mobile: sticky top bar
│   ├── sections/
│   │   ├── hero.tsx         # Dual-track pitch + 2 CTAs + status
│   │   ├── projects.tsx     # Work list
│   │   ├── philosophy.tsx   # Pull-quote between work + stack
│   │   ├── stack.tsx        # 6-group tooling list
│   │   ├── timeline.tsx     # Career arc (doubles as origin story)
│   │   └── contact.tsx      # Email + GitHub + LinkedIn + CTA
│   ├── ui/
│   │   ├── button.tsx       # shadcn-style Button
│   │   └── badge.tsx        # shadcn-style Badge (tech chips)
│   ├── project-card.tsx     # Live iframe preview + hover overlay
│   ├── copy-email-button.tsx
│   └── section-header.tsx
├── lib/
│   ├── data.ts              # ← All portfolio content lives here
│   └── utils.ts             # cn() className merger
├── components.json          # shadcn CLI config (for adding more components)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

---

## Design decisions worth knowing

**Typography.** IBM Plex Sans / Plex Mono. Deliberate nod to the IBM AS/400 origin story. Loaded via `next/font/google` for zero layout shift.

**Palette.** Near-black (`hsl(24 10% 5%)`) background with a barely-there warm tilt so the amber accent (`hsl(36 90% 56%)`) feels at home. Off-white foreground. Muted greys for metadata.

**Motion.** Restrained. Staggered fade-up on hero, scroll-spy highlight in the sidebar, `animate-ping` pulse on the availability dot, iframe fade-in on load. No page transitions, no scroll-jacking.

**Iframe previews.** Each project card lazy-loads the real live site inside an iframe, scaled to ~60% so the whole page fits. A hover overlay opens the real site in a new tab — so even if any iframe is blocked by CSP / X-Frame-Options on the target site, the card remains functional as a clickable link.

**Responsive targets tested mentally:**
- 375px: single column, mobile top bar, no sidebar
- 768px: single column, wider padding
- 1024px: sidebar appears, two-column project cards
- 1440px+: full layout

---

## Validation checklist (from the original brief)

- [x] Core message ("AI-native full-stack, honest, hardworking, self-unblocking") lands within 10 seconds
- [x] Dual-track positioning (full-stack + AI) clear above the fold — hero H1 has both lines
- [x] All 3 featured projects present (DocScope, Proto Community Hub, Wallet Ledger API) with live + GitHub links
- [x] CTAs visible at top (hero "Let's talk" + "See my work") AND bottom (Contact section CTA card)
- [x] Contact info reachable within one scroll — sidebar "Contact" link jumps straight there; email is displayed verbatim, not behind a form
- [x] Responsive at 375px, 768px, 1440px, 1920px (container max-w-5xl caps at 1024px content; sidebar occupies the rest on large screens)
- [x] Dark mode works (dark-first by design; `dark` class set on `<html>`)
- [x] Zero placeholder lorem ipsum — all copy is real
- [x] shadcn/ui components used (Button, Badge; `components.json` lets you add more via CLI)
- [x] Next.js App Router + TypeScript
- [x] Production build passes clean (verified: 17.5 kB page, 105 kB First Load JS)
- [x] No em dashes in user-facing copy (hyphens only, per house rule)
- [x] "6+ years" used, not "3+" (and "14+" for total IT experience)
- [x] Spanish educational background not referenced in a way that could read as a weakness (not surfaced at all on this page)

---

## What to tweak before you ship

1. **Skim `lib/data.ts` once.** Every copy block is edit-ready. Verify the Turing narrative and GM/IBM details match how you'd tell the story in an interview.
2. **Add an OG image.** Currently SEO metadata has no `ogImage`. For a polish pass, drop `public/og.png` (1200×630) and reference it in `app/layout.tsx` `openGraph.images`.
3. **Update `SITE_URL` in `app/layout.tsx`** once you know the production domain.
4. **Optional: add favicons.** Drop `app/favicon.ico` and/or `app/icon.png` (Next.js auto-detects).

---

## License

MIT — fork it if you want.
