import { icons } from '../icons.js';

const purposes = [
  {
    number: '01',
    icon: icons.laptop,
    title: 'Digital Accessibility',
    copy: 'Help religious organizations discover and access affordable or accessible digital tools, regardless of their size and available resources.',
  },
  {
    number: '02',
    icon: icons.clipboard,
    title: 'Organizational Support',
    copy: 'Provide opportunities to improve administrative processes, communication, information management, and organizational coordination.',
  },
  {
    number: '03',
    icon: icons.megaphone,
    title: 'Community Connection',
    copy: 'Help participating organizations reach their communities through digital information, announcements, activities, and outreach initiatives.',
  },
  {
    number: '04',
    icon: icons.handshake,
    title: 'Meaningful Collaboration',
    copy: 'Encourage respectful connections and voluntary cooperation among different religious organizations and faith communities.',
  },
];

export function Purpose() {
  return `<section class="section purpose" id="purpose" aria-labelledby="purpose-title">
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
        ${purposes
          .map(
            (item, index) => `<article class="purpose-card reveal" style="--delay: ${(index % 2) * 110}ms">
              <div class="purpose-card-top">
                <span class="purpose-icon" aria-hidden="true">${item.icon}</span>
                <span class="purpose-index" aria-hidden="true">${item.number}</span>
              </div>
              <h3>${item.title}</h3>
              <p>${item.copy}</p>
            </article>`,
          )
          .join('')}
      </div>
    </div>
  </section>`;
}
