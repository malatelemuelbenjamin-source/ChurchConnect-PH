import { icons } from '../icons.js';

const audiences = [
  {
    icon: icons.users,
    title: 'Faith & community leaders',
    copy: 'Learn how your church, congregation, or community could participate and what ConnectChurch could offer.',
  },
  {
    icon: icons.church,
    title: 'Religious organizations',
    copy: 'Share the work your organization is doing and the digital needs your team is facing.',
  },
  {
    icon: icons.heart,
    title: 'Community partners',
    copy: 'Explore ways to support faith communities across Marinduque through respectful collaboration.',
  },
];

export function Contact() {
  return `<section class="section contact" id="contact" aria-labelledby="contact-title">
    <div class="contact-glow" aria-hidden="true"></div>
    <div class="container contact-grid">
      <div class="contact-copy reveal">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-line" aria-hidden="true"></span>Contact</p>
        <h2 class="section-title title-on-dark" id="contact-title">
          Let's Start a<br />
          <span class="accent">Conversation.</span>
        </h2>
        <p>
          ConnectChurch is being introduced personally, community by community. If you lead a
          church, religious organization, or faith-based group and would like to be part of the
          conversation, we would be glad to hear from you.
        </p>
        <a class="btn btn-gold" href="#mission">
          Explore ConnectChurch
          <span class="btn-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </a>
        <p class="contact-meta">
          <span class="pulse-dot" aria-hidden="true"></span>
          Marinduque, Philippines · A BetterGo Marinduque Initiative
        </p>
      </div>

      <div class="contact-panel reveal" data-anim="right" style="--delay: 120ms">
        <p class="contact-panel-title">Who we would love to hear from</p>
        <div class="contact-list">
          ${audiences
            .map(
              (item) => `<div class="contact-row">
                <span class="contact-icon" aria-hidden="true">${item.icon}</span>
                <div>
                  <h3>${item.title}</h3>
                  <p>${item.copy}</p>
                </div>
              </div>`,
            )
            .join('')}
        </div>
        <div class="contact-note">
          ${icons.mail}
          <p>Official contact details will be published here as the initiative launches.</p>
        </div>
      </div>
    </div>
  </section>`;
}
