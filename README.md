# jai-website (v2)

Personal portfolio for Jai Sachdeva — rebuilt in **Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion**, dark-first with a neon accent.

The original HTML/CSS/JS version is preserved under [`_legacy/`](./_legacy) for reference.

## Quick start

```bash
# from the repo root
npm install
npm run dev
```

Open http://localhost:3000.

> Note: the first build needs internet access to fetch Google Fonts (Inter + Space Grotesk). After the first build they're cached.

## Scripts

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the dev server with hot reload  |
| `npm run build` | Production build                      |
| `npm start`     | Run the production build              |
| `npm run lint`  | Lint with ESLint                      |

## Project structure

```
app/
  layout.tsx       Root layout, metadata, fonts
  page.tsx         Home page (composes the sections)
  globals.css      Tailwind layers + base theme
components/
  Nav.tsx          Floating glass pill nav + mobile overlay
  Hero.tsx         Oversized hero w/ photo, typewriter, social rail
  Typewriter.tsx   Type/delete rotating titles
  CursorSpotlight  Cursor-following radial glow
  Projects.tsx     Section + grid
  ProjectCard.tsx  Card with cursor highlight, chips, CTAs
  Experience.tsx   Scroll-linked SVG path with traveling comet
  Skills.tsx       Grouped skill cards w/ hover glow
  Footer.tsx       Big "let's connect" CTA + socials
  SectionHeading   Reusable eyebrow/title/blurb
lib/
  content.ts       All copy lives here (profile, projects, experience, skills)
  cn.ts            Class name helper
public/
  assets/          Images (header.png, image.png, logo.jpg)
_legacy/           Original HTML/CSS/JS site
```

## Editing content

Almost everything user-facing is in `lib/content.ts` — projects, experience, skills, social links, the rotating titles. Change copy there, no component edits needed.

To swap the hero photo, replace `public/assets/header.png` with the same filename (or update the path in `components/Hero.tsx`).

## Theme

Defined in `tailwind.config.ts`:

- `ink-950 / 900 / 800 / 700 / 600` — near-black backgrounds
- `neon` (`#ff014f`) plus `400 / 300 / 200` — the hot pink accent
- `bone-50…400` — text shades
- Custom utilities: `.glass`, `.glass-strong`, `.neon-border`, `.text-gradient`, `.text-neon-gradient`, `.chip`

`prefers-reduced-motion` is honored globally — animations collapse for users who request it.

## Deploying

Easiest path is **Vercel**:

1. Push the repo to GitHub (instructions below).
2. Go to https://vercel.com/new, import `jai-website`.
3. Vercel auto-detects Next.js. Hit Deploy. Done.

Custom domain: add it in Vercel → Settings → Domains.

## Pushing to GitHub

The legacy files are still tracked in git. The original `assets/` folder at the repo root is now duplicated under `public/assets/` (where Next.js needs it). You can delete the root one:

```bash
cd ~/Desktop/jai-website
rm -rf assets
```

Then suggested commit flow:

```bash
# review changes
git status

# stage everything new + the legacy move
git add -A

# commit
git commit -m "feat: rebuild portfolio in Next.js + Tailwind + Framer Motion

- migrate from HTML/CSS/JS to Next.js 14 App Router
- dark theme with neon (#ff014f) accent + glassmorphism
- new hero with cursor spotlight + typewriter rotating titles
- redesigned project cards with hover highlights and tech chips
- reimagined work-experience timeline: scroll-linked SVG path
  with a traveling comet that activates milestones
- proper metadata, OpenGraph, favicon
- preserve original site under _legacy/"

# push
git push origin main
```

If `git push` asks for credentials, set up a Personal Access Token or GitHub CLI (`gh auth login`).

## What changed from v1

- **Stack**: vanilla HTML/CSS/JS → Next.js + TS + Tailwind + Framer Motion
- **Theme**: pastel-blue/pink → dark (ink-950) with neon accent
- **Hero**: static image → cursor spotlight, typewriter, glow ring around photo, animated status pill
- **Projects**: text-only cards → cursor-following highlights, gradient borders on hover, tech-stack chips, badges
- **Timeline**: kept the spirit (animated path with traveling marker) but with a single elegant curve, scroll-linked path drawing, glowing comet, and milestone activation as it passes
- **Skills**: added a third group (Design & Interaction); same glass card style upgraded for dark
- **Footer**: bigger "let's build something" CTA
- **SEO**: full Next.js metadata API — OpenGraph, Twitter card, theme-color, robots
- **A11y**: `prefers-reduced-motion` respected, semantic HTML, focusable interactive elements

## Things you might want to add later

- A `/blog` route using MDX (Next.js makes this trivial)
- A real OG image (1200×630 designed specifically for sharing) — currently reuses `header.png`
- A custom favicon (the current one is `logo.png`; you'd get sharper results from a 32×32 PNG or an SVG)
- A resume PDF download in the nav
- View transitions API for smoother section nav
