import { icons } from '../icons.js';

const values = [
  {
    icon: icons.handshake,
    title: 'Respect',
    copy: 'We respect the identity, beliefs, traditions, and independence of every participating religious organization.',
  },
  {
    icon: icons.users,
    title: 'Inclusivity',
    copy: 'We welcome diverse faith communities and organizations without discrimination based on religious denomination or affiliation.',
  },
  {
    icon: icons.hands,
    title: 'Service',
    copy: 'We believe technology should help organizations serve people and communities more effectively.',
  },
  {
    icon: icons.network,
    title: 'Unity',
    copy: 'We encourage meaningful connections and respectful collaboration while recognizing differences in beliefs and practices.',
  },
  {
    icon: icons.spark,
    title: 'Innovation',
    copy: 'We promote practical and accessible digital solutions that help organizations adapt to a changing world.',
  },
  {
    icon: icons.shield,
    title: 'Integrity',
    copy: 'We value transparency, responsible technology, data privacy, and accountability in every initiative.',
  },
];

export function Values() {
  return `<section class="section connects values" id="values" aria-labelledby="values-title">
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
        ${values
          .map(
            (value, index) => `<article class="connect-card reveal" style="--delay: ${(index % 3) * 90}ms">
              <div class="connect-card-top">
                <span class="connect-icon" aria-hidden="true">${value.icon}</span>
                <span class="connect-number" aria-hidden="true">0${index + 1}</span>
              </div>
              <h3>${value.title}</h3>
              <p>${value.copy}</p>
            </article>`,
          )
          .join('')}
      </div>
    </div>
  </section>`;
}
