import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

function init() {
  const mm = gsap.matchMedia();

  mm.add(
    {
      '(prefers-reduced-motion: no-preference)': () => {
        setupHero();
        setupFadeUps();
        setupStaggerChildren();
        setupClipReveals();
        setupParallax();
      },
      '(prefers-reduced-motion: reduce)': () => {
        // Ensure nothing is left invisible for reduced-motion users
        gsap.set(
          '[data-animate="fade-up"], [data-animate="stagger-children"] > *, [data-animate="clip-reveal"]',
          { opacity: 1, y: 0, clipPath: 'none' }
        );
      },
    }
  );
}

// ─── Hero entrance sequence ───────────────────────────────────────────────────
function setupHero() {
  const eyebrow = document.getElementById('hero-eyebrow');
  const headline = document.getElementById('hero-headline');
  const sub = document.getElementById('hero-sub');
  const ctas = document.getElementById('hero-ctas');
  const badge = document.getElementById('hero-badge');
  const scrollIndicator = document.getElementById('scroll-indicator');

  if (!headline) return; // Only runs on home page

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Split headline into words
  const split = new SplitText(headline, { type: 'words, lines' });

  tl.from(eyebrow, { opacity: 0, y: 12, duration: 0.6 })
    .from(
      split.words,
      { opacity: 0, y: 50, stagger: 0.08, duration: 0.8, ease: 'power4.out' },
      '-=0.3'
    )
    .from(sub, { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
    .from(ctas?.children ?? [], { opacity: 0, y: 16, stagger: 0.1, duration: 0.5 }, '-=0.3')
    .from(badge, { opacity: 0, x: -20, duration: 0.5 }, '-=0.3')
    .from(scrollIndicator, { opacity: 0, duration: 0.5 }, '-=0.2');

  // Hero image parallax
  const heroImg = document.getElementById('hero-img');
  if (heroImg) {
    gsap.to(heroImg, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }
}

// ─── Generic fade-up reveals ──────────────────────────────────────────────────
function setupFadeUps() {
  document.querySelectorAll('[data-animate="fade-up"]').forEach((el) => {
    // Skip hero elements — they're handled above
    if (el.closest('#hero')) return;

    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 82%',
        once: true,
      },
    });
  });
}

// ─── Staggered child reveals ──────────────────────────────────────────────────
function setupStaggerChildren() {
  document.querySelectorAll('[data-animate="stagger-children"]').forEach((parent) => {
    const children = Array.from(parent.children);
    if (!children.length) return;

    gsap.from(children, {
      opacity: 0,
      y: 50,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: parent,
        start: 'top 80%',
        once: true,
      },
    });
  });
}

// ─── Clip-path image reveals ──────────────────────────────────────────────────
function setupClipReveals() {
  document.querySelectorAll('[data-animate="clip-reveal"]').forEach((el) => {
    gsap.from(el, {
      clipPath: 'inset(100% 0 0 0)',
      duration: 1.2,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
      },
    });
  });
}

// ─── Parallax images ──────────────────────────────────────────────────────────
function setupParallax() {
  document.querySelectorAll('[data-animate="parallax"]').forEach((el) => {
    // Skip hero parallax — handled above
    if (el.id === 'hero-img') return;

    const section = el.closest('section') ?? el.parentElement;
    gsap.fromTo(
      el,
      { yPercent: -10 },
      {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
}

// Run after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
