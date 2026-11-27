import './style.css';
import { Nav } from './components/nav.js';
import { Hero } from './components/hero.js';
import { About } from './components/about.js';
import { Story } from './components/story.js';
import { Mission } from './components/mission.js';
import { Vision } from './components/vision.js';
import { Constellation } from './components/constellation.js';
import { Purpose } from './components/purpose.js';
import { Values } from './components/connects.js';
import { Faith } from './components/faith.js';
import { Principles } from './components/principles.js';
import { SupportAreas } from './components/support.js';
import { Benefits } from './components/benefits.js';
import { Solutions } from './components/solutions.js';
import { Sizes } from './components/sizes.js';
import { Process } from './components/process.js';
import { Showcase } from './components/showcase.js';
import { DigitalCTA } from './components/digital-cta.js';
import { Commitment } from './components/commitment.js';
import { Promises } from './components/promises.js';
import { Marinduque } from './components/marinduque.js';
import { Contact } from './components/contact.js';
import { CTA } from './components/cta.js';
import { Footer } from './components/footer.js';
import { initHeroCanvas } from './particles.js';
import { initI18n, refreshLanguage } from './i18n.js';

const app = document.querySelector('#app');
app.innerHTML = `
  ${Nav()}
  <main id="main">
    ${Hero()}
    ${About()}
    ${Story()}
    ${Mission()}
    ${Vision()}
    ${Constellation()}
    ${Purpose()}
    ${Values()}
    ${Benefits()}
    ${Faith()}
    ${Principles()}
    ${SupportAreas()}
    ${Solutions()}
    ${Sizes()}
    ${Process()}
    ${Showcase()}
    ${DigitalCTA()}
    ${Commitment()}
    ${Promises()}
    ${Marinduque()}
    ${Contact()}
    ${CTA()}
  </main>
  ${Footer()}
`;

initI18n();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-nav-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');
const navLinks = [...document.querySelectorAll('.nav-link')];
const navTargets = new Set(navLinks.map((link) => link.getAttribute('href')));
const sections = [...document.querySelectorAll('main section[id]')].filter((section) =>
  navTargets.has(`#${section.id}`),
);

/* ---------- Sticky header ---------- */
let lastScrollState = null;
function updateHeader() {
  const scrolled = window.scrollY > 24;
  if (scrolled !== lastScrollState) {
    header.classList.toggle('is-scrolled', scrolled);
    lastScrollState = scrolled;
  }

  const offset = (header?.offsetHeight || 80) + 120;
  const position = window.scrollY + offset;
  let current = sections[0]?.id;
  for (const section of sections) {
    if (section.offsetTop <= position) current = section.id;
  }
  for (const link of navLinks) {
    const active = link.getAttribute('href') === `#${current}`;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  }
}

let ticking = false;
window.addEventListener(
  'scroll',
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateHeader();
      ticking = false;
    });
  },
  { passive: true },
);
window.addEventListener('resize', updateHeader);
updateHeader();

/* ---------- Mobile menu ---------- */
function setMenu(open) {
  header.classList.toggle('menu-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  mobileMenu.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-locked', open);
  refreshLanguage();
}

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1200 && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    const prefersReduced = reduceMotion.matches;
    event.preventDefault();
    target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', targetId);
    if (targetId === '#home') {
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    }
  });
});

/* ---------- Scroll reveals ---------- */
const revealItems = [...document.querySelectorAll('.reveal')];

if (reduceMotion.matches || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
}

/* ---------- Subtle image parallax ---------- */
const parallaxItems = [...document.querySelectorAll('[data-parallax]')];
const parallaxEnabled = !reduceMotion.matches && window.innerWidth > 767 && parallaxItems.length > 0;

if (parallaxEnabled) {
  let parallaxQueued = false;
  const updateParallax = () => {
    for (const image of parallaxItems) {
      const frame = image.parentElement;
      if (!frame) continue;
      const rect = frame.getBoundingClientRect();
      if (rect.bottom < -80 || rect.top > window.innerHeight + 80) continue;
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      const shift = Math.max(-1, Math.min(1, progress)) * -30;
      image.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(1.14)`;
    }
    parallaxQueued = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (parallaxQueued) return;
      parallaxQueued = true;
      requestAnimationFrame(updateParallax);
    },
    { passive: true },
  );
  window.addEventListener('resize', updateParallax);
  updateParallax();
}

/* ---------- Service card disclosures ---------- */
document.querySelectorAll('[data-service-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.service-card');
    if (!card) return;
    const open = card.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
    const label = button.querySelector('.service-more-label');
    if (label) {
      label.textContent = open ? 'Show less' : 'Learn more';
      refreshLanguage();
    }
  });
});

/* ---------- Animated statistics ---------- */
const counters = [...document.querySelectorAll('[data-count]')];

if (counters.length) {
  const finalValues = counters.map((counter) => Number(counter.dataset.count) || 0);

  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    counters.forEach((counter, index) => {
      counter.textContent = String(finalValues[index]);
    });
  } else {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const counter = entry.target;
          const target = Number(counter.dataset.count) || 0;
          const start = performance.now();
          const duration = 1100;

          const tick = (now) => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = String(Math.round(target * eased));
            if (progress < 1) window.requestAnimationFrame(tick);
          };

          counter.textContent = '0';
          window.requestAnimationFrame(tick);
          observer.unobserve(counter);
        });
      },
      { threshold: 0.5 },
    );

    counters.forEach((counter) => counterObserver.observe(counter));
  }
}

/* ---------- Hero particles ---------- */
initHeroCanvas(document.querySelector('[data-hero-canvas]'));
