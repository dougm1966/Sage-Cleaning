# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Astro dev server (localhost:4321)
npm run build      # Build static site to dist/
npm run preview    # Preview dist/ locally before uploading to CPanel
```

### Playwright tests (dev server must be running)
```bash
npx playwright test tests/rebuild.spec.ts    # Screenshot local rebuild
npx playwright test tests/live_site.spec.ts  # Screenshot live production site
npx playwright test --project=chromium       # Run only in Chromium
```

## Architecture

**Stack (rebuild):** Astro 4 + Tailwind CSS + GSAP ScrollTrigger + Lenis smooth scroll. Outputs static HTML files to `dist/` for CPanel deployment.

**Pages:** Home (`index.astro`), Services, Our Markets, About Us, Contact — each a real HTML file (no SPA routing).

**Brand:**
- Colors: `#093626` dark green, `#D1AF60` gold, `#FAF9F6` off-white
- Fonts: Playfair Display (headings), Inter (body) via Google Fonts
- All images hosted on `images.leadconnectorhq.com` CDN (webp)

**Animation pattern:** Components use `data-animate` attributes. `src/scripts/animations.js` registers all GSAP ScrollTrigger tweens centrally — never inline in component files.

**Tests are screenshot-only** — Playwright specs capture visual state. `live_*.spec.ts` capture production site for reference.

---

## Agent Team

| Agent | Domain |
|-------|--------|
| `sage-orchestrator` | Project coordination, task sequencing, cross-page coherence |
| `astro-builder` | `.astro` pages, layouts, components, Tailwind styling |
| `sage-animator` | GSAP ScrollTrigger, Lenis smooth scroll, all motion |
| `conversion-writer` | Page copy, CTAs, meta descriptions, trust signals |
| `cpanel-deployer` | CPanel build + deploy, `.htaccess`, clean URLs |

## Project Skills

| Skill | Domain |
|-------|--------|
| `sage-brand` | Colors, fonts, logo URL, contact info, brand voice |
| `sage-content` | Services, markets, about story, testimonials, image URLs |
| `astro-patterns` | Astro 4 component/layout patterns, project structure |
| `lenis-integration` | Lenis smooth scroll setup with GSAP ticker integration |
