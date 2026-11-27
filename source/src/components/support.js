import { icons } from '../icons.js';

const supportAreas = [
  {
    icon: icons.users,
    title: 'Digital Organization Profiles',
    copy: 'A clear public profile that introduces your organization, its mission, and its leadership.',
  },
  {
    icon: icons.laptop,
    title: 'Website and Digital Presence',
    copy: 'A professional place online to share your story, activities, and contact information.',
  },
  {
    icon: icons.calendar,
    title: 'Events and Activities Information',
    copy: 'Organized schedules and updates so your community can find gatherings easily.',
  },
  {
    icon: icons.megaphone,
    title: 'Community Announcements',
    copy: 'A simple space for notices, reminders, and important information.',
  },
  {
    icon: icons.handshake,
    title: 'Volunteer and Outreach Opportunities',
    copy: 'Coordinate volunteers and share service opportunities with your community.',
  },
  {
    icon: icons.dashboard,
    title: 'Digital Organization Tools',
    copy: 'Practical tools for records, communication, and everyday administration — shaped around your capacity.',
  },
];

export function SupportAreas() {
  return `<section class="section support" id="support" aria-labelledby="support-title">
    <div class="container">
      <div class="section-head support-head reveal">
        <div class="section-head-main">
          <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Proposed Digital Support</p>
          <h2 class="section-title" id="support-title">
            How ConnectChurch Supports<br />
            <span class="title-muted">Different Communities.</span>
          </h2>
        </div>
        <div class="section-head-copy">
          <p>
            Proposed digital support areas — not yet operational — that participating organizations
            could use according to their own needs, values, and independence.
          </p>
        </div>
      </div>

      <div class="support-grid">
        ${supportAreas
          .map(
            (area, index) => `<article class="support-card reveal" style="--delay: ${(index % 3) * 80}ms">
              <span class="support-icon" aria-hidden="true">${area.icon}</span>
              <span class="support-tag">Proposed</span>
              <h3>${area.title}</h3>
              <p>${area.copy}</p>
            </article>`,
          )
          .join('')}
      </div>

      <p class="support-note reveal">
        <span class="faith-note-icon" aria-hidden="true">${icons.info}</span>
        All support areas are proposed and subject to discussion. Nothing here is an operating
        service.
      </p>
    </div>
  </section>`;
}
