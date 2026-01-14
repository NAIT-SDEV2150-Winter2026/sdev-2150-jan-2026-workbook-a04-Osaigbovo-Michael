const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">

<section>
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <strong>Results</strong>
            <span class="badge text-bg-secondary">4</span>
          </div>

          <div class="list-group list-group-flush">
            <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
              <div class="d-flex w-100 justify-content-between">
                <h2 class="h6 mb-1">Peer Tutoring Centre</h2>
                <small>Academic</small>
              </div>
              <p class="mb-1 small text-body-secondary">Drop-in tutoring and study support.</p>
              <small class="text-body-secondary">Building W, Room W101</small>
            </button>

            <button type="button" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h2 class="h6 mb-1">Counselling Services</h2>
                <small>Wellness</small>
              </div>
              <p class="mb-1 small text-body-secondary">Confidential mental health supports.</p>
              <small class="text-body-secondary">Virtual and in-person</small>
            </button>

            <button type="button" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h2 class="h6 mb-1">Student Awards and Bursaries</h2>
                <small>Financial</small>
              </div>
              <p class="mb-1 small text-body-secondary">Funding options and application help.</p>
              <small class="text-body-secondary">Student Services, Main Floor CAT</small>
            </button>

            <button type="button" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h2 class="h6 mb-1">IT Service Desk</h2>
                <small>Tech</small>
              </div>
              <p class="mb-1 small text-body-secondary">Account access, Wi-Fi, BYOD support.</p>
              <small class="text-body-secondary">Library</small>
            </button>
          </div>
        </div>
      </section>
`;

class ResourceResults extends HTMLElement {
    constructor() {
        super();

        this.resources = [
        {
            id: 'tutoring',
            title: 'Peer Tutoring Centre',
            category: 'Academic',
            summary: 'Drop-in tutoring and study support.',
            location: 'Building E, Room 210',
            hours: 'Mon–Thu 10:00–16:00',
            contact: 'tutoring@example.edu',
            virtual: false,
            openNow: true,
        },
        {
            id: 'counselling',
            title: 'Counselling Services',
            category: 'Wellness',
            summary: 'Confidential mental health supports.',
            location: 'Virtual and in-person',
            hours: 'Mon–Fri 09:00–17:00',
            contact: 'wellness@example.edu',
            virtual: true,
            openNow: true,
        },
        {
            id: 'bursaries',
            title: 'Student Awards and Bursaries',
            category: 'Financial',
            summary: 'Funding options and application help.',
            location: 'Service Desk, Main Floor',
            hours: 'Mon–Fri 10:00–15:00',
            contact: 'awards@example.edu',
            virtual: true,
            openNow: false,
        },
        {
            id: 'it',
            title: 'IT Service Desk',
            category: 'Tech',
            summary: 'Account access, Wi-Fi, MFA resets.',
            location: 'Library entrance',
            hours: 'Mon–Fri 08:30–16:30',
            contact: 'it@example.edu',
            virtual: false,
            openNow: true,
        },
        ];
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('resource-results', ResourceResults);