import { icons } from '../icons.js';

const municipalities = [
  { name: 'Boac', note: 'The capital town, and a natural meeting point for faith communities across the island.' },
  { name: 'Mogpog', note: 'A close-knit municipality where local faith communities can stay connected and supported.' },
  { name: 'Gasan', note: 'A coastal community with a strong sense of place and a shared commitment to service.' },
  { name: 'Buenavista', note: 'Farming and fishing communities with opportunities to connect across the western coast.' },
  { name: 'Torrijos', note: 'A northern coastal town with deep community roots and a spirit of cooperation.' },
  { name: 'Santa Cruz', note: 'Wide, diverse communities across the island’s largest municipality, each with its own identity.' },
];

export function Marinduque() {
  return `<section class="section marinduque" id="community" aria-labelledby="marinduque-title">
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
        ${municipalities
          .map(
            (town, index) => `<article class="municipality-card reveal" style="--delay: ${(index % 3) * 90}ms">
              <span class="municipality-index" aria-hidden="true">0${index + 1}</span>
              <span
                class="municipality-map"
                aria-hidden="true"
                style="--map-x: ${26 + (index % 3) * 17}%; --map-y: ${42 + (index % 2) * 18}%"
              >
                <svg viewBox="0 0 160 90" preserveAspectRatio="none">
                  <path d="M2 62c22-30 52-38 78-28s46 20 78 6" />
                  <path d="M2 74c26-22 52-28 80-20s48 14 76 2" />
                  <path d="M8 50c24-24 50-30 74-22s44 14 70 6" />
                </svg>
                <span class="municipality-map-dot"></span>
              </span>
              <span class="municipality-pin" aria-hidden="true">${icons.pin}</span>
              <h3>${town.name}</h3>
              <p>${town.note}</p>
            </article>`,
          )
          .join('')}
      </div>
      <p class="municipality-note reveal">
        <span class="pulse-dot" aria-hidden="true"></span>
        Municipalities describe the initiative’s intended coverage. Listing does not imply partnership,
        participation, or endorsement by any local organization or government unit.
      </p>
    </div>
  </section>`;
}
