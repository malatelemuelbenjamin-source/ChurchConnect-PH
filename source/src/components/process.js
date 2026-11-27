import { icons } from '../icons.js';

const steps = [
  {
    number: 'Step 01',
    icon: icons.search,
    title: 'Understand',
    copy: 'Understand the organization’s current challenges, context, and needs — before suggesting any tool.',
  },
  {
    number: 'Step 02',
    icon: icons.clipboard,
    title: 'Plan',
    copy: 'Identify suitable digital solutions based on its requirements, capacity, and priorities.',
  },
  {
    number: 'Step 03',
    icon: icons.code,
    title: 'Develop',
    copy: 'Design and develop appropriate technology solutions with the organization’s input along the way.',
  },
  {
    number: 'Step 04',
    icon: icons.hands,
    title: 'Support',
    copy: 'Provide guidance and assistance according to the agreed scope, at a pace the organization can sustain.',
  },
];

export function Process() {
  return `<section class="section process" id="process" aria-labelledby="process-title">
    <div class="container">
      <div class="process-head reveal">
        <div>
          <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>How We Can Help</p>
          <h2 class="section-title" id="process-title">
            A Thoughtful Path<br />
            <span class="title-muted">from Challenge to Solution.</span>
          </h2>
        </div>
        <div class="process-intro">
          <p>
            ConnectChurch proposes a simple, collaborative four-step approach — starting with
            listening, and ending with support that fits the organization’s scope.
          </p>
          <p class="process-status">
            <span class="status-dot" aria-hidden="true"></span>
            Proposed service approach · not an operating service.
          </p>
        </div>
      </div>

      <ol class="process-track">
        ${steps
          .map(
            (step, index) => `<li class="process-step reveal" style="--delay: ${index * 110}ms">
              <span class="step-icon" aria-hidden="true">${step.icon}</span>
              <span class="step-number">${step.number}</span>
              <h3>${step.title}</h3>
              <p>${step.copy}</p>
            </li>`,
          )
          .join('')}
      </ol>
    </div>
  </section>`;
}
