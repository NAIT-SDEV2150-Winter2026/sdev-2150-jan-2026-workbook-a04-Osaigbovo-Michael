import ResourceItem from './resource-item.js';
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
          </div>
        </div>
      </section>
`;

class ResourceResults extends HTMLElement {
    #resources = null;
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.#resources = [
        {
            active: true,
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
        this.shadowRoot.innerHTML = '';
        const el = template.content.cloneNode(true);
        const fragment = document.createDocumentFragment();

        for(const resources of this.#resources) {
          const ri = new ResourceItem();
          ri.data = resources;
          fragment.appendChild(ri);
        }
        el.querySelector(".list-group").appendChild(fragment);
        this.shadowRoot.appendChild(el);
    }
} 

customElements.define('resource-results', ResourceResults);