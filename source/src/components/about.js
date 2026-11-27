import { icons } from '../icons.js';

const points = [
  'A shared digital space for churches, religious organizations, and faith communities',
  'Access to practical technology and digital opportunities',
  'Stronger connection with members and local communities',
];

export function About() {
  return `<section class="section about" id="about" aria-labelledby="about-title">
    <div class="container about-grid">
      <figure class="about-media reveal" data-anim="left">
        <div class="about-media-frame">
          <img
            src="images/gathering.jpg"
            alt="People of different ages and backgrounds talking warmly together in a bright community hall"
            width="1184"
            height="880"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption class="about-badge">
          <span class="about-badge-icon" aria-hidden="true">${icons.network}</span>
          <span>
            <strong>A BetterGo Marinduque Initiative</strong>
            <small>Digital connection for faith communities</small>
          </span>
        </figcaption>
      </figure>

      <div class="about-copy reveal" data-anim="right" style="--delay: 120ms">
        <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>About ConnectChurch</p>
        <h2 class="section-title" id="about-title">
          More Than a Platform.
          <span class="title-muted">A Connected Faith Community.</span>
        </h2>
        <p class="lead">
          Every church, religious organization, and faith community has its own mission, ministries,
          and identity. ConnectChurch aims to provide a shared digital space where participating
          communities can discover opportunities, access technology solutions, and strengthen their
          connection with the people they serve.
        </p>
        <p>
          This is an introductory initiative — a thoughtful first step toward a connected faith
          community in Marinduque, shaped together with the communities it serves.
        </p>

        <ul class="about-list">
          ${points
            .map(
              (point) => `<li>
                <span class="list-icon" aria-hidden="true">${icons.check}</span>
                <span>${point}</span>
              </li>`,
            )
            .join('')}
        </ul>

        <div class="about-note">
          <span class="about-note-line" aria-hidden="true"></span>
          <p>No religion or denomination is favored. Every participating community is welcomed and respected.</p>
        </div>
      </div>
    </div>
  </section>`;
}
