import Lenis from 'lenis';

const root = document.documentElement;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ------------------------------------------------------------------
// Smooth scrolling
// ------------------------------------------------------------------
if (!reducedMotion) {
  const lenis = new Lenis({ lerp: 0.12, anchors: { offset: -24 } });
  const raf = (t: number) => {
    lenis.raf(t);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

// ------------------------------------------------------------------
// Scroll reveal
// ------------------------------------------------------------------
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  },
  { rootMargin: '0px 0px -6% 0px', threshold: 0.05 },
);
document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

// Make sure everything is visible before printing
addEventListener('beforeprint', () => {
  document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
});

// ------------------------------------------------------------------
// Highlight the section currently in view
// ------------------------------------------------------------------
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
const setActive = (id: string) => {
  for (const link of navLinks) link.toggleAttribute('data-active', link.hash === `#${id}`);
};
const sectionObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
  },
  { rootMargin: '-30% 0px -65% 0px' },
);
navLinks
  .map((l) => document.querySelector(l.hash))
  .forEach((s) => s && sectionObserver.observe(s));
if (navLinks[0]) setActive(navLinks[0].hash.slice(1));

// ------------------------------------------------------------------
// Download CV (browser print → Save as PDF)
// ------------------------------------------------------------------
document.querySelectorAll('[data-print]').forEach((btn) => btn.addEventListener('click', () => window.print()));

// ------------------------------------------------------------------
// Theme toggle with a circular View Transition reveal
// ------------------------------------------------------------------
const toggleTheme = (e: MouseEvent) => {
  const apply = () => {
    const dark = !root.classList.contains('dark');
    root.classList.toggle('dark', dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {}
  };

  if (!document.startViewTransition || reducedMotion) return apply();

  const { clientX: x, clientY: y } = e;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document.startViewTransition(apply).ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 600, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', pseudoElement: '::view-transition-new(root)' },
    );
  });
};
document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((btn) => btn.addEventListener('click', toggleTheme));
