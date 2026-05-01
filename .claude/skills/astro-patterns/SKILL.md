---
name: astro-patterns
description: Astro 4 component and layout patterns for multi-page static sites with Tailwind. Load before building any Astro page or component.
user-invocable: false
---

## Project Structure
```
src/
  layouts/
    Base.astro        # HTML shell, fonts, Lenis + GSAP init
    Page.astro        # Base + inner page hero header
  components/
    Nav.astro
    Footer.astro
    SectionHeader.astro
    ServiceCard.astro
    TestimonialCard.astro
    CTABand.astro
  pages/
    index.astro       # Home
    services.astro
    markets.astro
    about.astro
    contact.astro
  scripts/
    animations.js     # All GSAP ScrollTrigger setup (centralized)
  styles/
    global.css        # Tailwind directives
```

## Key Patterns

### Base Layout (Base.astro)
- Loads Google Fonts in `<head>` via `<link>`
- Imports `../styles/global.css`
- Initializes Lenis + GSAP via `<script>` at bottom of `<body>`
- Registers GSAP plugins once globally

### Page Layout (Page.astro)
- Wraps Base.astro via `<Base>`
- Accepts props: `title`, `description`, `heroTitle`, `heroSubtitle`, `heroBg`
- Renders a consistent dark-green page hero header for inner pages

### Animation Pattern
- Components render with `data-animate="fade-up"` / `data-animate="stagger"` attributes
- `animations.js` selects these attributes and registers ScrollTrigger tweens
- Never inline GSAP in `.astro` component files — keep animations in scripts/animations.js

### Active Nav State
```astro
const { pathname } = Astro.url;
// In Nav.astro:
<a href="/services" class={pathname === '/services' ? 'text-sage-gold' : ''}>Services</a>
```

### Component Props Pattern
```astro
---
interface Props {
  title: string;
  description?: string;
  class?: string;
}
const { title, description = '', class: className = '' } = Astro.props;
---
```

## Build & Deploy
```bash
npm run build     # outputs to dist/
# Upload dist/ contents to CPanel public_html/
```

## Tailwind Config Tokens
```js
colors: {
  'sage-dark':      '#093626',
  'sage-gold':      '#D1AF60',
  'sage-off-white': '#FAF9F6',
},
fontFamily: {
  sans:  ['Inter', 'system-ui', 'sans-serif'],
  serif: ['Playfair Display', 'Georgia', 'serif'],
}
```

## astro.config.mjs
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  trailingSlash: 'never',
});
```
