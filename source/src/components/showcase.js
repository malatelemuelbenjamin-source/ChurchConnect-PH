const calendarDays = Array.from({ length: 28 }, (_, index) => index + 1);
const highlightedDays = new Set([4, 11, 17, 24]);

function browserBar(label) {
  return `<div class="browser-bar" aria-hidden="true">
    <span class="browser-dot"></span><span class="browser-dot"></span><span class="browser-dot"></span>
    <span class="browser-url">${label}</span>
  </div>`;
}

function websiteMock() {
  return `<div class="browser">
    ${browserBar('sample-organization')}
    <div class="mock-site" aria-hidden="true">
      <div class="mock-site-nav">
        <strong>Sample Organization</strong>
        <span>Home</span><span>About</span><span>Activities</span>
        <em>Contact</em>
      </div>
      <div class="mock-site-hero">
        <p class="mock-kicker">A community of service</p>
        <p class="mock-headline">A place to gather.<br />A community to serve.</p>
        <span class="mock-cta">Learn more</span>
      </div>
      <div class="mock-site-cards">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>`;
}

function dashboardMock() {
  return `<div class="browser">
    ${browserBar('sample-dashboard')}
    <div class="mock-dash" aria-hidden="true">
      <aside class="mock-side">
        <strong>Sample Org</strong>
        <span class="is-active">Overview</span>
        <span>Members</span>
        <span>Events</span>
        <span>Documents</span>
      </aside>
      <div class="mock-dash-main">
        <div class="mock-dash-top"><strong>Overview</strong><em>Sample data</em></div>
        <div class="mock-stats">
          <div><b>128</b><small>Members</small></div>
          <div><b>06</b><small>Events</small></div>
          <div><b>24</b><small>Volunteers</small></div>
        </div>
        <div class="mock-chart">
          <span style="--h: 42%"></span><span style="--h: 68%"></span><span style="--h: 54%"></span>
          <span style="--h: 82%"></span><span style="--h: 60%"></span><span style="--h: 74%"></span>
          <span style="--h: 46%"></span>
        </div>
        <div class="mock-rows"><span></span><span></span><span></span></div>
      </div>
    </div>
  </div>`;
}

function eventsMock() {
  return `<div class="browser">
    ${browserBar('sample-events')}
    <div class="mock-events" aria-hidden="true">
      <div class="mock-events-head">
        <strong>Activities</strong>
        <em>Sample month</em>
      </div>
      <div class="mock-calendar">
        ${['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => `<span class="mock-dow">${day}</span>`).join('')}
        ${calendarDays
          .map(
            (day) =>
              `<span class="mock-day${highlightedDays.has(day) ? ' is-marked' : ''}">${day}</span>`,
          )
          .join('')}
      </div>
      <div class="mock-event-list">
        <div><i></i><span>Community Outreach</span><small>Sample</small></div>
        <div><i></i><span>Volunteer Orientation</span><small>Sample</small></div>
      </div>
    </div>
  </div>`;
}

const mockups = [
  {
    title: 'Organization Website',
    copy: 'A clear public home for your organization’s story, leadership, announcements, and activities.',
    render: websiteMock,
  },
  {
    title: 'Management Dashboard',
    copy: 'A private overview for authorized officers — records, schedules, and summaries in one view.',
    render: dashboardMock,
  },
  {
    title: 'Events & Activities Portal',
    copy: 'An organized calendar where the community can find gatherings and activity information.',
    render: eventsMock,
  },
];

export function Showcase() {
  return `<section class="section showcase" id="showcase" aria-labelledby="showcase-title">
    <div class="showcase-glow" aria-hidden="true"></div>
    <div class="container">
      <div class="showcase-head reveal">
        <div>
          <p class="eyebrow eyebrow-light"><span class="eyebrow-line" aria-hidden="true"></span>Featured Solution Showcase</p>
          <h2 class="section-title title-on-dark" id="showcase-title">Built Around Your Organization’s Needs.</h2>
        </div>
        <p class="showcase-intro">
          Illustrative previews of the kind of platforms ConnectChurch hopes to develop with
          participating organizations. Sample content only — no organization is represented.
        </p>
      </div>

      <div class="showcase-grid">
        ${mockups
          .map(
            (mockup, index) => `<figure class="mockup reveal" style="--delay: ${index * 100}ms">
              <p class="mockup-badge"><span class="status-dot" aria-hidden="true"></span>Concept Preview — Not Yet Operational</p>
              ${mockup.render()}
              <figcaption>
                <h3>${mockup.title}</h3>
                <p>${mockup.copy}</p>
              </figcaption>
            </figure>`,
          )
          .join('')}
      </div>

      <p class="showcase-note reveal">
        All interfaces shown are static concepts with placeholder content. They are not connected to a
        database, account system, or live service.
      </p>
    </div>
  </section>`;
}
