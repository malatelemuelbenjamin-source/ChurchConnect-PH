export function Vision() {
  return `<section class="section vision" id="vision" aria-labelledby="vision-title">
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
  </section>`;
}
