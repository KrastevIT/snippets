if(!customElements.get('selector-switcher')) {
  class SelectorSwitcher extends HTMLElement {
    constructor() {
      super();
      this.select = this.querySelector('select');
    }

    connectedCallback() {
      this.select.addEventListener('change', this.onChange)
    }

    onChange(event) {
      event.target.form.submit()
    }
  }

  customElements.define('selector-switcher', SelectorSwitcher);
}
