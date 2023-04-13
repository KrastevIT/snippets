(() => {
  if (customElements.get('currency-switcher')) {
    return;
  }

  class CurrencySwitcher extends HTMLElement {
    constructor() {
      super();
      this.inputs = this.querySelectorAll('input');
      this.toggleButton = this.querySelector('button[type="button"]');
    }

    connectedCallback() {
      this.inputs.forEach(input => {
        input.addEventListener('change', this.submit.bind(this));
      });

      this.toggleButton.addEventListener(
        'click',
        this.toggle.bind(this)
      );
      document.addEventListener('click', this.close.bind(this));
    }

    submit(event) {
      event.target.form.submit();
    }

    toggle(event) {
      event.preventDefault();

      if (this.hasAttribute('open')) {
        this.toggleButton.blur();
      }

      this.toggleAttribute('open');
    }

    close(event) {
      if (!event.target.closest('currency-switcher')) {
        this.removeAttribute('open');
        this.toggleButton.blur();
      }
    }
  }

  customElements.define('currency-switcher', CurrencySwitcher);
})();
