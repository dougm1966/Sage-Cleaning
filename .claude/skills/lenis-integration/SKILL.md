---
name: lenis-integration
description: Lenis smooth scroll setup for Astro static sites with GSAP ScrollTrigger. Load when initializing or debugging smooth scroll.
user-invocable: false
---

## Installation
```bash
npm install lenis
```

## Init Pattern (Base.astro `<script>` tag)
```javascript
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  lerp: 0.08,
  smoothWheel: true,
  orientation: 'vertical',
});

// Drive Lenis via GSAP ticker (preferred over raw RAF when using ScrollTrigger)
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
lenis.on('scroll', ScrollTrigger.update);
```

## Anchor Scroll (Nav links)
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    lenis.scrollTo(anchor.getAttribute('href'), { offset: -96 }); // -96 = nav height
  });
});
```

## lerp Guide
- `0.05` — Very slow, heavy, syrupy (too slow for most uses)
- `0.08` — Premium luxury feel (use this for SAGE)
- `0.12` — Snappy, responsive
- `1` — No smoothing (instant)
