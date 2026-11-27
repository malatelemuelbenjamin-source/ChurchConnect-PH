import { icons } from '../icons.js';

const benefits = [
  {
    icon: icons.network,
    title: 'A Shared Digital Home',
    copy: 'One respectful space where organizations can be found, share updates, and stay connected with the people they serve.',
  },
  {
    icon: icons.laptop,
    title: 'Everyday Work, Made Simpler',
    copy: 'Practical tools for records, events, volunteers, and communication — shaped around each organization’s capacity.',
  },
  {
    icon: icons.handshake,
    title: 'A Wider Circle of Support',
    copy: 'Opportunities to learn from, collaborate with, and support other faith communities across the island.',
  },
];

const stats = [
  { value: 12, label: 'Solution areas' },
  { value: 6, label: 'Municipalities in scope' },
  { value: 2, label: 'Languages supported' },
  { value: 1, label: 'Shared purpose' },
];

export function Benefits() {
  return `<section class="section benefits" id="benefits" aria-labelledby="benefits-title">
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
        ${benefits
          .map(
            (benefit, index) => `<article class="benefit-card reveal" style="--delay: ${index * 90}ms">
              <span class="benefit-icon" aria-hidden="true">${benefit.icon}</span>
              <h3>${benefit.title}</h3>
              <p>${benefit.copy}</p>
            </article>`,
          )
          .join('')}
      </div>

      <div class="benefit-stats reveal">
        <p class="benefit-stats-label">ConnectChurch at a glance</p>
        <div class="benefit-stats-grid">
          ${stats
            .map(
              (stat) => `<div class="benefit-stat">
                <strong data-count="${stat.value}">${stat.value}</strong>
                <span>${stat.label}</span>
              </div>`,
            )
            .join('')}
        </div>
      </div>
    </div>
  </section>`;
}
