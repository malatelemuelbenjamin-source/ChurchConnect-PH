import { icons } from '../icons.js';

const categories = [
  {
    number: '01',
    icon: icons.hands,
    title: 'Catholic Communities',
    copy: 'Parishes and lay communities serving their members and local neighborhoods.',
  },
  {
    number: '02',
    icon: icons.book,
    title: 'Protestant Churches',
    copy: 'Congregations from Reformed, Lutheran, Anglican, and other Protestant traditions.',
  },
  {
    number: '03',
    icon: icons.megaphone,
    title: 'Evangelical and Born Again Churches',
    copy: 'Independent fellowships focused on outreach and community life.',
  },
  {
    number: '04',
    icon: icons.users,
    title: 'Baptist Communities',
    copy: 'Baptist churches and fellowships serving their local neighborhoods.',
  },
  {
    number: '05',
    icon: icons.compass,
    title: 'Methodist Communities',
    copy: 'Congregations rooted in community, service, and shared ministry.',
  },
  {
    number: '06',
    icon: icons.globe,
    title: 'Iglesia ni Cristo Communities',
    copy: 'Congregations contributing to community life across the island.',
  },
  {
    number: '07',
    icon: icons.calendar,
    title: 'Seventh-day Adventist Communities',
    copy: 'Congregations and community programs serving people across the island.',
  },
  {
    number: '08',
    icon: icons.arch,
    title: 'Muslim Communities',
    copy: 'Congregations and community organizations contributing to island life.',
  },
  {
    number: '09',
    icon: icons.layers,
    title: 'Other Religious Organizations',
    copy: 'Religious groups and spiritual communities of other traditions.',
  },
  {
    number: '10',
    icon: icons.handshake,
    title: 'Faith-Based Community Groups',
    copy: 'Faith-inspired organizations and volunteer groups serving the common good.',
  },
];

export function Faith() {
  return `<section class="section faith" id="faith" aria-labelledby="faith-title">
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
        ${categories
          .map(
            (category, index) => `<article class="faith-card reveal" style="--delay: ${(index % 5) * 70}ms">
              <span class="faith-card-number" aria-hidden="true">${category.number}</span>
              <span class="faith-icon" aria-hidden="true">${category.icon}</span>
              <h3>${category.title}</h3>
              <p>${category.copy}</p>
              <span class="faith-card-line" aria-hidden="true"></span>
            </article>`,
          )
          .join('')}
      </div>

      <div class="faith-disclaimer reveal">
        <span class="faith-note-icon" aria-hidden="true">${icons.info}</span>
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
  </section>`;
}
