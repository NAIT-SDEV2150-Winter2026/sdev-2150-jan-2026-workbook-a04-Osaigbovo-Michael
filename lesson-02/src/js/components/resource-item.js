const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">

  <button type="button" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h2 class="h6 mb-1 resource-title"></h2>
      <small class="resource-category"></small>
      <small class="resource-id"></small>
    </div>
    <p class="mb-1 small text-body-secondary resource-summary"></p>
    <small class="text-body-secondary resource-location"></small>
    <small class="text-body-secondary resource-hours"></small>
    <small class="text-body-secondary resource-contact"></small>
  </button>
`;
 
class ResourceItem extends HTMLElement {
  #data = [];
  constructor() {
    super();
    this.data = null;
    this.attachShadow({ mode: 'open' });
  }
  set data(obj){
    this.#data = obj;
    this.renderResourceItem();
  }

  renderResourceItem() {
    if(!this.#data)
      return;
    else {
      const el = template.content.cloneNode(true);
      if(this.#data.active) {
        el.querySelector('button').classList.add('active');
      }
        el.querySelector('.resource-id').textContent = this.#data.id;
        el.querySelector('.resource-title').textContent = this.#data.title;
        el.querySelector('.resource-category').textContent = this.#data.category;
        el.querySelector('.resource-summary').textContent = this.#data.summary;
        el.querySelector('.resource-location').textContent = this.#data.location;
        el.querySelector('.resource-hours').textContent = this.#data.hours;
        el.querySelector('.resource-contact').textContent = this.#data.contact;

      this.shadowRoot.innerHTML = '';
      this.shadowRoot.appendChild(el);
    }
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    if(this.#data){
      this.renderResourceItem();
    }
  }
}

customElements.define('resource-item', ResourceItem);
export default ResourceItem;