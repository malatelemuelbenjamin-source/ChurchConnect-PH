const legend = [
  { term: 'Faith', note: 'Lived with conviction' },
  { term: 'Unity', note: 'Without erasing difference' },
  { term: 'Community', note: 'Rooted in place' },
  { term: 'Service', note: 'Offered to others' },
  { term: 'Collaboration', note: 'Stronger together' },
  { term: 'Respect', note: 'For every belief' },
];

export function Constellation() {
  return `<section class="section connections" aria-labelledby="connections-title">
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
          ${legend
            .map(
              (item) => `<li>
                <span class="legend-term">${item.term}</span>
                <span class="legend-note">${item.note}</span>
              </li>`,
            )
            .join('')}
        </ul>
      </div>
    </div>
  </section>`;
}
