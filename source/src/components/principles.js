import { icons } from '../icons.js';

const principles = [
  {
    icon: icons.shield,
    title: 'Religious Freedom',
    copy: 'Every organization keeps the right to practice its own beliefs, traditions, and leadership without interference.',
  },
  {
    icon: icons.globe,
    title: 'Equal Opportunity',
    copy: 'Digital support is offered fairly to communities of every size, tradition, and level of digital experience.',
  },
  {
    icon: icons.key,
    title: 'Independence',
    copy: 'ConnectChurch never claims authority over, speaks for, or merges the identity of any organization.',
  },
  {
    icon: icons.handshake,
    title: 'Mutual Respect',
    copy: 'We encourage understanding and cooperation without asking anyone to compromise their convictions.',
  },
  {
    icon: icons.hands,
    title: 'Community Service',
    copy: 'We support voluntary activities that serve people and strengthen local communities.',
  },
  {
    icon: icons.lock,
    title: 'Privacy and Trust',
    copy: 'Organizational and individual information is handled with care, consent, and respect.',
  },
];

export function Principles() {
  return `<section class="section principles" id="principles" aria-labelledby="principles-title">
    <div class="principles-glow" aria-hidden="true"></div>
    <div class="container">
      <div class="principles-head reveal">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-line" aria-hidden="true"></span>Inclusive Community Principles</p>
        <h2 class="section-title title-on-dark" id="principles-title">
          Respecting Every Faith.<br />
          <span class="accent">Supporting Every Community.</span>
        </h2>
        <p>
          These principles guide how ConnectChurch hopes to work with every organization — with
          respect, fairness, and without interference.
        </p>
      </div>

      <div class="principles-grid">
        ${principles
          .map(
            (principle, index) => `<article class="principle-card reveal" style="--delay: ${(index % 3) * 80}ms">
              <div class="principle-card-top">
                <span class="principle-icon" aria-hidden="true">${principle.icon}</span>
                <span class="principle-index" aria-hidden="true">0${index + 1}</span>
              </div>
              <h3>${principle.title}</h3>
              <p>${principle.copy}</p>
            </article>`,
          )
          .join('')}
      </div>
    </div>
  </section>`;
}
