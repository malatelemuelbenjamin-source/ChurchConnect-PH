import { icons } from '../icons.js';

const commitments = [
  {
    icon: icons.users,
    title: 'Voluntary Participation',
    copy: 'Joining ConnectChurch is always a choice. Organizations take part only when it genuinely serves their mission and community.',
  },
  {
    icon: icons.compass,
    title: 'Respect for Religious Independence',
    copy: 'We never interfere with the beliefs, teachings, leadership, or internal practices of any organization.',
  },
  {
    icon: icons.lock,
    title: 'Responsible Data Privacy',
    copy: 'Information is handled carefully, transparently, and only with the knowledge and consent of each organization.',
  },
  {
    icon: icons.key,
    title: 'Equal Access to Digital Opportunities',
    copy: 'Support is offered fairly to communities of every size, tradition, and level of digital experience.',
  },
];

export function Promises() {
  return `<section class="section promises" id="promises" aria-labelledby="promises-title">
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
        ${commitments
          .map(
            (item, index) => `<article class="promise reveal" style="--delay: ${index * 90}ms">
              <span class="promise-icon" aria-hidden="true">${item.icon}</span>
              <h3>${item.title}</h3>
              <p>${item.copy}</p>
            </article>`,
          )
          .join('')}
      </div>
    </div>
  </section>`;
}
