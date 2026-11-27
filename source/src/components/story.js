import { icons } from '../icons.js';

export function Story() {
  return `<section class="section story" id="story" aria-labelledby="story-title">
    <div class="container story-grid">
      <div class="story-copy reveal">
        <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Our Story</p>
        <h2 class="section-title lines" id="story-title">
          <span class="line"><span>Every Community Has a Story.</span></span>
          <span class="line"><span class="title-muted">Every Faith Deserves a Connection.</span></span>
        </h2>
        <p class="lead">
          Across Marinduque, different religious communities and faith-based organizations continue
          to serve people, strengthen families, organize activities, and contribute to their local
          communities.
        </p>
        <p>
          However, some organizations face challenges in accessing digital tools, managing
          information, communicating activities, and expanding their community initiatives.
        </p>
        <p>ConnectChurch was envisioned as a digital initiative that aims to help address these challenges.</p>
        <p>
          Through accessible technology and meaningful collaboration, we want to help religious
          organizations become more connected, organized, and digitally empowered.
        </p>

        <div class="story-note">
          <span class="story-note-mark" aria-hidden="true">“</span>
          <p>Technology is only useful when it helps people serve people.</p>
        </div>
      </div>

      <figure class="story-media reveal" data-anim="right">
        <span class="story-index" aria-hidden="true">01</span>
        <div class="story-media-frame">
          <img
            src="images/story-planning.jpg"
            alt="Volunteers planning a community outreach activity together around a table with notebooks and a laptop"
            width="880"
            height="1184"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption class="story-caption">
          <span class="story-caption-icon" aria-hidden="true">${icons.pin}</span>
          <span>
            <strong>Marinduque, Philippines</strong>
            <small>Communities serving communities</small>
          </span>
        </figcaption>
      </figure>
    </div>
  </section>`;
}
