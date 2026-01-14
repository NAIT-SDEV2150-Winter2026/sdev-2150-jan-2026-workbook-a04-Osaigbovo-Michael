const template = document.createElement('template');
template.innerHTML = `...`;

class ResourceHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('resource-header', ResourceHeader);