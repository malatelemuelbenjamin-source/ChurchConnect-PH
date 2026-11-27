import { icons } from '../icons.js';

const services = [
  {
    icon: icons.globe,
    tag: 'Web Presence',
    title: 'Organization Website',
    copy: 'A professional online home that introduces your organization, shares its story, and keeps your community informed.',
    features: [
      'Organization profile',
      'About and history',
      'Leadership information',
      'Contact details',
      'Announcements and activity highlights',
    ],
  },
  {
    icon: icons.dashboard,
    tag: 'Operations',
    title: 'Organization Management System',
    copy: 'Digital tools that help organize administrative activities, records, and internal coordination in one place.',
    features: [
      'Organization records',
      'Member information management',
      'Attendance management',
      'Ministry or department records',
      'Internal administrative tools',
    ],
  },
  {
    icon: icons.calendar,
    tag: 'Events',
    title: 'Events & Activities Management',
    copy: 'Present gatherings and activities clearly, with schedules and information your community can find easily.',
    features: [
      'Event calendars',
      'Worship or gathering schedules',
      'Community activities',
      'Registration information',
      'Event announcements',
    ],
  },
  {
    icon: icons.megaphone,
    tag: 'Communication',
    title: 'Community Announcements',
    copy: 'A simple digital space for notices, reminders, and updates that matter to your community.',
    features: [
      'Public announcements',
      'Activity updates',
      'Community notices',
      'Important reminders',
      'Information publishing',
    ],
  },
  {
    icon: icons.heart,
    tag: 'Care',
    title: 'Prayer & Pastoral Care',
    copy: 'Optional tools for organizations that offer prayer or pastoral support to their members.',
    features: [
      'Prayer request inquiries',
      'Pastoral appointment requests',
      'Private communication channels',
      'Confidentiality controls',
    ],
    note: 'Optional and shaped according to each organization’s beliefs, practices, and leadership.',
  },
  {
    icon: icons.users,
    tag: 'Volunteers',
    title: 'Volunteer Management',
    copy: 'Coordinate volunteers, schedules, and service opportunities without scattered messages and spreadsheets.',
    features: [
      'Volunteer directories',
      'Activity assignments',
      'Volunteer schedules',
      'Participation records',
      'Community service coordination',
    ],
  },
  {
    icon: icons.sprout,
    tag: 'Outreach',
    title: 'Community Outreach Management',
    copy: 'Support charitable and community-oriented activities with organized information and coordination.',
    features: [
      'Outreach program information',
      'Beneficiary coordination',
      'Relief activity monitoring',
      'Volunteer coordination',
      'Community project documentation',
    ],
  },
  {
    icon: icons.wallet,
    tag: 'Finance',
    title: 'Donation & Financial Record Management',
    copy: 'Optional tools for responsible financial administration, kept private to authorized officers.',
    features: [
      'Donation records',
      'Offering records where applicable',
      'Expense tracking',
      'Financial summaries',
      'Digital acknowledgment records',
    ],
    note: 'Financial information remains private and accessible only to authorized organization officers.',
  },
  {
    icon: icons.book,
    tag: 'Resources',
    title: 'Digital Resource Center',
    copy: 'Organize and present educational and religious materials in one accessible place.',
    features: [
      'Video and sermon archives',
      'Educational resources',
      'Study materials',
      'Downloadable documents',
      'Livestream links',
    ],
    note: 'All content remains under the control of the respective organization.',
  },
  {
    icon: icons.folder,
    tag: 'Documents',
    title: 'Document Management System',
    copy: 'Keep important organizational documents organized, categorized, and easy to locate.',
    features: [
      'Digital document archives',
      'Organization files',
      'Document categorization',
      'Administrative records',
      'Secure document access',
    ],
  },
  {
    icon: icons.message,
    tag: 'Communication',
    title: 'Organization Communication Tools',
    copy: 'Help authorized representatives communicate consistently with their communities.',
    features: [
      'Announcement publishing',
      'Contact directories',
      'Communication coordination',
      'Activity reminders',
      'Digital information channels',
    ],
  },
  {
    icon: icons.code,
    tag: 'Custom Build',
    title: 'Custom App & Website Development',
    copy: 'Tailored technology solutions shaped around the specific needs of an individual organization.',
    features: [
      'Custom websites',
      'Web applications',
      'Mobile-friendly platforms',
      'Administrative systems',
      'Community service applications',
    ],
  },
];

export function Solutions() {
  return `<section class="section solutions" id="solutions" aria-labelledby="solutions-title">
    <div class="container">
      <div class="solutions-intro">
        <div class="solutions-intro-copy reveal">
          <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Our Digital Solutions</p>
          <h2 class="section-title lines" id="solutions-title">
            <span class="line"><span>Technology Solutions</span></span>
            <span class="line"><span>Designed for Every</span></span>
            <span class="line"><span class="title-muted">Faith Community.</span></span>
          </h2>
          <p class="solutions-lead">
            Every religious organization has unique needs and challenges. ConnectChurch aims to
            provide accessible, practical, and modern digital solutions that help organizations
            improve their operations, strengthen communication, and expand their community impact.
          </p>
          <p class="solutions-status">
            <span class="status-dot" aria-hidden="true"></span>
            Introductory phase · these solution areas are being prepared, not yet operating.
          </p>
        </div>

        <figure class="solutions-visual reveal" data-anim="right">
          <div class="solutions-visual-frame">
            <img
              src="images/tech-community.jpg"
              alt="Community coordinators collaborating around a laptop and printed schedules in a bright hall"
              width="1568"
              height="672"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="tech-chips" aria-hidden="true">
            <span class="tech-chip tech-chip--1"><span class="tech-chip-dot"></span>Community</span>
            <span class="tech-chip tech-chip--2"><span class="tech-chip-dot"></span>Communication</span>
            <span class="tech-chip tech-chip--3"><span class="tech-chip-dot"></span>Connection</span>
          </div>
        </figure>
      </div>

      <div class="service-grid">
        ${services
          .map(
            (service, index) => `<article class="service-card reveal" style="--delay: ${(index % 3) * 80}ms">
              <div class="service-card-top">
                <span class="service-icon" aria-hidden="true">${service.icon}</span>
                <span class="service-tag">${service.tag}</span>
              </div>
              <h3>${service.title}</h3>
              <p class="service-copy">${service.copy}</p>
              <button
                class="service-more"
                type="button"
                data-service-toggle
                aria-expanded="false"
                aria-controls="service-detail-${index + 1}"
              >
                <span class="service-more-label">Learn more</span>
                <span class="service-chevron" aria-hidden="true">${icons.chevron}</span>
              </button>
              <div class="service-detail" id="service-detail-${index + 1}">
                <div class="service-detail-inner">
                  <p class="service-detail-label">Possible features</p>
                  <ul>
                    ${service.features.map((feature) => `<li>${feature}</li>`).join('')}
                  </ul>
                  ${service.note ? `<p class="service-note">${service.note}</p>` : ''}
                </div>
              </div>
            </article>`,
          )
          .join('')}
      </div>

      <p class="solutions-footnote reveal">
        These are planned solution areas. Nothing here is presented as an operating service, and no
        organization is required to adopt any particular tool.
      </p>
    </div>
  </section>`;
}
