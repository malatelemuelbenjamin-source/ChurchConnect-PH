import { icons } from '../icons.js';

const levels = [
  {
    number: '01',
    icon: icons.sprout,
    title: 'Starting Digital',
    stage: 'Beginning the digital journey',
    copy: 'For organizations beginning their digital journey. Start with approachable tools — a clear online presence, organized announcements, and simple record keeping.',
  },
  {
    number: '02',
    icon: icons.trending,
    title: 'Growing Digitally',
    stage: 'Improving existing processes',
    copy: 'For organizations looking to improve existing processes. Connect information, coordinate events and volunteers, and communicate more consistently.',
  },
  {
    number: '03',
    icon: icons.layers,
    title: 'Advanced Digital Solutions',
    stage: 'Custom platforms and systems',
    copy: 'For organizations that need customized platforms and systems. Explore tailored technology, integrated workflows, and support shaped around specific needs.',
  },
];

export function Sizes() {
  return `<section class="section sizes" id="sizes" aria-labelledby="sizes-title">
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
        ${levels
          .map(
            (level, index) => `<article class="size-card reveal" style="--delay: ${index * 100}ms">
              <div class="size-card-top">
                <span class="size-icon" aria-hidden="true">${level.icon}</span>
                <span class="size-number" aria-hidden="true">${level.number}</span>
              </div>
              <p class="size-stage">${level.stage}</p>
              <h3>${level.title}</h3>
              <p>${level.copy}</p>
              <span class="size-meter" aria-hidden="true"><span></span><span></span><span></span></span>
            </article>`,
          )
          .join('')}
      </div>

      <p class="sizes-note reveal">
        These levels are illustrative starting points. Every engagement would begin with listening to
        an organization’s actual needs and resources.
      </p>
    </div>
  </section>`;
}
