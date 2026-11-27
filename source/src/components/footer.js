import { LanguageSwitcher } from './language-switcher.js';

export function Footer() {
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand brand-footer" href="#home" aria-label="ConnectChurch — home">
            <span class="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 36 36">
                <path d="M18 8.5 9 26M18 8.5 27 26M9 26h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".9" />
                <circle cx="18" cy="8.5" r="2.9" fill="currentColor" />
                <circle cx="9" cy="26" r="2.9" fill="currentColor" opacity=".85" />
                <circle cx="27" cy="26" r="2.9" fill="#2FA97D" />
              </svg>
            </span>
            <span class="brand-name">Connect<span>Church</span></span>
          </a>
          <p class="footer-subtitle">Faith &amp; Community Connect</p>
          <p class="footer-tagline footer-tagline--lead">One Faith Community. Connected Together.</p>
          <p class="footer-tagline">Bringing faith communities closer through digital connection.</p>
          <p class="footer-parent">A BetterGo Marinduque Initiative</p>
        </div>

        <div class="footer-col">
          <h2 class="footer-heading">About ConnectChurch</h2>
          <p>
            An inclusive digital initiative introducing practical technology to churches, religious
            organizations, and faith communities across Marinduque.
          </p>
          <a class="footer-link" href="#about">Discover our story <span aria-hidden="true">→</span></a>
        </div>

        <div class="footer-col">
          <h2 class="footer-heading">Mission &amp; Vision</h2>
          <p>
            To connect, support, and empower faith communities through accessible digital solutions
            and meaningful collaboration.
          </p>
          <div class="footer-link-row">
            <a href="#mission">Our Mission</a>
            <a href="#vision">Our Vision</a>
          </div>
        </div>

        <div class="footer-col">
          <h2 class="footer-heading">Get Involved</h2>
          <p>
            Partnership and contact details are being prepared. Official channels will be published
            here.
          </p>
          <a class="footer-link" href="#contact">Contact our initiative <span aria-hidden="true">→</span></a>
          <p class="footer-lang-info">Available in English and Filipino.</p>
          ${LanguageSwitcher()}
        </div>

        <div class="footer-col footer-col--legal">
          <h2 class="footer-heading">Legal</h2>
          <p class="footer-legal-item">Privacy Policy <span>Being prepared</span></p>
          <p class="footer-legal-item">Terms of Use <span>Being prepared</span></p>
        </div>
      </div>

      <div class="footer-statement">
        <p>
          ConnectChurch is an independent digital initiative designed to connect and empower
          religious organizations and faith communities through technology, collaboration, and
          community engagement.
        </p>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">© 2026 ConnectChurch · BetterGo Marinduque</p>
        <p class="footer-copy footer-copy--soft">A BetterGo Marinduque Initiative</p>
      </div>
    </div>
  </footer>`;
}
