(() => {
  if (customElements.get('purchase-options')) {
    return;
  }

  class PurchaseOptions extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.addEventListener('change', this.onChange.bind(this));
    }

    onChange(event) {
      if(event.target.value === 'one-time') {
        Array.from(
          this.querySelectorAll('[name="selling_plan"]')
        ).find(option => option.checked).checked = false;
      } else if(event.target.name == 'selling_plan_group') {
        event.target
        .closest('[data-selling-plan-group]')
        .querySelector('[name="selling_plan"]')
        .checked = true;
      } else {
        event.target
        .closest('[data-selling-plan-group]')
        .querySelector('[name="selling_plan_group"]')
        .checked = true;
      }
    }
  }

  customElements.define('purchase-options', PurchaseOptions);
})();
