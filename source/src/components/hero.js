export function Hero() {
  return `<section class="hero" id="home" aria-labelledby="hero-title">
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
  </section>`;
}
