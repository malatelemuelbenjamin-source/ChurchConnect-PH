import { LanguageSwitcher } from './language-switcher.js';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#mission', label: 'Our Mission' },
  { href: '#faith', label: 'Faith Communities' },
  { href: '#solutions', label: 'Digital Solutions' },
  { href: '#community', label: 'Community' },
  { href: '#contact', label: 'Contact' },
];

function brand() {
  return `<a class="brand" href="#home" aria-label="ConnectChurch — home">
    <span class="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 36 36">
        <path d="M18 8.5 9 26M18 8.5 27 26M9 26h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".9" />
        <circle cx="18" cy="8.5" r="2.9" fill="currentColor" />
        <circle cx="9" cy="26" r="2.9" fill="currentColor" opacity=".85" />
        <circle cx="27" cy="26" r="2.9" fill="#2FA97D" />
      </svg>
    </span>
    <span class="brand-name">Connect<span>Church</span></span>
  </a>`;
}

export function Nav() {
  return `<header class="site-header" id="site-header" data-header>
    <div class="container nav-inner">
      ${brand()}
      <nav class="nav-links" aria-label="Primary">
        ${links
          .map(
            (link, index) =>
              `<a class="nav-link${index === 0 ? ' is-active' : ''}" href="${link.href}">${link.label}</a>`,
          )
          .join('')}
      </nav>
      <div class="nav-actions">
        ${LanguageSwitcher()}
        <a class="btn btn-gold btn-sm nav-cta" href="#mission">Explore ConnectChurch</a>
        <button
          class="nav-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
          data-nav-toggle
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" id="mobile-menu" data-mobile-menu>
      <nav class="mobile-nav" aria-label="Mobile">
        ${links.map((link) => `<a class="mobile-link" href="${link.href}">${link.label}</a>`).join('')}
        <div class="mobile-lang">${LanguageSwitcher()}</div>
        <a class="btn btn-gold mobile-cta" href="#mission">Explore ConnectChurch</a>
        <p class="mobile-note">A BetterGo Marinduque Initiative</p>
      </nav>
    </div>
    <p class="sr-only" aria-live="polite" data-lang-announce></p>
  </header>`;
}
