(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`<div class="lang-switch" role="group" aria-label="Language" data-lang-switch data-active="en">
    <span class="lang-thumb" aria-hidden="true"></span>
    <button type="button" class="lang-option is-active" data-lang="en" aria-pressed="true" lang="en" aria-label="English">EN</button>
    <button type="button" class="lang-option" data-lang="fil" aria-pressed="false" lang="fil" aria-label="Filipino">FIL</button>
  </div>`}var t=[{href:`#home`,label:`Home`},{href:`#about`,label:`About`},{href:`#mission`,label:`Our Mission`},{href:`#faith`,label:`Faith Communities`},{href:`#solutions`,label:`Digital Solutions`},{href:`#community`,label:`Community`},{href:`#contact`,label:`Contact`}];function n(){return`<a class="brand" href="#home" aria-label="ConnectChurch — home">
    <span class="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 36 36">
        <path d="M18 8.5 9 26M18 8.5 27 26M9 26h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".9" />
        <circle cx="18" cy="8.5" r="2.9" fill="currentColor" />
        <circle cx="9" cy="26" r="2.9" fill="currentColor" opacity=".85" />
        <circle cx="27" cy="26" r="2.9" fill="#2FA97D" />
      </svg>
    </span>
    <span class="brand-name">Connect<span>Church</span></span>
  </a>`}function r(){return`<header class="site-header" id="site-header" data-header>
    <div class="container nav-inner">
      ${n()}
      <nav class="nav-links" aria-label="Primary">
        ${t.map((e,t)=>`<a class="nav-link${t===0?` is-active`:``}" href="${e.href}">${e.label}</a>`).join(``)}
      </nav>
      <div class="nav-actions">
        ${e()}
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
        ${t.map(e=>`<a class="mobile-link" href="${e.href}">${e.label}</a>`).join(``)}
        <div class="mobile-lang">${e()}</div>
        <a class="btn btn-gold mobile-cta" href="#mission">Explore ConnectChurch</a>
        <p class="mobile-note">A BetterGo Marinduque Initiative</p>
      </nav>
    </div>
    <p class="sr-only" aria-live="polite" data-lang-announce></p>
  </header>`}function i(){return`<section class="hero" id="home" aria-labelledby="hero-title">
    <div class="hero-media" aria-hidden="true">
      <img
        src="images/hero-community.jpg"
        alt=""
        width="1392"
        height="752"
        fetchpriority="high"
        decoding="async"
      />
    </div>
    <div class="hero-wash" aria-hidden="true"></div>
    <canvas class="hero-canvas" aria-hidden="true" data-hero-canvas></canvas>

    <div class="container hero-inner">
      <p class="hero-eyebrow hero-anim" style="--d: 80ms">
        <span class="pulse-dot" aria-hidden="true"></span>
        A BetterGo Marinduque Initiative
      </p>
      <h1 class="hero-title hero-anim" id="hero-title" style="--d: 180ms">
        Where Faith Communities <span class="accent">Connect.</span>
      </h1>
      <p class="hero-copy hero-anim" style="--d: 300ms">
        Bringing churches, religious organizations, and faith communities across Marinduque closer
        through technology, collaboration, and meaningful community connections.
      </p>
      <div class="hero-actions hero-anim" style="--d: 420ms">
        <a class="btn btn-gold" href="#about">
          Discover ConnectChurch
          <span class="btn-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </a>
        <a class="btn btn-ghost" href="#mission">Explore Our Mission</a>
      </div>
    </div>

    <div class="container hero-foot hero-anim" style="--d: 560ms">
      <div class="hero-foot-item">
        <span class="foot-mark" aria-hidden="true"></span>
        <div>
          <strong>Open to all faiths</strong>
          <span>Respect for every belief, tradition, and community</span>
        </div>
      </div>
      <div class="hero-foot-item">
        <span class="foot-mark" aria-hidden="true"></span>
        <div>
          <strong>Rooted in Marinduque</strong>
          <span>Built with the communities of our island, for our island</span>
        </div>
      </div>
      <div class="hero-foot-item">
        <span class="foot-mark" aria-hidden="true"></span>
        <div>
          <strong>Technology with purpose</strong>
          <span>Practical digital tools, offered with care</span>
        </div>
      </div>
    </div>
  </section>`}var a=`fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"`,o={compass:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="m14.8 9.2-1.7 4.4-4.4 1.7 1.7-4.4z"/></svg>`,target:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/></svg>`,eye:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M2.8 12s3.4-5.6 9.2-5.6S21.2 12 21.2 12s-3.4 5.6-9.2 5.6S2.8 12 2.8 12Z"/><circle cx="12" cy="12" r="2.6"/></svg>`,network:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><circle cx="12" cy="4.6" r="2.1"/><circle cx="4.8" cy="17" r="2.1"/><circle cx="19.2" cy="17" r="2.1"/><path d="M10.7 6.5 6.2 15M13.3 6.5 17.8 15M6.9 17h10.2"/></svg>`,church:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M12 2.5v4M10 4.5h4"/><path d="M12 6.5 5.5 10v10.5M12 6.5 18.5 10v10.5M5.5 20.5h13"/><path d="M10 20.5v-4.6a2 2 0 0 1 4 0v4.6"/><path d="M3.2 20.5h17.6"/></svg>`,users:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><circle cx="9" cy="8" r="3.1"/><path d="M3.5 19.5c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2"/><path d="M16 5.4a3 3 0 0 1 0 5.6M17.3 14.6c2.1.4 3.6 2.3 3.6 4.6"/></svg>`,shield:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M12 2.8 5 5.6v5.6c0 4.4 3 7.9 7 9.9 4-2 7-5.5 7-9.9V5.6Z"/><path d="m8.9 11.6 2.1 2.1 4.2-4.2"/></svg>`,spark:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M12 2.6 13.8 9l6.4 1.8-6.4 1.8L12 19l-1.8-6.4L3.8 10.8 10.2 9Z"/><path d="M18.6 16.4 19.4 19l2.6.8-2.6.8-.8 2.6"/></svg>`,book:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M4 4.8c2.6-.8 5.3-.8 8 .8 2.7-1.6 5.4-1.6 8-.8v13.2c-2.6-.8-5.3-.8-8 .8-2.7-1.6-5.4-1.6-8-.8Z"/><path d="M12 5.6v13.2"/></svg>`,globe:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.3 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.3-3.5-8.5S9.7 5.8 12 3.5Z"/></svg>`,megaphone:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M4 10.2v3.6a1.8 1.8 0 0 0 1.8 1.8h1.4l9.3 4V4.4l-9.3 4H5.8A1.8 1.8 0 0 0 4 10.2Z"/><path d="M8 15.6v3.1a1.3 1.3 0 0 0 2.6 0v-1.8M18.8 9.2a4 4 0 0 1 0 5.6"/></svg>`,heart:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M12 20s-7.4-4.3-7.4-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.4 2.6C19.4 15.7 12 20 12 20Z"/></svg>`,check:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="m5 12.5 4.4 4.4L19 7.2"/></svg>`,arrow:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,mail:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2.4"/><path d="m4 7.5 8 5.5 8-5.5"/></svg>`,pin:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M12 21s6.5-5.8 6.5-11a6.5 6.5 0 1 0-13 0C5.5 15.2 12 21 12 21Z"/><circle cx="12" cy="10" r="2.4"/></svg>`,handshake:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M2.8 11.4 6.5 7.7a2 2 0 0 1 2.8 0l1.4 1.4 1.4-1.4a2 2 0 0 1 2.8 0l3.7 3.7"/><path d="m2.8 11.4 3.8 3.8a2 2 0 0 0 2.8 0l.7-.7 1.9 1.9a2 2 0 0 0 2.8 0l4.6-4.6"/><path d="m8.6 13.7 1.3 1.3"/></svg>`,hands:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M8.1 12.2V6.1a1.6 1.6 0 0 1 3.2 0V11"/><path d="M11.3 10.6V8.7a1.6 1.6 0 0 1 3.2 0v2.4"/><path d="M14.5 11.1V9.9a1.5 1.5 0 0 1 3 0v4.4a5.2 5.2 0 0 1-5.2 5.2h-1a4.7 4.7 0 0 1-3.3-1.4l-3.2-3.3"/><path d="M4.8 14.8 8 11.6"/></svg>`,info:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><circle cx="12" cy="12" r="8.6"/><path d="M12 10.7v5.1"/><circle cx="12" cy="7.9" r="0.7" fill="currentColor" stroke="none"/></svg>`,laptop:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><rect x="4.2" y="5" width="15.6" height="10.6" rx="1.6"/><path d="M2.4 18.9h19.2M9.6 18.9l.6-2.1h3.6l.6 2.1"/></svg>`,clipboard:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><rect x="5.8" y="4.6" width="12.4" height="16" rx="2"/><path d="M9.5 4.6V3.5a1.3 1.3 0 0 1 1.3-1.3h2.4a1.3 1.3 0 0 1 1.3 1.3v1.1"/><path d="M9.2 10h5.6M9.2 13.4h5.6M9.2 16.7h3.4"/></svg>`,lock:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><rect x="4.8" y="10.5" width="14.4" height="9.3" rx="2.2"/><path d="M8.4 10.5V7.9a3.6 3.6 0 0 1 7.2 0v2.6"/><circle cx="12" cy="15.1" r="1.1" fill="currentColor" stroke="none"/></svg>`,key:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><circle cx="8.3" cy="15.6" r="3.5"/><path d="m10.9 13.1 8.3-8.3M16.4 7.6l2.2 2.2M14.1 9.9l2 2"/></svg>`,calendar:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><rect x="3.6" y="5" width="16.8" height="15" rx="2.2"/><path d="M3.6 9.4h16.8M8 3.4v3.2M16 3.4v3.2"/><path d="M7.4 13h1.8M11.1 13h1.8M14.8 13h1.8M7.4 16.4h1.8M11.1 16.4h1.8"/></svg>`,dashboard:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><rect x="3.4" y="4.2" width="7.2" height="6.2" rx="1.4"/><rect x="13.4" y="4.2" width="7.2" height="6.2" rx="1.4"/><rect x="3.4" y="13.6" width="7.2" height="6.2" rx="1.4"/><rect x="13.4" y="13.6" width="7.2" height="6.2" rx="1.4"/></svg>`,wallet:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M4.6 6.4A2.2 2.2 0 0 1 6.8 4.2h10.4a2 2 0 0 1 2 2v2H7.2"/><rect x="3.4" y="6.4" width="17.2" height="13" rx="2.4"/><path d="M16.2 13h1.6"/></svg>`,folder:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M3.4 7.2a2 2 0 0 1 2-2h3.4l2 2.4h7.8a2 2 0 0 1 2 2v7.8a2 2 0 0 1-2 2H5.4a2 2 0 0 1-2-2Z"/><path d="M3.6 10.4h16.8"/></svg>`,message:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M20.4 12.4c0 3.9-3.8 7-8.4 7-1 0-2-.1-2.9-.4l-4.5 1.6 1.4-3.5a6.3 6.3 0 0 1-2.4-4.7c0-3.9 3.8-7 8.4-7s8.4 3.1 8.4 7Z"/><path d="M8.4 12.2h.1M12 12.2h.1M15.6 12.2h.1"/></svg>`,code:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="m8.2 8.2-4 3.8 4 3.8M15.8 8.2l4 3.8-4 3.8M13.4 5.4l-2.8 13.2"/></svg>`,search:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4"/><path d="m15.6 15.6 4.4 4.4"/></svg>`,sprout:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M12 21v-8.4"/><path d="M12 12.6C12 8.4 8.8 5.6 4.4 5.6c0 4.6 3 8 7.6 7Z"/><path d="M12 10.4c0-3.2 2.6-5.4 6.2-5.4 0 3.6-2.4 6.2-6.2 5.4Z"/></svg>`,trending:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="m3.4 16.6 5.4-5.4 3.6 3.6 6.2-6.2"/><path d="M13.8 8.2h5.2v5.2"/></svg>`,layers:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="m12 3.6 8.4 4.4-8.4 4.4-8.4-4.4Z"/><path d="m3.6 12 8.4 4.4 8.4-4.4M3.6 16l8.4 4.4 8.4-4.4"/></svg>`,chevron:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="m6.5 9.5 5.5 5.5 5.5-5.5"/></svg>`,arch:`<svg viewBox="0 0 24 24" ${a} aria-hidden="true"><path d="M4.5 20.5V11a7.5 7.5 0 0 1 15 0v9.5"/><path d="M3.2 20.5h17.6"/><path d="M9.3 20.5v-7.1a2.7 2.7 0 0 1 5.4 0v7.1"/></svg>`},s=[`A shared digital space for churches, religious organizations, and faith communities`,`Access to practical technology and digital opportunities`,`Stronger connection with members and local communities`];function c(){return`<section class="section about" id="about" aria-labelledby="about-title">
    <div class="container about-grid">
      <figure class="about-media reveal" data-anim="left">
        <div class="about-media-frame">
          <img
            src="images/gathering.jpg"
            alt="People of different ages and backgrounds talking warmly together in a bright community hall"
            width="1184"
            height="880"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption class="about-badge">
          <span class="about-badge-icon" aria-hidden="true">${o.network}</span>
          <span>
            <strong>A BetterGo Marinduque Initiative</strong>
            <small>Digital connection for faith communities</small>
          </span>
        </figcaption>
      </figure>

      <div class="about-copy reveal" data-anim="right" style="--delay: 120ms">
        <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>About ConnectChurch</p>
        <h2 class="section-title" id="about-title">
          More Than a Platform.
          <span class="title-muted">A Connected Faith Community.</span>
        </h2>
        <p class="lead">
          Every church, religious organization, and faith community has its own mission, ministries,
          and identity. ConnectChurch aims to provide a shared digital space where participating
          communities can discover opportunities, access technology solutions, and strengthen their
          connection with the people they serve.
        </p>
        <p>
          This is an introductory initiative — a thoughtful first step toward a connected faith
          community in Marinduque, shaped together with the communities it serves.
        </p>

        <ul class="about-list">
          ${s.map(e=>`<li>
                <span class="list-icon" aria-hidden="true">${o.check}</span>
                <span>${e}</span>
              </li>`).join(``)}
        </ul>

        <div class="about-note">
          <span class="about-note-line" aria-hidden="true"></span>
          <p>No religion or denomination is favored. Every participating community is welcomed and respected.</p>
        </div>
      </div>
    </div>
  </section>`}function l(){return`<section class="section story" id="story" aria-labelledby="story-title">
    <div class="container story-grid">
      <div class="story-copy reveal">
        <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Our Story</p>
        <h2 class="section-title lines" id="story-title">
          <span class="line"><span>Every Community Has a Story.</span></span>
          <span class="line"><span class="title-muted">Every Faith Deserves a Connection.</span></span>
        </h2>
        <p class="lead">
          Across Marinduque, different religious communities and faith-based organizations continue
          to serve people, strengthen families, organize activities, and contribute to their local
          communities.
        </p>
        <p>
          However, some organizations face challenges in accessing digital tools, managing
          information, communicating activities, and expanding their community initiatives.
        </p>
        <p>ConnectChurch was envisioned as a digital initiative that aims to help address these challenges.</p>
        <p>
          Through accessible technology and meaningful collaboration, we want to help religious
          organizations become more connected, organized, and digitally empowered.
        </p>

        <div class="story-note">
          <span class="story-note-mark" aria-hidden="true">“</span>
          <p>Technology is only useful when it helps people serve people.</p>
        </div>
      </div>

      <figure class="story-media reveal" data-anim="right">
        <span class="story-index" aria-hidden="true">01</span>
        <div class="story-media-frame">
          <img
            src="images/story-planning.jpg"
            alt="Volunteers planning a community outreach activity together around a table with notebooks and a laptop"
            width="880"
            height="1184"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption class="story-caption">
          <span class="story-caption-icon" aria-hidden="true">${o.pin}</span>
          <span>
            <strong>Marinduque, Philippines</strong>
            <small>Communities serving communities</small>
          </span>
        </figcaption>
      </figure>
    </div>
  </section>`}function u(){return`<section class="section mission-feature" id="mission" aria-labelledby="mission-title">
    <div class="mission-feature-media" aria-hidden="true">
      <img
        src="images/mission-plaza.jpg"
        alt=""
        width="1568"
        height="672"
        loading="lazy"
        decoding="async"
        data-parallax
      />
    </div>
    <div class="mission-feature-wash" aria-hidden="true"></div>
    <div class="mission-rings" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>

    <div class="container mission-feature-inner">
      <p class="eyebrow reveal"><span class="eyebrow-line" aria-hidden="true"></span>Our Mission</p>
      <h2 class="section-title lines reveal" id="mission-title">
        <span class="line"><span>Technology That Connects.</span></span>
        <span class="line"><span class="title-muted">Innovation That Serves.</span></span>
      </h2>
      <p class="mission-statement reveal">
        To <em>connect</em>, <em>support</em>, and <em>empower</em> churches, religious
        organizations, and faith communities throughout Marinduque by providing accessible digital
        solutions, technology assistance, and opportunities for meaningful collaboration.
      </p>
      <div class="mission-divider reveal" aria-hidden="true"><span></span></div>
    </div>
  </section>`}function d(){return`<section class="section vision" id="vision" aria-labelledby="vision-title">
    <div class="vision-glow" aria-hidden="true"></div>

    <div class="container vision-grid">
      <div class="vision-copy reveal">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-line" aria-hidden="true"></span>Our Vision</p>
        <h2 class="section-title title-on-dark lines" id="vision-title">
          <span class="line"><span>A More Connected and</span></span>
          <span class="line"><span>Digitally Empowered</span></span>
          <span class="line"><span class="accent">Faith Community.</span></span>
        </h2>
        <p class="vision-statement">
          To build an <em>inclusive digital environment</em> where religious organizations and faith
          communities across Marinduque can access modern technology, strengthen their operations,
          connect with people, and contribute to <em>stronger communities</em>.
        </p>
      </div>

      <div class="vision-visual reveal" data-anim="scale" aria-hidden="true">
        <svg viewBox="0 0 520 520" focusable="false">
          <g class="vision-spin">
            <circle class="vision-ring" cx="260" cy="260" r="216" />
            <circle class="vision-ring vision-ring--soft" cx="260" cy="260" r="160" />
            <circle class="vision-ring vision-ring--soft" cx="260" cy="260" r="104" />
            <path class="vision-arc" d="M260 44a216 216 0 0 1 187 108" />
            <path class="vision-arc vision-arc--gold" d="M353 465A216 216 0 0 1 73 368" />
          </g>
          <g class="vision-core">
            <circle cx="260" cy="260" r="38" />
            <circle cx="260" cy="260" r="6" />
          </g>
          <g class="vision-dots">
            <circle cx="260" cy="44" r="3.6" />
            <circle cx="447" cy="152" r="3" />
            <circle cx="417" cy="404" r="3.6" />
            <circle cx="156" cy="452" r="3" />
            <circle cx="80" cy="300" r="3.6" />
            <circle cx="150" cy="88" r="3" />
          </g>
        </svg>
        <span class="vision-chip vision-chip--1">Technology</span>
        <span class="vision-chip vision-chip--2">Connection</span>
        <span class="vision-chip vision-chip--3">Community</span>
      </div>
    </div>
  </section>`}var f=[{term:`Faith`,note:`Lived with conviction`},{term:`Unity`,note:`Without erasing difference`},{term:`Community`,note:`Rooted in place`},{term:`Service`,note:`Offered to others`},{term:`Collaboration`,note:`Stronger together`},{term:`Respect`,note:`For every belief`}];function p(){return`<section class="section connections" aria-labelledby="connections-title">
    <div class="container">
      <div class="network-stage reveal">
        <div class="network-stage-glow" aria-hidden="true"></div>
        <div class="network-stage-head">
          <p class="eyebrow eyebrow-light"><span class="eyebrow-line" aria-hidden="true"></span>Connected by purpose</p>
          <h2 class="section-title title-on-dark lines" id="connections-title">
            <span class="line"><span>Many paths.</span></span>
            <span class="line"><span>Shared purpose.</span></span>
          </h2>
          <p>
            ConnectChurch brings faith communities into one respectful digital space — not to blend
            beliefs, but to share tools, service, and friendship.
          </p>
        </div>

        <div class="network" role="img" aria-label="Illustration of faith communities connected around ConnectChurch through respect, service, and collaboration">
          <svg class="network-svg" viewBox="0 0 600 600" aria-hidden="true" focusable="false">
            <circle class="net-ring" cx="300" cy="300" r="252" />
            <circle class="net-ring net-ring--inner" cx="300" cy="300" r="170" />
            <g class="net-spokes">
              <line x1="300" y1="300" x2="300" y2="48" />
              <line x1="300" y1="300" x2="518" y2="174" />
              <line x1="300" y1="300" x2="518" y2="426" />
              <line x1="300" y1="300" x2="300" y2="552" />
              <line x1="300" y1="300" x2="82" y2="426" />
              <line x1="300" y1="300" x2="82" y2="174" />
            </g>
            <g class="net-dots">
              <circle cx="300" cy="48" r="3.5" />
              <circle cx="518" cy="174" r="3.5" />
              <circle cx="518" cy="426" r="3.5" />
              <circle cx="300" cy="552" r="3.5" />
              <circle cx="82" cy="426" r="3.5" />
              <circle cx="82" cy="174" r="3.5" />
              <circle cx="409" cy="111" r="2" />
              <circle cx="509" cy="300" r="2" />
              <circle cx="409" cy="489" r="2" />
              <circle cx="191" cy="489" r="2" />
              <circle cx="91" cy="300" r="2" />
              <circle cx="191" cy="111" r="2" />
            </g>
          </svg>

          <div class="network-core">
            <span class="network-core-mark" aria-hidden="true">
              <svg viewBox="0 0 36 36">
                <path d="M18 8.5 9 26M18 8.5 27 26M9 26h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".9" />
                <circle cx="18" cy="8.5" r="2.9" fill="currentColor" />
                <circle cx="9" cy="26" r="2.9" fill="currentColor" opacity=".85" />
                <circle cx="27" cy="26" r="2.9" fill="#2FA97D" />
              </svg>
            </span>
            <span class="network-core-label">ConnectChurch</span>
            <small>Open to all faiths</small>
          </div>

          <span class="network-node node--1">Faith</span>
          <span class="network-node node--2">Unity</span>
          <span class="network-node node--3">Community</span>
          <span class="network-node node--4">Service</span>
          <span class="network-node node--5">Collaboration</span>
          <span class="network-node node--6">Respect</span>
        </div>

        <ul class="network-legend">
          ${f.map(e=>`<li>
                <span class="legend-term">${e.term}</span>
                <span class="legend-note">${e.note}</span>
              </li>`).join(``)}
        </ul>
      </div>
    </div>
  </section>`}var ee=[{number:`01`,icon:o.laptop,title:`Digital Accessibility`,copy:`Help religious organizations discover and access affordable or accessible digital tools, regardless of their size and available resources.`},{number:`02`,icon:o.clipboard,title:`Organizational Support`,copy:`Provide opportunities to improve administrative processes, communication, information management, and organizational coordination.`},{number:`03`,icon:o.megaphone,title:`Community Connection`,copy:`Help participating organizations reach their communities through digital information, announcements, activities, and outreach initiatives.`},{number:`04`,icon:o.handshake,title:`Meaningful Collaboration`,copy:`Encourage respectful connections and voluntary cooperation among different religious organizations and faith communities.`}];function te(){return`<section class="section purpose" id="purpose" aria-labelledby="purpose-title">
    <div class="container purpose-layout">
      <div class="purpose-head reveal">
        <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Our Purpose</p>
        <h2 class="section-title" id="purpose-title">
          Why ConnectChurch<br />
          <span class="title-muted">Matters.</span>
        </h2>
        <p class="purpose-intro">
          Four practical ways this initiative hopes to serve religious organizations and faith
          communities — with tools that fit their resources and respect their independence.
        </p>
      </div>

      <div class="purpose-grid">
        ${ee.map((e,t)=>`<article class="purpose-card reveal" style="--delay: ${t%2*110}ms">
              <div class="purpose-card-top">
                <span class="purpose-icon" aria-hidden="true">${e.icon}</span>
                <span class="purpose-index" aria-hidden="true">${e.number}</span>
              </div>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
            </article>`).join(``)}
      </div>
    </div>
  </section>`}var ne=[{icon:o.handshake,title:`Respect`,copy:`We respect the identity, beliefs, traditions, and independence of every participating religious organization.`},{icon:o.users,title:`Inclusivity`,copy:`We welcome diverse faith communities and organizations without discrimination based on religious denomination or affiliation.`},{icon:o.hands,title:`Service`,copy:`We believe technology should help organizations serve people and communities more effectively.`},{icon:o.network,title:`Unity`,copy:`We encourage meaningful connections and respectful collaboration while recognizing differences in beliefs and practices.`},{icon:o.spark,title:`Innovation`,copy:`We promote practical and accessible digital solutions that help organizations adapt to a changing world.`},{icon:o.shield,title:`Integrity`,copy:`We value transparency, responsible technology, data privacy, and accountability in every initiative.`}];function re(){return`<section class="section connects values" id="values" aria-labelledby="values-title">
    <div class="container">
      <div class="connects-head reveal">
        <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Our Core Values</p>
        <h2 class="section-title lines" id="values-title">
          <span class="line"><span>The Values Behind</span></span>
          <span class="line"><span class="title-muted">Every Connection.</span></span>
        </h2>
        <p class="connects-intro">
          These values shape how ConnectChurch works with every participating organization —
          whatever its size, tradition, or available resources.
        </p>
      </div>

      <div class="connects-grid">
        ${ne.map((e,t)=>`<article class="connect-card reveal" style="--delay: ${t%3*90}ms">
              <div class="connect-card-top">
                <span class="connect-icon" aria-hidden="true">${e.icon}</span>
                <span class="connect-number" aria-hidden="true">0${t+1}</span>
              </div>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
            </article>`).join(``)}
      </div>
    </div>
  </section>`}var ie=[{number:`01`,icon:o.hands,title:`Catholic Communities`,copy:`Parishes and lay communities serving their members and local neighborhoods.`},{number:`02`,icon:o.book,title:`Protestant Churches`,copy:`Congregations from Reformed, Lutheran, Anglican, and other Protestant traditions.`},{number:`03`,icon:o.megaphone,title:`Evangelical and Born Again Churches`,copy:`Independent fellowships focused on outreach and community life.`},{number:`04`,icon:o.users,title:`Baptist Communities`,copy:`Baptist churches and fellowships serving their local neighborhoods.`},{number:`05`,icon:o.compass,title:`Methodist Communities`,copy:`Congregations rooted in community, service, and shared ministry.`},{number:`06`,icon:o.globe,title:`Iglesia ni Cristo Communities`,copy:`Congregations contributing to community life across the island.`},{number:`07`,icon:o.calendar,title:`Seventh-day Adventist Communities`,copy:`Congregations and community programs serving people across the island.`},{number:`08`,icon:o.arch,title:`Muslim Communities`,copy:`Congregations and community organizations contributing to island life.`},{number:`09`,icon:o.layers,title:`Other Religious Organizations`,copy:`Religious groups and spiritual communities of other traditions.`},{number:`10`,icon:o.handshake,title:`Faith-Based Community Groups`,copy:`Faith-inspired organizations and volunteer groups serving the common good.`}];function ae(){return`<section class="section faith" id="faith" aria-labelledby="faith-title">
    <div class="faith-glow" aria-hidden="true"></div>
    <div class="container">
      <div class="section-head reveal">
        <div class="section-head-main">
          <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Marinduque Faith Communities</p>
          <h2 class="section-title lines" id="faith-title">
            <span class="line"><span>A Community of</span></span>
            <span class="line"><span class="title-muted">Different Faiths</span></span>
          </h2>
        </div>
        <div class="section-head-copy">
          <p>
            Marinduque is home to diverse religious communities, each with its own beliefs,
            traditions, and ways of serving people. ConnectChurch aims to provide an inclusive
            digital space where these communities can be recognized, supported, and connected
            through technology.
          </p>
        </div>
      </div>

      <figure class="faith-banner reveal" data-anim="scale">
        <img
          src="images/service.jpg"
          alt="Volunteers from different backgrounds planting seedlings together in a community garden"
          width="1248"
          height="832"
          loading="lazy"
          decoding="async"
          data-parallax
        />
        <div class="faith-banner-overlay" aria-hidden="true"></div>
        <figcaption>
          <span class="banner-label"><span class="pulse-dot" aria-hidden="true"></span>Shared commitment</span>
          <p>Different Faiths. Shared Respect. Stronger Communities.</p>
        </figcaption>
      </figure>

      <div class="faith-grid faith-grid--ten">
        ${ie.map((e,t)=>`<article class="faith-card reveal" style="--delay: ${t%5*70}ms">
              <span class="faith-card-number" aria-hidden="true">${e.number}</span>
              <span class="faith-icon" aria-hidden="true">${e.icon}</span>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
              <span class="faith-card-line" aria-hidden="true"></span>
            </article>`).join(``)}
      </div>

      <div class="faith-disclaimer reveal">
        <span class="faith-note-icon" aria-hidden="true">${o.info}</span>
        <div>
          <p>
            ConnectChurch is an independent digital initiative under BetterGo Marinduque. It is not
            an official representative of any religious organization, church, denomination, or
            government agency. Participation is voluntary, and all religious organizations retain
            their own beliefs, leadership, identity, and independence.
          </p>
          <p class="faith-disclaimer-small">
            These categories are illustrative examples only. ConnectChurch does not claim any
            organization as a partner, participant, or endorser without their consent.
          </p>
        </div>
      </div>
    </div>
  </section>`}var oe=[{icon:o.shield,title:`Religious Freedom`,copy:`Every organization keeps the right to practice its own beliefs, traditions, and leadership without interference.`},{icon:o.globe,title:`Equal Opportunity`,copy:`Digital support is offered fairly to communities of every size, tradition, and level of digital experience.`},{icon:o.key,title:`Independence`,copy:`ConnectChurch never claims authority over, speaks for, or merges the identity of any organization.`},{icon:o.handshake,title:`Mutual Respect`,copy:`We encourage understanding and cooperation without asking anyone to compromise their convictions.`},{icon:o.hands,title:`Community Service`,copy:`We support voluntary activities that serve people and strengthen local communities.`},{icon:o.lock,title:`Privacy and Trust`,copy:`Organizational and individual information is handled with care, consent, and respect.`}];function se(){return`<section class="section principles" id="principles" aria-labelledby="principles-title">
    <div class="principles-glow" aria-hidden="true"></div>
    <div class="container">
      <div class="principles-head reveal">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-line" aria-hidden="true"></span>Inclusive Community Principles</p>
        <h2 class="section-title title-on-dark" id="principles-title">
          Respecting Every Faith.<br />
          <span class="accent">Supporting Every Community.</span>
        </h2>
        <p>
          These principles guide how ConnectChurch hopes to work with every organization — with
          respect, fairness, and without interference.
        </p>
      </div>

      <div class="principles-grid">
        ${oe.map((e,t)=>`<article class="principle-card reveal" style="--delay: ${t%3*80}ms">
              <div class="principle-card-top">
                <span class="principle-icon" aria-hidden="true">${e.icon}</span>
                <span class="principle-index" aria-hidden="true">0${t+1}</span>
              </div>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
            </article>`).join(``)}
      </div>
    </div>
  </section>`}var ce=[{icon:o.users,title:`Digital Organization Profiles`,copy:`A clear public profile that introduces your organization, its mission, and its leadership.`},{icon:o.laptop,title:`Website and Digital Presence`,copy:`A professional place online to share your story, activities, and contact information.`},{icon:o.calendar,title:`Events and Activities Information`,copy:`Organized schedules and updates so your community can find gatherings easily.`},{icon:o.megaphone,title:`Community Announcements`,copy:`A simple space for notices, reminders, and important information.`},{icon:o.handshake,title:`Volunteer and Outreach Opportunities`,copy:`Coordinate volunteers and share service opportunities with your community.`},{icon:o.dashboard,title:`Digital Organization Tools`,copy:`Practical tools for records, communication, and everyday administration — shaped around your capacity.`}];function le(){return`<section class="section support" id="support" aria-labelledby="support-title">
    <div class="container">
      <div class="section-head support-head reveal">
        <div class="section-head-main">
          <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Proposed Digital Support</p>
          <h2 class="section-title" id="support-title">
            How ConnectChurch Supports<br />
            <span class="title-muted">Different Communities.</span>
          </h2>
        </div>
        <div class="section-head-copy">
          <p>
            Proposed digital support areas — not yet operational — that participating organizations
            could use according to their own needs, values, and independence.
          </p>
        </div>
      </div>

      <div class="support-grid">
        ${ce.map((e,t)=>`<article class="support-card reveal" style="--delay: ${t%3*80}ms">
              <span class="support-icon" aria-hidden="true">${e.icon}</span>
              <span class="support-tag">Proposed</span>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
            </article>`).join(``)}
      </div>

      <p class="support-note reveal">
        <span class="faith-note-icon" aria-hidden="true">${o.info}</span>
        All support areas are proposed and subject to discussion. Nothing here is an operating
        service.
      </p>
    </div>
  </section>`}var ue=[{icon:o.network,title:`A Shared Digital Home`,copy:`One respectful space where organizations can be found, share updates, and stay connected with the people they serve.`},{icon:o.laptop,title:`Everyday Work, Made Simpler`,copy:`Practical tools for records, events, volunteers, and communication — shaped around each organization’s capacity.`},{icon:o.handshake,title:`A Wider Circle of Support`,copy:`Opportunities to learn from, collaborate with, and support other faith communities across the island.`}],de=[{value:12,label:`Solution areas`},{value:6,label:`Municipalities in scope`},{value:2,label:`Languages supported`},{value:1,label:`Shared purpose`}];function fe(){return`<section class="section benefits" id="benefits" aria-labelledby="benefits-title">
    <div class="benefits-glow" aria-hidden="true"></div>
    <div class="container">
      <div class="benefits-head reveal">
        <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Platform Benefits</p>
        <h2 class="section-title" id="benefits-title">
          What a Connected Community<br />
          <span class="title-muted">Makes Possible.</span>
        </h2>
        <p class="benefits-intro">
          Technology is only useful when it brings people closer. These are the practical benefits
          ConnectChurch hopes to offer every participating organization.
        </p>
      </div>

      <div class="benefit-grid">
        ${ue.map((e,t)=>`<article class="benefit-card reveal" style="--delay: ${t*90}ms">
              <span class="benefit-icon" aria-hidden="true">${e.icon}</span>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
            </article>`).join(``)}
      </div>

      <div class="benefit-stats reveal">
        <p class="benefit-stats-label">ConnectChurch at a glance</p>
        <div class="benefit-stats-grid">
          ${de.map(e=>`<div class="benefit-stat">
                <strong data-count="${e.value}">${e.value}</strong>
                <span>${e.label}</span>
              </div>`).join(``)}
        </div>
      </div>
    </div>
  </section>`}var pe=[{icon:o.globe,tag:`Web Presence`,title:`Organization Website`,copy:`A professional online home that introduces your organization, shares its story, and keeps your community informed.`,features:[`Organization profile`,`About and history`,`Leadership information`,`Contact details`,`Announcements and activity highlights`]},{icon:o.dashboard,tag:`Operations`,title:`Organization Management System`,copy:`Digital tools that help organize administrative activities, records, and internal coordination in one place.`,features:[`Organization records`,`Member information management`,`Attendance management`,`Ministry or department records`,`Internal administrative tools`]},{icon:o.calendar,tag:`Events`,title:`Events & Activities Management`,copy:`Present gatherings and activities clearly, with schedules and information your community can find easily.`,features:[`Event calendars`,`Worship or gathering schedules`,`Community activities`,`Registration information`,`Event announcements`]},{icon:o.megaphone,tag:`Communication`,title:`Community Announcements`,copy:`A simple digital space for notices, reminders, and updates that matter to your community.`,features:[`Public announcements`,`Activity updates`,`Community notices`,`Important reminders`,`Information publishing`]},{icon:o.heart,tag:`Care`,title:`Prayer & Pastoral Care`,copy:`Optional tools for organizations that offer prayer or pastoral support to their members.`,features:[`Prayer request inquiries`,`Pastoral appointment requests`,`Private communication channels`,`Confidentiality controls`],note:`Optional and shaped according to each organization’s beliefs, practices, and leadership.`},{icon:o.users,tag:`Volunteers`,title:`Volunteer Management`,copy:`Coordinate volunteers, schedules, and service opportunities without scattered messages and spreadsheets.`,features:[`Volunteer directories`,`Activity assignments`,`Volunteer schedules`,`Participation records`,`Community service coordination`]},{icon:o.sprout,tag:`Outreach`,title:`Community Outreach Management`,copy:`Support charitable and community-oriented activities with organized information and coordination.`,features:[`Outreach program information`,`Beneficiary coordination`,`Relief activity monitoring`,`Volunteer coordination`,`Community project documentation`]},{icon:o.wallet,tag:`Finance`,title:`Donation & Financial Record Management`,copy:`Optional tools for responsible financial administration, kept private to authorized officers.`,features:[`Donation records`,`Offering records where applicable`,`Expense tracking`,`Financial summaries`,`Digital acknowledgment records`],note:`Financial information remains private and accessible only to authorized organization officers.`},{icon:o.book,tag:`Resources`,title:`Digital Resource Center`,copy:`Organize and present educational and religious materials in one accessible place.`,features:[`Video and sermon archives`,`Educational resources`,`Study materials`,`Downloadable documents`,`Livestream links`],note:`All content remains under the control of the respective organization.`},{icon:o.folder,tag:`Documents`,title:`Document Management System`,copy:`Keep important organizational documents organized, categorized, and easy to locate.`,features:[`Digital document archives`,`Organization files`,`Document categorization`,`Administrative records`,`Secure document access`]},{icon:o.message,tag:`Communication`,title:`Organization Communication Tools`,copy:`Help authorized representatives communicate consistently with their communities.`,features:[`Announcement publishing`,`Contact directories`,`Communication coordination`,`Activity reminders`,`Digital information channels`]},{icon:o.code,tag:`Custom Build`,title:`Custom App & Website Development`,copy:`Tailored technology solutions shaped around the specific needs of an individual organization.`,features:[`Custom websites`,`Web applications`,`Mobile-friendly platforms`,`Administrative systems`,`Community service applications`]}];function me(){return`<section class="section solutions" id="solutions" aria-labelledby="solutions-title">
    <div class="container">
      <div class="solutions-intro">
        <div class="solutions-intro-copy reveal">
          <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Our Digital Solutions</p>
          <h2 class="section-title lines" id="solutions-title">
            <span class="line"><span>Technology Solutions</span></span>
            <span class="line"><span>Designed for Every</span></span>
            <span class="line"><span class="title-muted">Faith Community.</span></span>
          </h2>
          <p class="solutions-lead">
            Every religious organization has unique needs and challenges. ConnectChurch aims to
            provide accessible, practical, and modern digital solutions that help organizations
            improve their operations, strengthen communication, and expand their community impact.
          </p>
          <p class="solutions-status">
            <span class="status-dot" aria-hidden="true"></span>
            Introductory phase · these solution areas are being prepared, not yet operating.
          </p>
        </div>

        <figure class="solutions-visual reveal" data-anim="right">
          <div class="solutions-visual-frame">
            <img
              src="images/tech-community.jpg"
              alt="Community coordinators collaborating around a laptop and printed schedules in a bright hall"
              width="1568"
              height="672"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="tech-chips" aria-hidden="true">
            <span class="tech-chip tech-chip--1"><span class="tech-chip-dot"></span>Community</span>
            <span class="tech-chip tech-chip--2"><span class="tech-chip-dot"></span>Communication</span>
            <span class="tech-chip tech-chip--3"><span class="tech-chip-dot"></span>Connection</span>
          </div>
        </figure>
      </div>

      <div class="service-grid">
        ${pe.map((e,t)=>`<article class="service-card reveal" style="--delay: ${t%3*80}ms">
              <div class="service-card-top">
                <span class="service-icon" aria-hidden="true">${e.icon}</span>
                <span class="service-tag">${e.tag}</span>
              </div>
              <h3>${e.title}</h3>
              <p class="service-copy">${e.copy}</p>
              <button
                class="service-more"
                type="button"
                data-service-toggle
                aria-expanded="false"
                aria-controls="service-detail-${t+1}"
              >
                <span class="service-more-label">Learn more</span>
                <span class="service-chevron" aria-hidden="true">${o.chevron}</span>
              </button>
              <div class="service-detail" id="service-detail-${t+1}">
                <div class="service-detail-inner">
                  <p class="service-detail-label">Possible features</p>
                  <ul>
                    ${e.features.map(e=>`<li>${e}</li>`).join(``)}
                  </ul>
                  ${e.note?`<p class="service-note">${e.note}</p>`:``}
                </div>
              </div>
            </article>`).join(``)}
      </div>

      <p class="solutions-footnote reveal">
        These are planned solution areas. Nothing here is presented as an operating service, and no
        organization is required to adopt any particular tool.
      </p>
    </div>
  </section>`}var he=[{number:`01`,icon:o.sprout,title:`Starting Digital`,stage:`Beginning the digital journey`,copy:`For organizations beginning their digital journey. Start with approachable tools — a clear online presence, organized announcements, and simple record keeping.`},{number:`02`,icon:o.trending,title:`Growing Digitally`,stage:`Improving existing processes`,copy:`For organizations looking to improve existing processes. Connect information, coordinate events and volunteers, and communicate more consistently.`},{number:`03`,icon:o.layers,title:`Advanced Digital Solutions`,stage:`Custom platforms and systems`,copy:`For organizations that need customized platforms and systems. Explore tailored technology, integrated workflows, and support shaped around specific needs.`}];function ge(){return`<section class="section sizes" id="sizes" aria-labelledby="sizes-title">
    <div class="container">
      <div class="section-head reveal">
        <div class="section-head-main">
          <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Every Size Welcome</p>
          <h2 class="section-title" id="sizes-title">
            Whether Big or Small, Every Organization Deserves <span class="title-muted"
              >Access to Technology.</span
            >
          </h2>
        </div>
        <div class="section-head-copy">
          <p>
            Some organizations have established digital systems, while others still depend on manual
            records, paper-based processes, and traditional communication methods.
          </p>
          <p class="sizes-welcome">
            ConnectChurch aims to help bridge this gap by making practical digital solutions more
            accessible to organizations with different resources and capabilities.
          </p>
        </div>
      </div>

      <div class="sizes-grid">
        ${he.map((e,t)=>`<article class="size-card reveal" style="--delay: ${t*100}ms">
              <div class="size-card-top">
                <span class="size-icon" aria-hidden="true">${e.icon}</span>
                <span class="size-number" aria-hidden="true">${e.number}</span>
              </div>
              <p class="size-stage">${e.stage}</p>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
              <span class="size-meter" aria-hidden="true"><span></span><span></span><span></span></span>
            </article>`).join(``)}
      </div>

      <p class="sizes-note reveal">
        These levels are illustrative starting points. Every engagement would begin with listening to
        an organization’s actual needs and resources.
      </p>
    </div>
  </section>`}var _e=[{number:`Step 01`,icon:o.search,title:`Understand`,copy:`Understand the organization’s current challenges, context, and needs — before suggesting any tool.`},{number:`Step 02`,icon:o.clipboard,title:`Plan`,copy:`Identify suitable digital solutions based on its requirements, capacity, and priorities.`},{number:`Step 03`,icon:o.code,title:`Develop`,copy:`Design and develop appropriate technology solutions with the organization’s input along the way.`},{number:`Step 04`,icon:o.hands,title:`Support`,copy:`Provide guidance and assistance according to the agreed scope, at a pace the organization can sustain.`}];function ve(){return`<section class="section process" id="process" aria-labelledby="process-title">
    <div class="container">
      <div class="process-head reveal">
        <div>
          <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>How We Can Help</p>
          <h2 class="section-title" id="process-title">
            A Thoughtful Path<br />
            <span class="title-muted">from Challenge to Solution.</span>
          </h2>
        </div>
        <div class="process-intro">
          <p>
            ConnectChurch proposes a simple, collaborative four-step approach — starting with
            listening, and ending with support that fits the organization’s scope.
          </p>
          <p class="process-status">
            <span class="status-dot" aria-hidden="true"></span>
            Proposed service approach · not an operating service.
          </p>
        </div>
      </div>

      <ol class="process-track">
        ${_e.map((e,t)=>`<li class="process-step reveal" style="--delay: ${t*110}ms">
              <span class="step-icon" aria-hidden="true">${e.icon}</span>
              <span class="step-number">${e.number}</span>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
            </li>`).join(``)}
      </ol>
    </div>
  </section>`}var ye=Array.from({length:28},(e,t)=>t+1),be=new Set([4,11,17,24]);function m(e){return`<div class="browser-bar" aria-hidden="true">
    <span class="browser-dot"></span><span class="browser-dot"></span><span class="browser-dot"></span>
    <span class="browser-url">${e}</span>
  </div>`}function xe(){return`<div class="browser">
    ${m(`sample-organization`)}
    <div class="mock-site" aria-hidden="true">
      <div class="mock-site-nav">
        <strong>Sample Organization</strong>
        <span>Home</span><span>About</span><span>Activities</span>
        <em>Contact</em>
      </div>
      <div class="mock-site-hero">
        <p class="mock-kicker">A community of service</p>
        <p class="mock-headline">A place to gather.<br />A community to serve.</p>
        <span class="mock-cta">Learn more</span>
      </div>
      <div class="mock-site-cards">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>`}function Se(){return`<div class="browser">
    ${m(`sample-dashboard`)}
    <div class="mock-dash" aria-hidden="true">
      <aside class="mock-side">
        <strong>Sample Org</strong>
        <span class="is-active">Overview</span>
        <span>Members</span>
        <span>Events</span>
        <span>Documents</span>
      </aside>
      <div class="mock-dash-main">
        <div class="mock-dash-top"><strong>Overview</strong><em>Sample data</em></div>
        <div class="mock-stats">
          <div><b>128</b><small>Members</small></div>
          <div><b>06</b><small>Events</small></div>
          <div><b>24</b><small>Volunteers</small></div>
        </div>
        <div class="mock-chart">
          <span style="--h: 42%"></span><span style="--h: 68%"></span><span style="--h: 54%"></span>
          <span style="--h: 82%"></span><span style="--h: 60%"></span><span style="--h: 74%"></span>
          <span style="--h: 46%"></span>
        </div>
        <div class="mock-rows"><span></span><span></span><span></span></div>
      </div>
    </div>
  </div>`}function Ce(){return`<div class="browser">
    ${m(`sample-events`)}
    <div class="mock-events" aria-hidden="true">
      <div class="mock-events-head">
        <strong>Activities</strong>
        <em>Sample month</em>
      </div>
      <div class="mock-calendar">
        ${[`S`,`M`,`T`,`W`,`T`,`F`,`S`].map(e=>`<span class="mock-dow">${e}</span>`).join(``)}
        ${ye.map(e=>`<span class="mock-day${be.has(e)?` is-marked`:``}">${e}</span>`).join(``)}
      </div>
      <div class="mock-event-list">
        <div><i></i><span>Community Outreach</span><small>Sample</small></div>
        <div><i></i><span>Volunteer Orientation</span><small>Sample</small></div>
      </div>
    </div>
  </div>`}var we=[{title:`Organization Website`,copy:`A clear public home for your organization’s story, leadership, announcements, and activities.`,render:xe},{title:`Management Dashboard`,copy:`A private overview for authorized officers — records, schedules, and summaries in one view.`,render:Se},{title:`Events & Activities Portal`,copy:`An organized calendar where the community can find gatherings and activity information.`,render:Ce}];function Te(){return`<section class="section showcase" id="showcase" aria-labelledby="showcase-title">
    <div class="showcase-glow" aria-hidden="true"></div>
    <div class="container">
      <div class="showcase-head reveal">
        <div>
          <p class="eyebrow eyebrow-light"><span class="eyebrow-line" aria-hidden="true"></span>Featured Solution Showcase</p>
          <h2 class="section-title title-on-dark" id="showcase-title">Built Around Your Organization’s Needs.</h2>
        </div>
        <p class="showcase-intro">
          Illustrative previews of the kind of platforms ConnectChurch hopes to develop with
          participating organizations. Sample content only — no organization is represented.
        </p>
      </div>

      <div class="showcase-grid">
        ${we.map((e,t)=>`<figure class="mockup reveal" style="--delay: ${t*100}ms">
              <p class="mockup-badge"><span class="status-dot" aria-hidden="true"></span>Concept Preview — Not Yet Operational</p>
              ${e.render()}
              <figcaption>
                <h3>${e.title}</h3>
                <p>${e.copy}</p>
              </figcaption>
            </figure>`).join(``)}
      </div>

      <p class="showcase-note reveal">
        All interfaces shown are static concepts with placeholder content. They are not connected to a
        database, account system, or live service.
      </p>
    </div>
  </section>`}function Ee(){return`<section class="section digital-cta" aria-labelledby="digital-cta-title">
    <div class="container">
      <div class="digital-cta-panel reveal">
        <div class="digital-cta-copy">
          <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Let’s Explore</p>
          <h2 class="digital-cta-title" id="digital-cta-title">
            Have a Digital Challenge? Let’s Explore a Solution.
          </h2>
          <p class="digital-cta-text">
            Tell us about the technology challenges your organization is facing. ConnectChurch aims
            to explore practical solutions that can help your organization become more connected,
            organized, and digitally empowered.
          </p>
        </div>
        <div class="digital-cta-actions">
          <a class="btn btn-forest" href="#about">Explore ConnectChurch</a>
          <a class="btn btn-outline" href="#contact">Contact Our Initiative</a>
        </div>
      </div>
    </div>
  </section>`}function De(){return`<section class="section faith-commitment" id="commitment" aria-labelledby="commitment-title">
    <div class="faith-commitment-glow" aria-hidden="true"></div>

    <div class="container commitment-grid">
      <figure class="commitment-media reveal" data-anim="left">
        <img
          src="images/together.jpg"
          alt="People of different ages and backgrounds walking and talking together outdoors in warm afternoon light"
          width="1248"
          height="832"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Walking together, Marinduque.</figcaption>
      </figure>

      <div class="commitment-copy reveal" data-anim="right" style="--delay: 100ms">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-line" aria-hidden="true"></span>Our Commitment to Every Faith</p>
        <h2 class="section-title title-on-dark" id="commitment-title">
          Every Faith Community Deserves Respect. Every Organization Deserves an Opportunity to
          Connect.
        </h2>
        <p>ConnectChurch recognizes the diversity of religious beliefs and traditions across Marinduque.</p>
        <p>
          We do not seek to influence, replace, or interfere with the beliefs, teachings, leadership,
          or internal practices of any religious organization.
        </p>
        <p>
          Our purpose is to provide technology and digital opportunities that participating
          organizations can use according to their own needs, values, and preferences.
        </p>
        <p class="commitment-highlight">
          Different beliefs. Different traditions. One shared opportunity to connect and serve
          communities.
        </p>
      </div>
    </div>
  </section>`}var Oe=[{icon:o.users,title:`Voluntary Participation`,copy:`Joining ConnectChurch is always a choice. Organizations take part only when it genuinely serves their mission and community.`},{icon:o.compass,title:`Respect for Religious Independence`,copy:`We never interfere with the beliefs, teachings, leadership, or internal practices of any organization.`},{icon:o.lock,title:`Responsible Data Privacy`,copy:`Information is handled carefully, transparently, and only with the knowledge and consent of each organization.`},{icon:o.key,title:`Equal Access to Digital Opportunities`,copy:`Support is offered fairly to communities of every size, tradition, and level of digital experience.`}];function ke(){return`<section class="section promises" id="promises" aria-labelledby="promises-title">
    <div class="container">
      <div class="promises-head reveal">
        <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Our Commitment</p>
        <h2 class="section-title" id="promises-title">
          Built on Respect.<br />
          <span class="title-muted">Driven by Service.</span>
        </h2>
        <p class="promises-intro">
          Every conversation, tool, and collaboration is guided by four commitments to the
          organizations we hope to serve.
        </p>
      </div>

      <div class="promises-grid">
        ${Oe.map((e,t)=>`<article class="promise reveal" style="--delay: ${t*90}ms">
              <span class="promise-icon" aria-hidden="true">${e.icon}</span>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
            </article>`).join(``)}
      </div>
    </div>
  </section>`}var Ae=[{name:`Boac`,note:`The capital town, and a natural meeting point for faith communities across the island.`},{name:`Mogpog`,note:`A close-knit municipality where local faith communities can stay connected and supported.`},{name:`Gasan`,note:`A coastal community with a strong sense of place and a shared commitment to service.`},{name:`Buenavista`,note:`Farming and fishing communities with opportunities to connect across the western coast.`},{name:`Torrijos`,note:`A northern coastal town with deep community roots and a spirit of cooperation.`},{name:`Santa Cruz`,note:`Wide, diverse communities across the island’s largest municipality, each with its own identity.`}];function h(){return`<section class="section marinduque" id="community" aria-labelledby="marinduque-title">
    <div class="marinduque-banner reveal">
      <img
        src="images/marinduque.jpg"
        alt="Aerial view of the Marinduque coastline at sunrise, with green mountains and coastal communities"
        width="1248"
        height="832"
        loading="lazy"
        decoding="async"
        data-parallax
      />
      <div class="marinduque-overlay" aria-hidden="true"></div>
      <div class="marinduque-map" aria-hidden="true">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="none">
          <g fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="1">
            <path d="M-40 300 C 180 240, 300 340, 470 285 S 760 210, 940 265 S 1150 330, 1260 280" />
            <path d="M-40 340 C 200 285, 330 375, 500 320 S 790 250, 970 300 S 1170 355, 1260 315" />
            <path d="M-40 240 C 170 185, 290 285, 460 230 S 750 155, 930 210 S 1140 275, 1260 225" />
          </g>
          <g fill="rgba(213,175,99,0.4)">
            <circle cx="220" cy="285" r="2" /><circle cx="300" cy="255" r="2" /><circle cx="380" cy="300" r="2" />
            <circle cx="470" cy="265" r="2" /><circle cx="560" cy="240" r="2" /><circle cx="650" cy="270" r="2" />
            <circle cx="740" cy="235" r="2" /><circle cx="830" cy="260" r="2" /><circle cx="920" cy="285" r="2" />
          </g>
        </svg>
      </div>
      <div class="container marinduque-banner-content">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-line" aria-hidden="true"></span>Community</p>
        <h2 class="section-title title-on-dark lines" id="marinduque-title">
          <span class="line"><span>Connecting Faith Communities</span></span>
          <span class="line"><span class="accent">Across Marinduque.</span></span>
        </h2>
        <p>
          Six municipalities. One island. A shared commitment to the people and places that make
          Marinduque home.
        </p>
      </div>
    </div>

    <div class="container marinduque-body">
      <div class="municipality-grid">
        ${Ae.map((e,t)=>`<article class="municipality-card reveal" style="--delay: ${t%3*90}ms">
              <span class="municipality-index" aria-hidden="true">0${t+1}</span>
              <span
                class="municipality-map"
                aria-hidden="true"
                style="--map-x: ${26+t%3*17}%; --map-y: ${42+t%2*18}%"
              >
                <svg viewBox="0 0 160 90" preserveAspectRatio="none">
                  <path d="M2 62c22-30 52-38 78-28s46 20 78 6" />
                  <path d="M2 74c26-22 52-28 80-20s48 14 76 2" />
                  <path d="M8 50c24-24 50-30 74-22s44 14 70 6" />
                </svg>
                <span class="municipality-map-dot"></span>
              </span>
              <span class="municipality-pin" aria-hidden="true">${o.pin}</span>
              <h3>${e.name}</h3>
              <p>${e.note}</p>
            </article>`).join(``)}
      </div>
      <p class="municipality-note reveal">
        <span class="pulse-dot" aria-hidden="true"></span>
        Municipalities describe the initiative’s intended coverage. Listing does not imply partnership,
        participation, or endorsement by any local organization or government unit.
      </p>
    </div>
  </section>`}var g=[{icon:o.users,title:`Faith & community leaders`,copy:`Learn how your church, congregation, or community could participate and what ConnectChurch could offer.`},{icon:o.church,title:`Religious organizations`,copy:`Share the work your organization is doing and the digital needs your team is facing.`},{icon:o.heart,title:`Community partners`,copy:`Explore ways to support faith communities across Marinduque through respectful collaboration.`}];function _(){return`<section class="section contact" id="contact" aria-labelledby="contact-title">
    <div class="contact-glow" aria-hidden="true"></div>
    <div class="container contact-grid">
      <div class="contact-copy reveal">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-line" aria-hidden="true"></span>Contact</p>
        <h2 class="section-title title-on-dark" id="contact-title">
          Let's Start a<br />
          <span class="accent">Conversation.</span>
        </h2>
        <p>
          ConnectChurch is being introduced personally, community by community. If you lead a
          church, religious organization, or faith-based group and would like to be part of the
          conversation, we would be glad to hear from you.
        </p>
        <a class="btn btn-gold" href="#mission">
          Explore ConnectChurch
          <span class="btn-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </a>
        <p class="contact-meta">
          <span class="pulse-dot" aria-hidden="true"></span>
          Marinduque, Philippines · A BetterGo Marinduque Initiative
        </p>
      </div>

      <div class="contact-panel reveal" data-anim="right" style="--delay: 120ms">
        <p class="contact-panel-title">Who we would love to hear from</p>
        <div class="contact-list">
          ${g.map(e=>`<div class="contact-row">
                <span class="contact-icon" aria-hidden="true">${e.icon}</span>
                <div>
                  <h3>${e.title}</h3>
                  <p>${e.copy}</p>
                </div>
              </div>`).join(``)}
        </div>
        <div class="contact-note">
          ${o.mail}
          <p>Official contact details will be published here as the initiative launches.</p>
        </div>
      </div>
    </div>
  </section>`}function v(){return`<section class="section closing-cta" aria-labelledby="cta-title">
    <div class="container">
      <div class="cta-panel reveal">
        <div class="cta-rings" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <p class="eyebrow eyebrow-light"><span class="eyebrow-line" aria-hidden="true"></span>A Shared Opportunity</p>
        <h2 class="cta-title" id="cta-title">Let's Build a More Connected Community Together.</h2>
        <p class="cta-copy">
          Whether you represent a church, religious organization, or faith-based community group,
          ConnectChurch welcomes the opportunity to introduce digital solutions that may help your
          organization grow and serve more effectively.
        </p>
        <div class="cta-actions">
          <a class="btn btn-gold" href="#solutions">
            Discover Digital Solutions
            <span class="btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </span>
          </a>
          <a class="btn btn-ghost" href="#contact">Contact ConnectChurch</a>
        </div>
      </div>
    </div>
  </section>`}function y(){return`<footer class="site-footer">
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
          ${e()}
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
  </footer>`}function b(e){if(!e)return;let t=e.getContext(`2d`);if(!t)return;let n=window.matchMedia(`(prefers-reduced-motion: reduce)`),r={x:0,y:0},i=0,a=0,o=[],s=null,c=!0;function l(){let n=e.getBoundingClientRect(),r=Math.min(window.devicePixelRatio||1,2);i=n.width,a=n.height,e.width=Math.round(i*r),e.height=Math.round(a*r),t.setTransform(r,0,0,r,0,0);let s=Math.max(18,Math.min(64,Math.round(i/24)));o=Array.from({length:s},()=>({x:Math.random()*i,y:Math.random()*a,vx:(Math.random()-.5)*.16,vy:(Math.random()-.5)*.16,r:Math.random()*1.5+.7,gold:Math.random()>.72,phase:Math.random()*Math.PI*2}))}function u(e=0){t.clearRect(0,0,i,a);let r=Math.min(150,i*.16);for(let e=0;e<o.length;e+=1){let n=o[e];for(let i=e+1;i<o.length;i+=1){let e=o[i],a=n.x-e.x,s=n.y-e.y,c=Math.hypot(a,s);if(c<r){let i=(1-c/r)*.26;t.strokeStyle=`rgba(213, 175, 99, ${i.toFixed(3)})`,t.lineWidth=.7,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(e.x,e.y),t.stroke()}}}for(let r of o){let i=n.matches?1:.65+Math.sin(e/1600+r.phase)*.35;t.beginPath(),t.fillStyle=r.gold?`rgba(213, 175, 99, ${(.75*i).toFixed(3)})`:`rgba(180, 232, 208, ${(.55*i).toFixed(3)})`,t.arc(r.x,r.y,r.r,0,Math.PI*2),t.fill()}}function d(e){if(c){for(let e of o)e.x+=e.vx+r.x*.05,e.y+=e.vy+r.y*.05,e.x<-20&&(e.x=i+20),e.x>i+20&&(e.x=-20),e.y<-20&&(e.y=a+20),e.y>a+20&&(e.y=-20);r.x*=.94,r.y*=.94,u(e),s=requestAnimationFrame(d)}}function f(){s===null&&(n.matches?u():s=requestAnimationFrame(d))}function p(){s!==null&&(cancelAnimationFrame(s),s=null)}l(),f(),new ResizeObserver(()=>{l(),n.matches&&u()}).observe(e),`IntersectionObserver`in window&&new IntersectionObserver(e=>{c=e[0]?.isIntersecting??!0,c?f():p()},{threshold:.02}).observe(e),n.addEventListener(`change`,()=>{p(),f(),n.matches&&u()}),window.addEventListener(`pointermove`,t=>{e.getBoundingClientRect().bottom<0||(r.x=(t.clientX/window.innerWidth-.5)*.6,r.y=(t.clientY/window.innerHeight-.5)*.6)},{passive:!0})}var x={meta:{title:`ConnectChurch — One Faith Community. Connected Together.`,description:`ConnectChurch is an inclusive digital initiative of BetterGo Marinduque connecting churches, religious organizations, and faith communities across Marinduque.`,ogTitle:`ConnectChurch — Where Faith Communities Connect`}},S={text:JSON.parse(`{"Skip to content":"Lumaktaw sa nilalaman","Home":"Tahanan","About":"Tungkol","Our Mission":"Misyon Namin","Faith Communities":"Mga Pamayanan","Digital Solutions":"Digital na Solusyon","Community":"Komunidad","Contact":"Kontak","Explore ConnectChurch":"Tuklasin ang ConnectChurch","A BetterGo Marinduque Initiative":"Isang Inisyatiba ng BetterGo Marinduque","Where Faith Communities":"Dito Nagkakaugnay ang mga","Connect.":"Pamayanang may Pananampalataya.","Bringing churches, religious organizations, and faith communities across Marinduque closer through technology, collaboration, and meaningful community connections.":"Pinaglalapit ang mga simbahan, relihiyosong organisasyon, at iba't ibang pamayanang may pananampalataya sa buong Marinduque sa pamamagitan ng teknolohiya, pagtutulungan, at makabuluhang ugnayan.","Discover ConnectChurch":"Tuklasin ang ConnectChurch","Explore Our Mission":"Tingnan ang Aming Misyon","Open to all faiths":"Bukas sa lahat ng pananampalataya","Respect for every belief, tradition, and community":"Paggalang sa bawat paniniwala, tradisyon, at komunidad","Rooted in Marinduque":"Nakaugat sa Marinduque","Built with the communities of our island, for our island":"Itinayo kasama ang mga komunidad ng ating isla, para sa ating isla","Technology with purpose":"Teknolohiyang may layunin","Practical digital tools, offered with care":"Mga praktikal na digital na kagamitan, inihahandog nang may malasakit","Digital connection for faith communities":"Digital na ugnayan para sa mga pamayanang may pananampalataya","About ConnectChurch":"Tungkol sa ConnectChurch","More Than a Platform.":"Higit Pa sa Isang Plataporma.","A Connected Faith Community.":"Isang Nagkakaugnay na Pamayanang may Pananampalataya.","Every church, religious organization, and faith community has its own mission, ministries, and identity. ConnectChurch aims to provide a shared digital space where participating communities can discover opportunities, access technology solutions, and strengthen their connection with the people they serve.":"Bawat simbahan, relihiyosong organisasyon, at pamayanang may pananampalataya ay may sariling misyon, ministeryo, at pagkakakilanlan. Layunin ng ConnectChurch na magbigay ng isang pinagsamang digital na espasyo kung saan ang mga kalahok na komunidad ay makakatuklas ng mga pagkakataon, makaka-access ng mga solusyong teknolohiya, at mapapalakas ang kanilang ugnayan sa mga taong pinaglilingkuran nila.","This is an introductory initiative — a thoughtful first step toward a connected faith community in Marinduque, shaped together with the communities it serves.":"Ito ay isang panimulang inisyatiba — isang maingat na unang hakbang tungo sa isang nagkakaugnay na pamayanang may pananampalataya sa Marinduque, na hinuhubog kasama ang mga komunidad na pinaglilingkuran nito.","A shared digital space for churches, religious organizations, and faith communities":"Isang pinagsamang digital na espasyo para sa mga simbahan, relihiyosong organisasyon, at pamayanang may pananampalataya","Access to practical technology and digital opportunities":"Pag-access sa praktikal na teknolohiya at mga digital na pagkakataon","Stronger connection with members and local communities":"Mas matibay na ugnayan sa mga miyembro at lokal na komunidad","No religion or denomination is favored. Every participating community is welcomed and respected.":"Walang pinapaborang relihiyon o denominasyon. Ang bawat kalahok na komunidad ay malugod na tinatanggap at iginagalang.","Our Story":"Aming Kuwento","Every Community Has a Story.":"Bawat Pamayanan ay may Kuwento.","Every Faith Deserves a Connection.":"Bawat Pananampalataya ay Karapat-dapat sa Ugnayan.","Across Marinduque, different religious communities and faith-based organizations continue to serve people, strengthen families, organize activities, and contribute to their local communities.":"Sa buong Marinduque, patuloy na naglilingkod ang iba't ibang relihiyosong komunidad at faith-based na organisasyon sa mga tao, nagpapalakas ng mga pamilya, nagsasaayos ng mga aktibidad, at nag-aambag sa kanilang mga lokal na komunidad.","However, some organizations face challenges in accessing digital tools, managing information, communicating activities, and expanding their community initiatives.":"Gayunpaman, may mga organisasyong nahihirapan sa pag-access ng mga digital na kagamitan, pamamahala ng impormasyon, pagpapabatid ng mga aktibidad, at pagpapalawak ng kanilang mga inisyatiba sa komunidad.","ConnectChurch was envisioned as a digital initiative that aims to help address these challenges.":"Ang ConnectChurch ay binuo bilang isang digital na inisyatiba na naglalayong tumulong sa pagtugon sa mga hamong ito.","Through accessible technology and meaningful collaboration, we want to help religious organizations become more connected, organized, and digitally empowered.":"Sa pamamagitan ng abot-kayang teknolohiya at makabuluhang pagtutulungan, nais naming matulungan ang mga relihiyosong organisasyon na maging mas konektado, organisado, at may kakayahan sa digital.","Technology is only useful when it helps people serve people.":"Mahalaga lamang ang teknolohiya kapag tinutulungan nito ang mga tao na maglingkod sa kapwa.","Marinduque, Philippines":"Marinduque, Pilipinas","Communities serving communities":"Mga komunidad na naglilingkod sa komunidad","Technology That Connects.":"Teknolohiyang Nag-uugnay.","Innovation That Serves.":"Inobasyong Naglilingkod.","To":"Upang","connect":"pag-ugnayin","support":"suportahan",", and":", at","empower":"bigyang-kakayahan","churches, religious organizations, and faith communities throughout Marinduque by providing accessible digital solutions, technology assistance, and opportunities for meaningful collaboration.":"ang mga simbahan, relihiyosong organisasyon, at pamayanang may pananampalataya sa buong Marinduque sa pamamagitan ng mga abot-kayang digital na solusyon, tulong sa teknolohiya, at mga pagkakataon para sa makabuluhang pagtutulungan.","Our Vision":"Aming Bisyon","A More Connected and":"Isang Higit na Nagkakaugnay at","Digitally Empowered":"Napapalakas ng Teknolohiyang","Faith Community.":"Pamayanang may Pananampalataya.","To build an":"Upang makabuo ng isang","inclusive digital environment":"inklusibong digital na kapaligiran","where religious organizations and faith communities across Marinduque can access modern technology, strengthen their operations, connect with people, and contribute to":"kung saan ang mga relihiyosong organisasyon at pamayanang may pananampalataya sa buong Marinduque ay makaka-access ng makabagong teknolohiya, mapapalakas ang kanilang operasyon, makakakaugnay ng mga tao, at makakapag-ambag sa","stronger communities":"mas matatag na komunidad","Technology":"Teknolohiya","Connection":"Ugnayan","Connected by purpose":"Nagkakaugnay sa Layunin","Many paths.":"Maraming landas.","Shared purpose.":"Iisang layunin.","ConnectChurch brings faith communities into one respectful digital space — not to blend beliefs, but to share tools, service, and friendship.":"Pinagsasama ng ConnectChurch ang mga pamayanang may pananampalataya sa isang digital na espasyong puno ng paggalang — hindi upang paghaluin ang mga paniniwala, kundi upang magbahagi ng kagamitan, paglilingkod, at pagkakaibigan.","Faith":"Pananampalataya","Unity":"Pagkakaisa","Service":"Paglilingkod","Collaboration":"Pagtutulungan","Respect":"Paggalang","Lived with conviction":"Isinasabuhay nang may paninindigan","Without erasing difference":"Nang hindi binubura ang pagkakaiba","Rooted in place":"Nakaugat sa lugar","Offered to others":"Iniaalay sa kapwa","Stronger together":"Mas matatag nang sama-sama","For every belief":"Para sa bawat paniniwala","Our Purpose":"Aming Layunin","Why ConnectChurch":"Bakit Mahalaga","Matters.":"ang ConnectChurch.","Four practical ways this initiative hopes to serve religious organizations and faith communities — with tools that fit their resources and respect their independence.":"Apat na praktikal na paraan upang maglingkod ang inisyatibang ito sa mga relihiyosong organisasyon at pamayanang may pananampalataya — gamit ang mga kagamitang angkop sa kanilang kakayahan at gumagalang sa kanilang kalayaan.","Digital Accessibility":"Digital na Pag-access","Help religious organizations discover and access affordable or accessible digital tools, regardless of their size and available resources.":"Tulungan ang mga relihiyosong organisasyon na matuklasan at maka-access ang abot-kaya o madaling gamiting digital na kagamitan, anuman ang laki at kakayahan nito.","Organizational Support":"Suporta sa Organisasyon","Provide opportunities to improve administrative processes, communication, information management, and organizational coordination.":"Magbigay ng mga pagkakataong mapabuti ang mga prosesong administratibo, komunikasyon, pamamahala ng impormasyon, at koordinasyon ng organisasyon.","Community Connection":"Ugnayan sa Komunidad","Help participating organizations reach their communities through digital information, announcements, activities, and outreach initiatives.":"Tulungan ang mga kalahok na organisasyon na maabot ang kanilang komunidad sa pamamagitan ng digital na impormasyon, anunsyo, aktibidad, at mga inisyatibang pangkomunidad.","Meaningful Collaboration":"Makabuluhang Pagtutulungan","Encourage respectful connections and voluntary cooperation among different religious organizations and faith communities.":"Hikayatin ang magalang na ugnayan at kusang pagtutulungan sa iba't ibang relihiyosong organisasyon at pamayanang may pananampalataya.","Our Core Values":"Aming Mga Pangunahing Pagpapahalaga","The Values Behind":"Ang Mga Pagpapahalagang Nasa Likod ng","Every Connection.":"Bawat Ugnayan.","These values shape how ConnectChurch works with every participating organization — whatever its size, tradition, or available resources.":"Ang mga pagpapahalagang ito ang humuhubog sa paraan ng pakikipagtulungan ng ConnectChurch sa bawat kalahok na organisasyon — anuman ang laki, tradisyon, o kakayahan nito.","We respect the identity, beliefs, traditions, and independence of every participating religious organization.":"Iginagalang namin ang pagkakakilanlan, paniniwala, tradisyon, at kalayaan ng bawat kalahok na relihiyosong organisasyon.","Inclusivity":"Inklusibidad","We welcome diverse faith communities and organizations without discrimination based on religious denomination or affiliation.":"Malugod naming tinatanggap ang iba't ibang pamayanang may pananampalataya at organisasyon nang walang diskriminasyon batay sa denominasyon o kinabibilangang relihiyon.","We believe technology should help organizations serve people and communities more effectively.":"Naniniwala kami na ang teknolohiya ay dapat tumulong sa mga organisasyon na mas mabisang maglingkod sa mga tao at komunidad.","We encourage meaningful connections and respectful collaboration while recognizing differences in beliefs and practices.":"Hinihikayat namin ang makabuluhang ugnayan at magalang na pagtutulungan habang iginagalang ang pagkakaiba sa paniniwala at kasanayan.","Innovation":"Inobasyon","We promote practical and accessible digital solutions that help organizations adapt to a changing world.":"Itinataguyod namin ang praktikal at abot-kayang digital na solusyon na tumutulong sa mga organisasyon na makaangkop sa nagbabagong panahon.","Integrity":"Katapatan","We value transparency, responsible technology, data privacy, and accountability in every initiative.":"Pinahahalagahan namin ang transparency, responsableng teknolohiya, privacy ng datos, at pananagutan sa bawat inisyatiba.","Different Faiths.":"Iba't Ibang Pananampalataya.","Shared Commitment to Community.":"Iisang Pangako sa Komunidad.","Marinduque is home to diverse communities and organizations. ConnectChurch envisions a digital space where participating faith communities can access technology, strengthen their organizations, share community initiatives, and discover opportunities to work together.":"Tahanan ang Marinduque ng iba't ibang komunidad at organisasyon. Inaasahan ng ConnectChurch ang isang digital na espasyo kung saan ang mga kalahok na pamayanang may pananampalataya ay makaka-access ng teknolohiya, mapapalakas ang kanilang organisasyon, makakapagbahagi ng mga inisyatibang pangkomunidad, at makakatuklas ng mga pagkakataong magtulungan.","Catholic, Protestant, Born Again, Baptist, Methodist, Iglesia ni Cristo, Seventh-day Adventist, Muslim, and other faith communities are all welcome to take part.":"Ang mga Katoliko, Protestante, Born Again, Baptist, Methodist, Iglesia ni Cristo, Seventh-day Adventist, Muslim, at iba pang pamayanang may pananampalataya ay malugod na tinatanggap na makilahok.","Shared commitment":"Iisang pangako","Different beliefs. One island. A common care for the people who live here.":"Iba't ibang paniniwala. Isang isla. Iisang malasakit para sa mga taong naninirahan dito.","Christian Communities":"Mga Pamayanang Kristiyano","Congregations and groups from Christian traditions of many kinds, each with its own identity, leadership, and life of faith.":"Mga kongregasyon at grupo mula sa iba't ibang tradisyong Kristiyano, bawat isa ay may sariling pagkakakilanlan, pamumuno, at buhay pananampalataya.","Catholic Communities":"Mga Pamayanang Katoliko","Parishes and Catholic lay communities serving their members and the neighborhoods around them.":"Mga parokya at laykong pamayanang Katoliko na naglilingkod sa kanilang mga miyembro at sa mga kapitbahayan.","Protestant Denominations":"Mga Denominasyong Protestante","Protestant churches and fellowships across a wide range of traditions and expressions of faith.":"Mga simbahan at fellowship na Protestante sa iba't ibang tradisyon at paraan ng pagpapahayag ng pananampalataya.","Muslim Communities":"Mga Pamayanang Muslim","Muslim congregations and community organizations contributing to the life of the island.":"Mga kongregasyon at organisasyong pangkomunidad ng Muslim na nag-aambag sa buhay ng isla.","Other Religious Organizations":"Iba Pang Relihiyosong Organisasyon","Recognized religious groups and spiritual communities of other traditions, welcomed with respect.":"Mga kinikilalang relihiyosong grupo at espirituwal na komunidad ng iba pang tradisyon, tinatanggap nang may paggalang.","Faith-Based Community Groups":"Mga Grupong Pangkomunidad na may Pananampalataya","Faith-inspired organizations and volunteer groups working for the common good of their communities.":"Mga organisasyong inspirasyon ng pananampalataya at grupong boluntaryo na nagtatrabaho para sa kabutihang panlahat ng kanilang komunidad.","These are illustrative categories, not confirmed participants. ConnectChurch does not claim any organization as a partner or participant without their consent.":"Ang mga ito ay halimbawang kategorya, hindi kumpirmadong kalahok. Hindi inaangkin ng ConnectChurch ang anumang organisasyon bilang katuwang o kalahok nang walang pahintulot nito.","Our Digital Solutions":"Aming Mga Digital na Solusyon","Technology Solutions":"Mga Solusyong Teknolohiya","Designed for Every":"Dinisenyo para sa Bawat","Every religious organization has unique needs and challenges. ConnectChurch aims to provide accessible, practical, and modern digital solutions that help organizations improve their operations, strengthen communication, and expand their community impact.":"Bawat relihiyosong organisasyon ay may natatanging pangangailangan at hamon. Layunin ng ConnectChurch na magbigay ng abot-kaya, praktikal, at modernong digital na solusyon na tumutulong sa mga organisasyon na mapabuti ang kanilang operasyon, mapalakas ang komunikasyon, at mapalawak ang kanilang epekto sa komunidad.","Introductory phase · these solution areas are being prepared, not yet operating.":"Panimulang yugto · inihahanda pa ang mga solusyong ito, hindi pa gumagana."}`)},C={text:{Communication:`Komunikasyon`,"Web Presence":`Presensya sa Web`,"Organization Website":`Website ng Organisasyon`,"A professional online home that introduces your organization, shares its story, and keeps your community informed.":`Isang propesyonal na online na tahanan na nagpapakilala sa iyong organisasyon, nagbabahagi ng kuwento nito, at nagpapaalam sa iyong komunidad.`,"Learn more":`Matuto pa`,"Show less":`Mas kaunti`,"Possible features":`Mga posibleng feature`,"Organization profile":`Profile ng organisasyon`,"About and history":`Tungkol at kasaysayan`,"Leadership information":`Impormasyon tungkol sa pamumuno`,"Contact details":`Detalye ng kontak`,"Announcements and activity highlights":`Mga anunsyo at tampok na aktibidad`,Operations:`Operasyon`,"Organization Management System":`Sistema ng Pamamahala ng Organisasyon`,"Digital tools that help organize administrative activities, records, and internal coordination in one place.":`Mga digital na kagamitan na tumutulong sa pagsasaayos ng mga gawaing administratibo, talaan, at panloob na koordinasyon sa isang lugar.`,"Organization records":`Mga talaan ng organisasyon`,"Member information management":`Pamamahala ng impormasyon ng mga miyembro`,"Attendance management":`Pamamahala ng attendance`,"Ministry or department records":`Mga talaan ng ministeryo o departamento`,"Internal administrative tools":`Mga panloob na kagamitang administratibo`,Events:`Mga Aktibidad`,"Events & Activities Management":`Pamamahala ng mga Aktibidad at Kaganapan`,"Present gatherings and activities clearly, with schedules and information your community can find easily.":`Ipresenta nang malinaw ang mga pagtitipon at aktibidad, kasama ang iskedyul at impormasyong madaling makita ng iyong komunidad.`,"Event calendars":`Mga kalendaryo ng aktibidad`,"Worship or gathering schedules":`Iskedyul ng pagsamba o pagtitipon`,"Community activities":`Mga aktibidad sa komunidad`,"Registration information":`Impormasyon sa pagpaparehistro`,"Event announcements":`Mga anunsyo ng aktibidad`,"Community Announcements":`Mga Anunsyo sa Komunidad`,"A simple digital space for notices, reminders, and updates that matter to your community.":`Isang simpleng digital na espasyo para sa mga abiso, paalala, at update na mahalaga sa iyong komunidad.`,"Public announcements":`Mga pampublikong anunsyo`,"Activity updates":`Mga update sa aktibidad`,"Community notices":`Mga abiso sa komunidad`,"Important reminders":`Mahahalagang paalala`,"Information publishing":`Pag-publish ng impormasyon`,Care:`Pag-aalaga`,"Prayer & Pastoral Care":`Panalangin at Pangangalagang Pastoral`,"Optional tools for organizations that offer prayer or pastoral support to their members.":`Opsyonal na kagamitan para sa mga organisasyong nagbibigay ng panalangin o pastoral na suporta sa kanilang mga miyembro.`,"Prayer request inquiries":`Mga katanungan tungkol sa kahilingan sa panalangin`,"Pastoral appointment requests":`Mga kahilingan sa appointment na pastoral`,"Private communication channels":`Mga pribadong channel ng komunikasyon`,"Confidentiality controls":`Mga kontrol sa pagiging kumpidensyal`,"Optional and shaped according to each organization’s beliefs, practices, and leadership.":`Opsyonal at iniaayon sa paniniwala, kasanayan, at pamumuno ng bawat organisasyon.`,Volunteers:`Mga Boluntaryo`,"Volunteer Management":`Pamamahala ng mga Boluntaryo`,"Coordinate volunteers, schedules, and service opportunities without scattered messages and spreadsheets.":`I-coordinate ang mga boluntaryo, iskedyul, at pagkakataong maglingkod nang walang kalat na mensahe at spreadsheet.`,"Volunteer directories":`Mga direktoryo ng boluntaryo`,"Activity assignments":`Mga takdang aktibidad`,"Volunteer schedules":`Mga iskedyul ng boluntaryo`,"Participation records":`Mga talaan ng partisipasyon`,"Community service coordination":`Koordinasyon ng serbisyong pangkomunidad`,Outreach:`Tulong sa Komunidad`,"Community Outreach Management":`Pamamahala ng Tulong sa Komunidad`,"Support charitable and community-oriented activities with organized information and coordination.":`Suportahan ang mga gawaing kawanggawa at pangkomunidad sa pamamagitan ng organisadong impormasyon at koordinasyon.`,"Outreach program information":`Impormasyon ng programa ng tulong`,"Beneficiary coordination":`Koordinasyon ng mga benepisyaryo`,"Relief activity monitoring":`Pagsubaybay sa mga gawaing relief`,"Volunteer coordination":`Koordinasyon ng mga boluntaryo`,"Community project documentation":`Dokumentasyon ng proyekto sa komunidad`,Finance:`Pananalapi`,"Donation & Financial Record Management":`Pamamahala ng mga Donasyon at Talaang Pinansyal`,"Optional tools for responsible financial administration, kept private to authorized officers.":`Opsyonal na kagamitan para sa responsableng pamamahala ng pananalapi, pribado para sa mga awtorisadong opisyal.`,"Donation records":`Mga talaan ng donasyon`,"Offering records where applicable":`Mga talaan ng handog kung naaangkop`,"Expense tracking":`Pagsubaybay sa mga gastos`,"Financial summaries":`Mga buod ng pananalapi`,"Digital acknowledgment records":`Mga digital na talaan ng pagtanggap`,"Financial information remains private and accessible only to authorized organization officers.":`Nananatiling pribado ang impormasyong pinansyal at accessible lamang sa mga awtorisadong opisyal ng organisasyon.`,Resources:`Mga Mapagkukunan`,"Digital Resource Center":`Digital na Sentro ng mga Mapagkukunan`,"Organize and present educational and religious materials in one accessible place.":`Isaayos at ipresenta ang mga materyal na pang-edukasyon at panrelihiyon sa isang madaling ma-access na lugar.`,"Video and sermon archives":`Mga archive ng video at sermon`,"Educational resources":`Mga mapagkukunang pang-edukasyon`,"Study materials":`Mga materyal sa pag-aaral`,"Downloadable documents":`Mga dokumentong maaaring i-download`,"Livestream links":`Mga link ng livestream`,"All content remains under the control of the respective organization.":`Nananatili sa kontrol ng kaukulang organisasyon ang lahat ng nilalaman.`,Documents:`Mga Dokumento`,"Document Management System":`Sistema ng Pamamahala ng Dokumento`,"Keep important organizational documents organized, categorized, and easy to locate.":`Panatilihing organisado, nakategorya, at madaling hanapin ang mahahalagang dokumento ng organisasyon.`,"Digital document archives":`Mga digital na archive ng dokumento`,"Organization files":`Mga file ng organisasyon`,"Document categorization":`Pagkategorya ng dokumento`,"Administrative records":`Mga talaang administratibo`,"Secure document access":`Ligtas na pag-access sa dokumento`,"Organization Communication Tools":`Mga Kagamitan sa Komunikasyon ng Organisasyon`,"Help authorized representatives communicate consistently with their communities.":`Tulungan ang mga awtorisadong kinatawan na patuloy na makipag-ugnayan sa kanilang komunidad.`,"Announcement publishing":`Pag-publish ng anunsyo`,"Contact directories":`Mga direktoryo ng kontak`,"Communication coordination":`Koordinasyon ng komunikasyon`,"Activity reminders":`Mga paalala sa aktibidad`,"Digital information channels":`Mga digital na channel ng impormasyon`,"Custom Build":`Pasadyang Pagbuo`,"Custom App & Website Development":`Pasadyang Pagbuo ng App at Website`,"Tailored technology solutions shaped around the specific needs of an individual organization.":`Mga solusyong teknolohiyang iniaayon sa partikular na pangangailangan ng isang organisasyon.`,"Custom websites":`Mga pasadyang website`,"Web applications":`Mga web application`,"Mobile-friendly platforms":`Mga platapormang mobile-friendly`,"Administrative systems":`Mga sistemang administratibo`,"Community service applications":`Mga application para sa serbisyong pangkomunidad`,"These are planned solution areas. Nothing here is presented as an operating service, and no organization is required to adopt any particular tool.":`Ito ay mga planadong solusyon. Wala sa mga ito ang ipinapakita bilang gumaganang serbisyo, at walang organisasyong kailangang gumamit ng partikular na kagamitan.`}},je={text:{"Every Size Welcome":`Para sa Lahat ng Sukat`,"Whether Big or Small, Every Organization Deserves":`Malaki man o Maliit, Bawat Organisasyon ay Karapat-dapat sa`,"Access to Technology.":`Pag-access sa Teknolohiya.`,"Some organizations have established digital systems, while others still depend on manual records, paper-based processes, and traditional communication methods.":`May mga organisasyong may digital system na, habang ang iba ay umaasa pa rin sa manwal na talaan, papel, at tradisyonal na paraan ng komunikasyon.`,"ConnectChurch aims to help bridge this gap by making practical digital solutions more accessible to organizations with different resources and capabilities.":`Layunin ng ConnectChurch na tulungan silang maabot ang agwat na ito sa pamamagitan ng paggawa ng praktikal na digital na solusyon na mas abot-kaya para sa mga organisasyong may iba't ibang kakayahan.`,"Beginning the digital journey":`Simula ng digital na paglalakbay`,"Starting Digital":`Nagsisimula sa Digital`,"For organizations beginning their digital journey. Start with approachable tools — a clear online presence, organized announcements, and simple record keeping.":`Para sa mga organisasyong nagsisimula pa lamang sa digital na paglalakbay. Magsimula sa mga madaling gamiting kagamitan — malinaw na presensya sa online, organisadong anunsyo, at simpleng pagtatala.`,"Improving existing processes":`Pagpapabuti ng umiiral na proseso`,"Growing Digitally":`Lumalago nang Digital`,"For organizations looking to improve existing processes. Connect information, coordinate events and volunteers, and communicate more consistently.":`Para sa mga organisasyong nais mapabuti ang umiiral na proseso. Ikonekta ang impormasyon, i-coordinate ang mga aktibidad at boluntaryo, at maging mas pare-pareho ang komunikasyon.`,"Custom platforms and systems":`Pasadyang plataporma at sistema`,"Advanced Digital Solutions":`Mga Mas Advanced na Solusyong Digital`,"For organizations that need customized platforms and systems. Explore tailored technology, integrated workflows, and support shaped around specific needs.":`Para sa mga organisasyong nangangailangan ng pasadyang plataporma at sistema. Tuklasin ang teknolohiyang iniaayon sa pangangailangan, integrated na workflow, at suportang hinuhubog ayon sa partikular na pangangailangan.`,"These levels are illustrative starting points. Every engagement would begin with listening to an organization’s actual needs and resources.":`Ang mga antas na ito ay halimbawang panimulang punto. Ang bawat pakikipagtulungan ay magsisimula sa pakikinig sa tunay na pangangailangan at kakayahan ng organisasyon.`,"How We Can Help":`Paano Kami Makakatulong`,"A Thoughtful Path":`Isang Maingat na Landas`,"from Challenge to Solution.":`mula Hamon tungo sa Solusyon.`,"ConnectChurch proposes a simple, collaborative four-step approach — starting with listening, and ending with support that fits the organization’s scope.":`Iminumungkahi ng ConnectChurch ang isang simple at kolaboratibong apat na hakbang na paraan — nagsisimula sa pakikinig, at nagtatapos sa suportang angkop sa saklaw ng organisasyon.`,"Proposed service approach · not an operating service.":`Iminumungkahing paraan ng paglilingkod · hindi pa gumaganang serbisyo.`,"Step 01":`Hakbang 01`,Understand:`Unawain`,"Understand the organization’s current challenges, context, and needs — before suggesting any tool.":`Unawain ang kasalukuyang hamon, konteksto, at pangangailangan ng organisasyon — bago magmungkahi ng anumang kagamitan.`,"Step 02":`Hakbang 02`,Plan:`Magplano`,"Identify suitable digital solutions based on its requirements, capacity, and priorities.":`Tukuyin ang mga angkop na digital na solusyon batay sa pangangailangan, kakayahan, at prayoridad nito.`,"Step 03":`Hakbang 03`,Develop:`Bumuo`,"Design and develop appropriate technology solutions with the organization’s input along the way.":`Idisenyo at buuin ang angkop na solusyong teknolohiya kasama ang input ng organisasyon sa proseso.`,"Step 04":`Hakbang 04`,Support:`Suportahan`,"Provide guidance and assistance according to the agreed scope, at a pace the organization can sustain.":`Magbigay ng gabay at tulong ayon sa napagkasunduang saklaw, sa bilis na kayang panatilihin ng organisasyon.`,"Featured Solution Showcase":`Tampok na Solusyon`,"Built Around Your Organization’s Needs.":`Itinayo Ayon sa Pangangailangan ng Iyong Organisasyon.`,"Illustrative previews of the kind of platforms ConnectChurch hopes to develop with participating organizations. Sample content only — no organization is represented.":`Mga halimbawang preview ng uri ng plataporma na nais buuin ng ConnectChurch kasama ang mga kalahok na organisasyon. Halimbawang nilalaman lamang — walang kinakatawang organisasyon.`,"Concept Preview — Not Yet Operational":`Preview ng Konsepto — Hindi Pa Gumagana`,"Sample Organization":`Halimbawang Organisasyon`,Activities:`Mga Aktibidad`,"A community of service":`Isang pamayanang naglilingkod`,"A place to gather.":`Isang lugar upang magtipon.`,"A community to serve.":`Isang pamayanang paglilingkuran.`,"A clear public home for your organization’s story, leadership, announcements, and activities.":`Isang malinaw na pampublikong tahanan para sa kuwento, pamumuno, anunsyo, at aktibidad ng iyong organisasyon.`,"Sample Org":`Halimbawang Org`,Overview:`Buod`,Members:`Mga Miyembro`,"Sample data":`Halimbawang datos`,"Management Dashboard":`Dashboard ng Pamamahala`,"A private overview for authorized officers — records, schedules, and summaries in one view.":`Isang pribadong tanaw para sa mga awtorisadong opisyal — talaan, iskedyul, at buod sa isang tingin.`,"Sample month":`Halimbawang buwan`,"Community Outreach":`Tulong sa Komunidad`,Sample:`Halimbawa`,"Volunteer Orientation":`Oryentasyon ng mga Boluntaryo`,"Events & Activities Portal":`Portal ng mga Aktibidad at Kaganapan`,"An organized calendar where the community can find gatherings and activity information.":`Isang organisadong kalendaryo kung saan makikita ng komunidad ang mga pagtitipon at impormasyon ng aktibidad.`,"All interfaces shown are static concepts with placeholder content. They are not connected to a database, account system, or live service.":`Ang lahat ng interface na ipinapakita ay static na konsepto na may halimbawang nilalaman. Hindi ito konektado sa database, account system, o live na serbisyo.`,"Let’s Explore":`Tuklasin Natin`,"Have a Digital Challenge? Let’s Explore a Solution.":`May Hamon sa Digital? Tuklasin Natin ang Solusyon.`,"Tell us about the technology challenges your organization is facing. ConnectChurch aims to explore practical solutions that can help your organization become more connected, organized, and digitally empowered.":`Ikuwento sa amin ang mga hamon sa teknolohiyang kinakaharap ng iyong organisasyon. Layunin ng ConnectChurch na tuklasin ang mga praktikal na solusyong makatutulong upang ang iyong organisasyon ay maging mas konektado, organisado, at may kakayahan sa digital.`,"Contact Our Initiative":`Makipag-ugnayan sa Aming Inisyatiba`}},w={text:{"Walking together, Marinduque.":`Sabay na naglalakbay, Marinduque.`,"Our Commitment to Every Faith":`Aming Pangako sa Bawat Pananampalataya`,"Every Faith Community Deserves Respect. Every Organization Deserves an Opportunity to Connect.":`Bawat Pamayanang may Pananampalataya ay Karapat-dapat sa Paggalang. Bawat Organisasyon ay Karapat-dapat sa Pagkakataong Makakaugnay.`,"ConnectChurch recognizes the diversity of religious beliefs and traditions across Marinduque.":`Kinikilala ng ConnectChurch ang pagkakaiba-iba ng paniniwala at tradisyong panrelihiyon sa buong Marinduque.`,"We do not seek to influence, replace, or interfere with the beliefs, teachings, leadership, or internal practices of any religious organization.":`Hindi namin layuning impluwensyahan, palitan, o pakialaman ang paniniwala, turo, pamumuno, o panloob na kasanayan ng anumang relihiyosong organisasyon.`,"Our purpose is to provide technology and digital opportunities that participating organizations can use according to their own needs, values, and preferences.":`Ang layunin namin ay magbigay ng teknolohiya at digital na pagkakataon na maaaring gamitin ng mga kalahok na organisasyon ayon sa kanilang pangangailangan, pagpapahalaga, at kagustuhan.`,"Different beliefs. Different traditions. One shared opportunity to connect and serve communities.":`Iba't ibang paniniwala. Iba't ibang tradisyon. Isang pinagsamang pagkakataong makipag-ugnayan at maglingkod sa komunidad.`,"Our Commitment":`Aming Pangako`,"Built on Respect.":`Itinayo sa Paggalang.`,"Driven by Service.":`Pinapatnubayan ng Paglilingkod.`,"Every conversation, tool, and collaboration is guided by four commitments to the organizations we hope to serve.":`Bawat pag-uusap, kagamitan, at pagtutulungan ay pinapatnubayan ng apat na pangako sa mga organisasyong nais naming paglingkuran.`,"Voluntary Participation":`Kusang Pakikilahok`,"Joining ConnectChurch is always a choice. Organizations take part only when it genuinely serves their mission and community.":`Ang pagsali sa ConnectChurch ay laging kusang-loob. Nakikilahok lamang ang mga organisasyon kapag tunay nitong pinaglilingkuran ang kanilang misyon at komunidad.`,"Respect for Religious Independence":`Paggalang sa Kalayaan ng Relihiyon`,"We never interfere with the beliefs, teachings, leadership, or internal practices of any organization.":`Hindi kami nakikialam sa paniniwala, turo, pamumuno, o panloob na kasanayan ng anumang organisasyon.`,"Responsible Data Privacy":`Responsableng Privacy ng Datos`,"Information is handled carefully, transparently, and only with the knowledge and consent of each organization.":`Ang impormasyon ay pinangangasiwaan nang maingat, malinaw, at may kaalaman at pahintulot ng bawat organisasyon.`,"Equal Access to Digital Opportunities":`Pantay na Pag-access sa mga Digital na Pagkakataon`,"Support is offered fairly to communities of every size, tradition, and level of digital experience.":`Ang suporta ay patas na iniaalok sa mga komunidad ng anumang laki, tradisyon, at antas ng karanasan sa digital.`,"Connecting Faith Communities":`Pag-uugnay sa mga Pamayanang may Pananampalataya`,"Across Marinduque.":`Sa Buong Marinduque.`,"Six municipalities. One island. A shared commitment to the people and places that make Marinduque home.":`Anim na munisipalidad. Isang isla. Isang pinagsamang pangako sa mga tao at lugar na bumubuo sa Marinduque.`,Boac:`Boac`,"The capital town, and a natural meeting point for the island.":`Ang kabiserang bayan, at likas na tagpuan ng mga pamayanang may pananampalataya sa buong isla.`,Mogpog:`Mogpog`,"A close-knit municipality with deep local traditions.":`Isang matalik na munisipalidad kung saan maaaring manatiling konektado at suportado ang mga lokal na pamayanang may pananampalataya.`,Gasan:`Gasan`,"A coastal community with a strong sense of place.":`Isang pamayanang baybaying may malakas na pagkakakilanlan sa lugar at iisang pangako sa paglilingkod.`,Buenavista:`Buenavista`,"Farming and fishing communities along the western coast.":`Mga pamayanang magsasaka at mangingisda na may pagkakataong mag-ugnayan sa kanlurang baybayin.`,Torrijos:`Torrijos`,"A northern coastal town with deep community roots.":`Isang baybaying bayan sa hilaga na may malalim na ugat sa komunidad at diwa ng pagtutulungan.`,"Santa Cruz":`Santa Cruz`,"Wide, diverse communities across the island’s largest municipality.":`Malalawak at iba't ibang komunidad sa pinakamalaking munisipalidad ng isla, bawat isa ay may sariling pagkakakilanlan.`,"Municipalities describe the initiative’s intended coverage. Listing does not imply partnership, participation, or endorsement by any local organization or government unit.":`Inilalarawan ng mga munisipalidad ang inaasahang saklaw ng inisyatiba. Ang pagtatala ay hindi nagpapahiwatig ng pakikipagtulungan, pakikilahok, o pag-endorso ng anumang lokal na organisasyon o ahensya ng gobyerno.`,"Let's Start a":`Simulan Natin ang`,"Conversation.":`Pag-uusap.`,"ConnectChurch is being introduced personally, community by community. If you lead a church, religious organization, or faith-based group and would like to be part of the conversation, we would be glad to hear from you.":`Ang ConnectChurch ay ipinakikilala nang personal, komunidad sa komunidad. Kung pinamumunuan mo ang isang simbahan, relihiyosong organisasyon, o faith-based na grupo at nais mong maging bahagi ng pag-uusap, malugod kaming makikinig sa iyo.`,"Marinduque, Philippines · A BetterGo Marinduque Initiative":`Marinduque, Pilipinas · Isang Inisyatiba ng BetterGo Marinduque`,"Who we would love to hear from":`Sino ang nais naming marinig`,"Faith & community leaders":`Mga pinuno ng pananampalataya at komunidad`,"Learn how your church, congregation, or community could participate and what ConnectChurch could offer.":`Alamin kung paano makakalahok ang iyong simbahan, kongregasyon, o komunidad at kung ano ang maaaring ialok ng ConnectChurch.`,"Religious organizations":`Mga relihiyosong organisasyon`,"Share the work your organization is doing and the digital needs your team is facing.":`Ibahagi ang gawain ng iyong organisasyon at ang mga pangangailangang digital na kinakaharap ng iyong koponan.`,"Community partners":`Mga katuwang sa komunidad`,"Explore ways to support faith communities across Marinduque through respectful collaboration.":`Tuklasin ang mga paraan upang suportahan ang mga pamayanang may pananampalataya sa buong Marinduque sa pamamagitan ng magalang na pagtutulungan.`,"Official contact details will be published here as the initiative launches.":`Ang opisyal na detalye ng kontak ay ilalathala rito sa paglulunsad ng inisyatiba.`,"A Shared Opportunity":`Isang Pinagsamang Pagkakataon`,"Let's Build a More Connected Community Together.":`Sama-sama Nating Buuin ang Mas Nagkakaugnay na Komunidad.`,"Whether you represent a church, religious organization, or faith-based community group, ConnectChurch welcomes the opportunity to introduce digital solutions that may help your organization grow and serve more effectively.":`Kahit ikaw ay kumakatawan sa isang simbahan, relihiyosong organisasyon, o faith-based na grupong pangkomunidad, malugod na tinatanggap ng ConnectChurch ang pagkakataong ipakilala ang mga digital na solusyong makatutulong sa iyong organisasyon na lumago at maglingkod nang mas epektibo.`,"Discover Digital Solutions":`Tuklasin ang mga Digital na Solusyon`,"Contact ConnectChurch":`Makipag-ugnayan sa ConnectChurch`,"Faith & Community Connect":`Ugnayan ng Pananampalataya at Komunidad`,"Powered by BetterGo Marinduque":`Pinapatakbo ng BetterGo Marinduque`,"Connecting Faith Communities. Empowering People. Strengthening Communities.":`Pag-uugnay sa mga Pamayanang Pananampalataya. Pagbibigay-Kakayahan sa mga Tao. Pagpapatatag ng mga Komunidad.`,Mission:`Misyon`,Solutions:`Mga Solusyon`,"ConnectChurch is an independent digital initiative under BetterGo Marinduque. Participation is voluntary. The platform does not represent, control, or replace any religious institution, denomination, or government agency.":`Ang ConnectChurch ay isang independiyenteng digital na inisyatiba sa ilalim ng BetterGo Marinduque. Kusang-loob ang pakikilahok. Hindi kinakatawan, kinokontrol, o pinapalitan ng plataporma ang anumang relihiyosong institusyon, denominasyon, o ahensya ng gobyerno.`},attributes:{"ConnectChurch — home":`ConnectChurch — tahanan`,Primary:`Pangunahing nabigasyon`,Mobile:`Mobile`,Footer:`Footer`,"Open navigation menu":`Buksan ang menu ng nabigasyon`,"Close navigation menu":`Isara ang menu ng nabigasyon`,"People of different ages and backgrounds talking warmly together in a bright community hall":`Mga taong may iba't ibang edad at pinagmulan na magkasamang nag-uusap nang mainit sa isang maliwanag na bulwagan ng komunidad`,"Volunteers planning a community outreach activity together around a table with notebooks and a laptop":`Mga boluntaryong magkasamang nagpaplano ng gawaing pangkomunidad sa paligid ng mesa na may mga notebook at laptop`,"Illustration of faith communities connected around ConnectChurch through respect, service, and collaboration":`Ilustrasyon ng mga pamayanang may pananampalataya na nakaugnay sa ConnectChurch sa pamamagitan ng paggalang, paglilingkod, at pagtutulungan`,"Volunteers from different backgrounds planting seedlings together in a community garden":`Mga boluntaryo mula sa iba't ibang pinagmulan na magkasamang nagtatanim ng punla sa hardin ng komunidad`,"Community coordinators collaborating around a laptop and printed schedules in a bright hall":`Mga coordinator ng komunidad na magkasamang nagtatrabaho sa paligid ng laptop at nakalimbag na iskedyul sa maliwanag na bulwagan`,"People of different ages and backgrounds walking and talking together outdoors in warm afternoon light":`Mga taong may iba't ibang edad at pinagmulan na magkasamang naglalakad at nag-uusap sa labas sa mainit na liwanag ng hapon`,"Aerial view of the Marinduque coastline at sunrise, with green mountains and coastal communities":`Tanaw mula sa himpapawid ang baybayin ng Marinduque sa pagsikat ng araw, kasama ang luntiang kabundukan at mga pamayanan sa baybayin`,Previous:`Nakaraan`,Next:`Susunod`},meta:{title:`ConnectChurch — Isang Pamayanan ng Pananampalataya. Magkakaugnay.`,description:`Ang ConnectChurch ay isang inklusibong digital na inisyatiba ng BetterGo Marinduque na nag-uugnay sa mga simbahan, relihiyosong organisasyon, at pamayanang may pananampalataya sa buong Marinduque.`,ogTitle:`ConnectChurch — Dito Nagkakaugnay ang mga Pamayanang may Pananampalataya`},ui:{language:`Wika`,english:`English`,filipino:`Filipino`,announceEnglish:`English na ang wika ng website.`,announceFilipino:`Filipino na ang wika ng website.`}},Me={text:{"Platform Benefits":`Mga Benepisyo ng Plataporma`,"What a Connected Community":`Ano ang Kayang Gawin ng Isang`,"Makes Possible.":`Nagkakaugnay na Komunidad.`,"Technology is only useful when it brings people closer. These are the practical benefits ConnectChurch hopes to offer every participating organization.":`Mahalaga lamang ang teknolohiya kapag pinaglalapit nito ang mga tao. Ito ang mga praktikal na benepisyong nais ialok ng ConnectChurch sa bawat kalahok na organisasyon.`,"A Shared Digital Home":`Isang Pinagsamang Digital na Tahanan`,"One respectful space where organizations can be found, share updates, and stay connected with the people they serve.":`Isang espasyong puno ng paggalang kung saan makikita ang mga organisasyon, makakapagbahagi ng mga update, at mananatiling konektado sa mga taong pinaglilingkuran nila.`,"Everyday Work, Made Simpler":`Mas Simpleng Araw-araw na Gawain`,"Practical tools for records, events, volunteers, and communication — shaped around each organization’s capacity.":`Mga praktikal na kagamitan para sa talaan, aktibidad, boluntaryo, at komunikasyon — iniaayon sa kakayahan ng bawat organisasyon.`,"A Wider Circle of Support":`Mas Malawak na Ugnayan ng Suporta`,"Opportunities to learn from, collaborate with, and support other faith communities across the island.":`Mga pagkakataong matuto mula sa, makipagtulungan sa, at suportahan ang iba pang pamayanang may pananampalataya sa buong isla.`,"ConnectChurch at a glance":`Ang ConnectChurch sa isang tingin`,"Solution areas":`Mga solusyong inihahanda`,"Municipalities in scope":`Mga munisipalidad sa saklaw`,"Languages supported":`Mga wikang suportado`,"Shared purpose":`Iisang layunin`,"One Faith Community. Connected Together.":`Isang Pamayanan ng Pananampalataya. Magkakaugnay.`,"Bringing faith communities closer through digital connection.":`Pinaglalapit ang mga pamayanang may pananampalataya sa pamamagitan ng digital na ugnayan.`,"An inclusive digital initiative introducing practical technology to churches, religious organizations, and faith communities across Marinduque.":`Isang inklusibong digital na inisyatiba na nagpapakilala ng praktikal na teknolohiya sa mga simbahan, relihiyosong organisasyon, at pamayanang may pananampalataya sa buong Marinduque.`,"Discover our story":`Tuklasin ang aming kuwento`,"Mission & Vision":`Misyon at Bisyon`,"To connect, support, and empower faith communities through accessible digital solutions and meaningful collaboration.":`Pag-ugnayin, suportahan, at bigyang-kakayahan ang mga pamayanang may pananampalataya sa pamamagitan ng abot-kayang digital na solusyon at makabuluhang pagtutulungan.`,"Get Involved":`Makilahok`,"Partnership and contact details are being prepared. Official channels will be published here.":`Inihahanda pa ang detalye ng pakikipagtulungan at kontak. Ilalathala rito ang mga opisyal na channel.`,"Contact our initiative":`Makipag-ugnayan sa aming inisyatiba`,"Available in English and Filipino.":`Makukuha sa English at Filipino.`,Legal:`Legal`,"Privacy Policy":`Patakaran sa Privacy`,"Terms of Use":`Mga Tuntunin ng Paggamit`,"Being prepared":`Inihahanda pa`,"ConnectChurch is an independent digital initiative designed to connect and empower religious organizations and faith communities through technology, collaboration, and community engagement.":`Ang ConnectChurch ay isang independiyenteng digital na inisyatiba na nilikha upang pag-ugnayin at bigyang-kakayahan ang mga relihiyosong organisasyon at pamayanang may pananampalataya sa pamamagitan ng teknolohiya, pagtutulungan, at pakikipag-ugnayan sa komunidad.`}},Ne={text:JSON.parse(`{"Marinduque Faith Communities":"Mga Pamayanang may Pananampalataya sa Marinduque","A Community of":"Isang Pamayanan ng","Different Faiths":"Iba't Ibang Pananampalataya","Marinduque is home to diverse religious communities, each with its own beliefs, traditions, and ways of serving people. ConnectChurch aims to provide an inclusive digital space where these communities can be recognized, supported, and connected through technology.":"Binubuo ang Marinduque ng iba't ibang pamayanang may kanya-kanyang paniniwala, tradisyon, at paraan ng paglilingkod sa kapwa. Layunin ng ConnectChurch na magbigay ng isang inklusibong digital space kung saan maaari silang makilala, masuportahan, at mapag-ugnay sa pamamagitan ng teknolohiya.","Different Faiths. Shared Respect. Stronger Communities.":"Magkakaibang Pananampalataya. Iisang Paggalang. Mas Matatag na Komunidad.","Catholic Communities":"Mga Pamayanang Katoliko","Parishes and lay communities serving their members and neighborhoods across Marinduque.":"Mga parokya at laykong pamayanan na naglilingkod sa kanilang mga miyembro at kapitbahayan sa buong Marinduque.","Protestant Churches":"Mga Simbahang Protestante","Congregations from Reformed, Lutheran, Anglican, and other Protestant traditions.":"Mga kongregasyon mula sa Reformed, Lutheran, Anglican, at iba pang tradisyong Protestante.","Evangelical and Born Again Churches":"Mga Simbahang Evangelical at Born Again","Independent fellowships and evangelical congregations focused on outreach and community life.":"Mga independiyenteng fellowship at kongregasyong evangelical na nakatuon sa outreach at buhay komunidad.","Baptist Communities":"Mga Pamayanang Baptist","Baptist churches and fellowships serving their members and local neighborhoods.":"Mga simbahang Baptist at fellowship na naglilingkod sa kanilang mga miyembro at lokal na kapitbahayan.","Methodist Communities":"Mga Pamayanang Methodist","Methodist congregations rooted in community, service, and shared ministry.":"Mga kongregasyong Methodist na nakaugat sa komunidad, paglilingkod, at pinagsamang ministeryo.","Iglesia ni Cristo Communities":"Mga Pamayanang Iglesia ni Cristo","Iglesia ni Cristo congregations contributing to community life across the island.":"Mga kongregasyon ng Iglesia ni Cristo na nag-aambag sa buhay komunidad sa buong isla.","Seventh-day Adventist Communities":"Mga Pamayanang Seventh-day Adventist","Seventh-day Adventist congregations and community programs serving people across the island.":"Mga kongregasyon at programang pangkomunidad ng Seventh-day Adventist na naglilingkod sa mga tao sa buong isla.","Muslim Communities":"Mga Pamayanang Muslim","Muslim congregations and community organizations contributing to the life of the island.":"Mga kongregasyon at organisasyong pangkomunidad ng Muslim na nag-aambag sa buhay ng isla.","Other Religious Organizations":"Iba Pang Relihiyosong Organisasyon","Religious groups and spiritual communities of other traditions, welcomed with respect.":"Mga relihiyosong grupo at espirituwal na komunidad ng iba pang tradisyon, tinatanggap nang may paggalang.","Faith-Based Community Groups":"Mga Grupong Pangkomunidad na may Pananampalataya","Faith-inspired organizations and volunteer groups working for the common good.":"Mga organisasyong inspirasyon ng pananampalataya at grupong boluntaryo na nagtatrabaho para sa kabutihang panlahat.","ConnectChurch is an independent digital initiative under BetterGo Marinduque. It is not an official representative of any religious organization, church, denomination, or government agency. Participation is voluntary, and all religious organizations retain their own beliefs, leadership, identity, and independence.":"Ang ConnectChurch ay isang independiyenteng digital na inisyatiba sa ilalim ng BetterGo Marinduque. Hindi ito opisyal na kinatawan ng anumang relihiyosong organisasyon, simbahan, denominasyon, o ahensya ng gobyerno. Kusang-loob ang pakikilahok, at pinananatili ng lahat ng relihiyosong organisasyon ang kanilang sariling paniniwala, pamumuno, pagkakakilanlan, at kalayaan.","These categories are illustrative examples only. ConnectChurch does not claim any organization as a partner, participant, or endorser without their consent.":"Ang mga kategoryang ito ay mga halimbawa lamang. Hindi inaangkin ng ConnectChurch ang anumang organisasyon bilang katuwang, kalahok, o tagapag-endorso nang walang pahintulot nito.","Inclusive Community Principles":"Mga Prinsipyong Inklusibo sa Komunidad","Respecting Every Faith.":"Paggalang sa Bawat Pananampalataya.","Supporting Every Community.":"Pagsuporta sa Bawat Komunidad.","These principles guide how ConnectChurch hopes to work with every organization — with respect, fairness, and without interference.":"Ang mga prinsipyong ito ang gabay sa nais na paraan ng pakikipagtulungan ng ConnectChurch sa bawat organisasyon — may paggalang, patas, at walang pakikialam.","Religious Freedom":"Kalayaan sa Relihiyon","Every organization keeps the right to practice its own beliefs, traditions, and leadership without interference.":"Pinananatili ng bawat organisasyon ang karapatang isabuhay ang sariling paniniwala, tradisyon, at pamumuno nang walang pakikialam.","Equal Opportunity":"Pantay na Pagkakataon","Digital support is offered fairly to communities of every size, tradition, and level of digital experience.":"Patas na iniaalok ang digital na suporta sa mga komunidad ng anumang laki, tradisyon, at antas ng karanasan sa digital.","Independence":"Pagsasarili","ConnectChurch never claims authority over, speaks for, or merges the identity of any organization.":"Hindi kailanman inaangkin ng ConnectChurch ang awtoridad sa, nagsasalita para sa, o pinagsasama ang pagkakakilanlan ng anumang organisasyon.","Mutual Respect":"Paggalang sa Isa't Isa","We encourage understanding and cooperation without asking anyone to compromise their convictions.":"Hinihikayat namin ang pag-unawa at pagtutulungan nang hindi hinihiling sa sinuman na isawalang-bahala ang kanilang paniniwala.","Community Service":"Paglilingkod sa Komunidad","We support voluntary activities that serve people and strengthen local communities.":"Sinusuportahan namin ang mga kusang gawaing naglilingkod sa mga tao at nagpapalakas sa lokal na komunidad.","Privacy and Trust":"Privacy at Pagtitiwala","Organizational and individual information is handled with care, consent, and respect.":"Ang impormasyon ng organisasyon at indibidwal ay pinangangasiwaan nang may pag-iingat, pahintulot, at paggalang.","Proposed Digital Support":"Iminumungkahing Digital na Suporta","How ConnectChurch Supports":"Paano Sinusuportahan ng ConnectChurch","Different Communities.":"ang Iba't Ibang Komunidad.","Proposed digital support areas — not yet operational — that participating organizations could use according to their own needs, values, and independence.":"Mga iminumungkahing digital na suporta — hindi pa gumagana — na maaaring gamitin ng mga kalahok na organisasyon ayon sa kanilang pangangailangan, pagpapahalaga, at pagsasarili.","Digital Organization Profiles":"Mga Digital na Profile ng Organisasyon","A clear public profile that introduces your organization, its mission, and its leadership.":"Isang malinaw na pampublikong profile na nagpapakilala sa iyong organisasyon, misyon, at pamumuno.","Website and Digital Presence":"Website at Digital na Presensya","A professional place online to share your story, activities, and contact information.":"Isang propesyonal na lugar online upang ibahagi ang inyong kuwento, aktibidad, at impormasyon sa kontak.","Events and Activities Information":"Impormasyon ng mga Aktibidad at Kaganapan","Organized schedules and updates so your community can find gatherings easily.":"Organisadong iskedyul at update upang madaling makita ng komunidad ang mga pagtitipon.","Community Announcements":"Mga Anunsyo sa Komunidad","A simple space for notices, reminders, and important information.":"Isang simpleng espasyo para sa mga abiso, paalala, at mahalagang impormasyon.","Volunteer and Outreach Opportunities":"Mga Pagkakataong Magboluntaryo at Tumulong","Coordinate volunteers and share service opportunities with your community.":"I-coordinate ang mga boluntaryo at ibahagi ang mga pagkakataong maglingkod sa komunidad.","Digital Organization Tools":"Mga Digital na Kagamitan para sa Organisasyon","Practical tools for records, communication, and everyday administration — shaped around your capacity.":"Mga praktikal na kagamitan para sa talaan, komunikasyon, at araw-araw na administrasyon — iniaayon sa inyong kakayahan.","Proposed":"Iminumungkahi","All support areas are proposed and subject to discussion. Nothing here is an operating service.":"Ang lahat ng suportang ito ay iminumungkahi pa lamang at napapailalim sa pag-uusap. Wala sa mga ito ang gumaganang serbisyo.","Parishes and lay communities serving their members and local neighborhoods.":"Mga parokya at laykong pamayanan na naglilingkod sa kanilang mga miyembro at kapitbahayan.","Independent fellowships focused on outreach and community life.":"Mga independiyenteng fellowship na nakatuon sa outreach at buhay komunidad.","Baptist churches and fellowships serving their local neighborhoods.":"Mga simbahang Baptist at fellowship na naglilingkod sa kanilang lokal na kapitbahayan.","Congregations rooted in community, service, and shared ministry.":"Mga kongregasyong nakaugat sa komunidad, paglilingkod, at pinagsamang ministeryo.","Congregations contributing to community life across the island.":"Mga kongregasyong nag-aambag sa buhay komunidad sa buong isla.","Congregations and community programs serving people across the island.":"Mga kongregasyon at programang pangkomunidad na naglilingkod sa mga tao sa buong isla.","Congregations and community organizations contributing to island life.":"Mga kongregasyon at organisasyong pangkomunidad na nag-aambag sa buhay ng isla.","Religious groups and spiritual communities of other traditions.":"Mga relihiyosong grupo at espirituwal na komunidad ng iba pang tradisyon.","Faith-inspired organizations and volunteer groups serving the common good.":"Mga organisasyong inspirasyon ng pananampalataya at grupong boluntaryo para sa kabutihang panlahat."}`)},Pe={text:{"The capital town, and a natural meeting point for faith communities across the island.":`Ang kabiserang bayan, at likas na tagpuan ng mga pamayanang may pananampalataya sa buong isla.`,"A close-knit municipality where local faith communities can stay connected and supported.":`Isang matalik na munisipalidad kung saan maaaring manatiling konektado at suportado ang mga lokal na pamayanang may pananampalataya.`,"A coastal community with a strong sense of place and a shared commitment to service.":`Isang pamayanang baybaying may malakas na pagkakakilanlan sa lugar at iisang pangako sa paglilingkod.`,"Farming and fishing communities with opportunities to connect across the western coast.":`Mga pamayanang magsasaka at mangingisda na may pagkakataong mag-ugnayan sa kanlurang baybayin.`,"A northern coastal town with deep community roots and a spirit of cooperation.":`Isang baybaying bayan sa hilaga na may malalim na ugat sa komunidad at diwa ng pagtutulungan.`,"Wide, diverse communities across the island’s largest municipality, each with its own identity.":`Malalawak at iba't ibang komunidad sa pinakamalaking munisipalidad ng isla, bawat isa ay may sariling pagkakakilanlan.`}},T=`connectchurch-language`,E=[`en`,`fil`],D=[S,C,je,w,Me,Ne,Pe],Fe=Object.assign({},...D.map(e=>e.text)),Ie=Object.assign({},...D.map(e=>e.attributes||{})),O=e=>e.replace(/\s+/g,` `).trim(),k=e=>O(e).replace(/[\u2018\u2019\u201A\u201B]/g,`'`).replace(/[\u201C\u201D\u201E]/g,`"`).replace(/[\u2013\u2014]/g,`-`),A=e=>{let t=new Map,n=new Map;for(let[r,i]of Object.entries(e)){t.set(O(r),i);let e=k(r);n.has(e)||n.set(e,i)}return{exact:t,relaxed:n}},Le=A(Fe),j=A(Ie);function M(e,t){return t?e.exact.get(O(t))??e.relaxed.get(k(t))??null:null}var N=(()=>{try{let e=localStorage.getItem(T);return E.includes(e)?e:`en`}catch{return`en`}})();typeof document<`u`&&(document.documentElement.lang=N===`fil`?`fil`:`en`,document.documentElement.dataset.lang=N);var P=new Map,F=new Map,I=null;function L(e){return{leading:e.match(/^\s*/)?.[0]??``,trailing:e.match(/\s*$/)?.[0]??``}}function Re(e){let t=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(e){if(!e.nodeValue||!e.nodeValue.trim())return NodeFilter.FILTER_REJECT;let t=e.parentElement;return!t||t.closest(`script, style, noscript, [data-no-i18n]`)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),n=t.nextNode();for(;n;){let r=n.nodeValue,i=O(r),a=P.get(n),o=a&&a.applied===i?a.source:i,s=e===`fil`?M(Le,o):null,c=s===null||s===``?o:s;if(s===``&&e===`fil`){let{leading:e,trailing:t}=L(r);n.nodeValue=`${e}${t}`,P.set(n,{source:o,applied:``,empty:!0})}else{let{leading:t,trailing:a}=L(r),s=e===`fil`?c:o;s!==i&&(n.nodeValue=`${t}${s}${a}`),P.set(n,{source:o,applied:O(s),empty:!1})}n=t.nextNode()}}function ze(e){document.querySelectorAll(`[alt], [aria-label], [placeholder], [title]`).forEach(t=>{t.closest(`[data-no-i18n]`)||[`alt`,`aria-label`,`placeholder`,`title`].forEach(n=>{if(!t.hasAttribute(n))return;let r=t.getAttribute(n);if(!r||!r.trim())return;let i=O(r),a=F.get(t);a||(a={},F.set(t,a));let o=a[n],s=o&&o.applied===i?o.source:i,c=(e===`fil`?M(j,s):null)??s;c!==r&&t.setAttribute(n,c),a[n]={source:s,applied:O(c)}})})}function Be(e){let t=e===`fil`?w.meta:x.meta;document.title=t.title;let n=document.querySelector(`meta[name="description"]`);n&&n.setAttribute(`content`,t.description);let r=document.querySelector(`meta[property="og:title"]`);r&&r.setAttribute(`content`,t.ogTitle);let i=document.querySelector(`meta[property="og:description"]`);i&&i.setAttribute(`content`,t.description);let a=document.querySelector(`meta[name="twitter:title"]`);a&&a.setAttribute(`content`,t.ogTitle);let o=document.querySelector(`meta[name="twitter:description"]`);o&&o.setAttribute(`content`,t.description)}function R(){document.querySelectorAll(`[data-lang-switch]`).forEach(e=>{e.dataset.active=N,e.setAttribute(`aria-label`,N===`fil`?w.ui.language:`Language`),e.querySelectorAll(`[data-lang]`).forEach(e=>{let t=e.dataset.lang===N;e.setAttribute(`aria-pressed`,String(t)),e.classList.toggle(`is-active`,t),e.tabIndex=t?0:-1})})}function Ve(){I&&(I.textContent=N===`fil`?w.ui.announceFilipino:w.ui.announceEnglish)}function z(e,{meta:t=!0,live:n=!0}={}){N=e,document.documentElement.lang=e===`fil`?`fil`:`en`,document.documentElement.dataset.lang=e,Re(e),ze(e),t&&Be(e),R(),n&&Ve()}function B(e,{animate:t=!0}={}){if(!E.includes(e)||e===N){e===N&&R();return}try{localStorage.setItem(T,e)}catch{}let n=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;if(!t||n){z(e);return}let r=document.documentElement;r.classList.add(`is-switching-lang`),window.setTimeout(()=>{z(e),window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>r.classList.remove(`is-switching-lang`))})},170)}function V(){z(N,{meta:!1,live:!1})}function He(){I=document.querySelector(`[data-lang-announce]`),z(N),document.querySelectorAll(`[data-lang]`).forEach(e=>{e.addEventListener(`click`,()=>B(e.dataset.lang))}),document.addEventListener(`keydown`,e=>{if(![`ArrowLeft`,`ArrowRight`].includes(e.key))return;let t=e.target.closest?.(`[data-lang]`);if(!t)return;let n=t.closest(`[data-lang-switch]`);if(!n)return;let r=[...n.querySelectorAll(`[data-lang]`)],i=(r.indexOf(t)+(e.key===`ArrowRight`?1:-1)+r.length)%r.length;e.preventDefault(),r[i].focus(),B(r[i].dataset.lang)})}var Ue=document.querySelector(`#app`);Ue.innerHTML=`
  ${r()}
  <main id="main">
    ${i()}
    ${c()}
    ${l()}
    ${u()}
    ${d()}
    ${p()}
    ${te()}
    ${re()}
    ${fe()}
    ${ae()}
    ${se()}
    ${le()}
    ${me()}
    ${ge()}
    ${ve()}
    ${Te()}
    ${Ee()}
    ${De()}
    ${ke()}
    ${h()}
    ${_()}
    ${v()}
  </main>
  ${y()}
`,He();var H=window.matchMedia(`(prefers-reduced-motion: reduce)`),U=document.querySelector(`[data-header]`),W=document.querySelector(`[data-nav-toggle]`),We=document.querySelector(`[data-mobile-menu]`),Ge=document.querySelectorAll(`.mobile-link, .mobile-cta`),G=[...document.querySelectorAll(`.nav-link`)],Ke=new Set(G.map(e=>e.getAttribute(`href`))),K=[...document.querySelectorAll(`main section[id]`)].filter(e=>Ke.has(`#${e.id}`)),q=null;function J(){let e=window.scrollY>24;e!==q&&(U.classList.toggle(`is-scrolled`,e),q=e);let t=(U?.offsetHeight||80)+120,n=window.scrollY+t,r=K[0]?.id;for(let e of K)e.offsetTop<=n&&(r=e.id);for(let e of G){let t=e.getAttribute(`href`)===`#${r}`;e.classList.toggle(`is-active`,t),t?e.setAttribute(`aria-current`,`true`):e.removeAttribute(`aria-current`)}}var Y=!1;window.addEventListener(`scroll`,()=>{Y||(Y=!0,requestAnimationFrame(()=>{J(),Y=!1}))},{passive:!0}),window.addEventListener(`resize`,J),J();function X(e){U.classList.toggle(`menu-open`,e),W.setAttribute(`aria-expanded`,String(e)),W.setAttribute(`aria-label`,e?`Close navigation menu`:`Open navigation menu`),We.classList.toggle(`is-open`,e),document.body.classList.toggle(`menu-locked`,e),V()}W.addEventListener(`click`,()=>{X(W.getAttribute(`aria-expanded`)!==`true`)}),Ge.forEach(e=>{e.addEventListener(`click`,()=>X(!1))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&W.getAttribute(`aria-expanded`)===`true`&&(X(!1),W.focus())}),window.addEventListener(`resize`,()=>{window.innerWidth>1200&&W.getAttribute(`aria-expanded`)===`true`&&X(!1)}),document.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.addEventListener(`click`,t=>{let n=e.getAttribute(`href`);if(!n||n===`#`)return;let r=document.querySelector(n);if(!r)return;let i=H.matches;t.preventDefault(),r.scrollIntoView({behavior:i?`auto`:`smooth`,block:`start`}),history.replaceState(null,``,n),n===`#home`&&window.scrollTo({top:0,behavior:i?`auto`:`smooth`})})});var Z=[...document.querySelectorAll(`.reveal`)];if(H.matches||!(`IntersectionObserver`in window))Z.forEach(e=>e.classList.add(`is-visible`));else{let e=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{threshold:.12,rootMargin:`0px 0px -6% 0px`});Z.forEach(t=>e.observe(t))}var Q=[...document.querySelectorAll(`[data-parallax]`)];if(!H.matches&&window.innerWidth>767&&Q.length>0){let e=!1,t=()=>{for(let e of Q){let t=e.parentElement;if(!t)continue;let n=t.getBoundingClientRect();if(n.bottom<-80||n.top>window.innerHeight+80)continue;let r=(n.top+n.height/2-window.innerHeight/2)/window.innerHeight,i=Math.max(-1,Math.min(1,r))*-30;e.style.transform=`translate3d(0, ${i.toFixed(1)}px, 0) scale(1.14)`}e=!1};window.addEventListener(`scroll`,()=>{e||(e=!0,requestAnimationFrame(t))},{passive:!0}),window.addEventListener(`resize`,t),t()}document.querySelectorAll(`[data-service-toggle]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.service-card`);if(!t)return;let n=t.classList.toggle(`is-open`);e.setAttribute(`aria-expanded`,String(n));let r=e.querySelector(`.service-more-label`);r&&(r.textContent=n?`Show less`:`Learn more`,V())})});var $=[...document.querySelectorAll(`[data-count]`)];if($.length){let e=$.map(e=>Number(e.dataset.count)||0);if(H.matches||!(`IntersectionObserver`in window))$.forEach((t,n)=>{t.textContent=String(e[n])});else{let e=new IntersectionObserver((e,t)=>{e.forEach(e=>{if(!e.isIntersecting)return;let n=e.target,r=Number(n.dataset.count)||0,i=performance.now(),a=e=>{let t=Math.min(1,(e-i)/1100),o=1-(1-t)**3;n.textContent=String(Math.round(r*o)),t<1&&window.requestAnimationFrame(a)};n.textContent=`0`,window.requestAnimationFrame(a),t.unobserve(n)})},{threshold:.5});$.forEach(t=>e.observe(t))}}b(document.querySelector(`[data-hero-canvas]`));