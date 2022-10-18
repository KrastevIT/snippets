(() => {
  if (customElements.get('currency-switcher')) {
    return;
  }

  class CurrencySwitcher extends HTMLElement {
    constructor() {
      super();
      this.inputs = this.querySelectorAll('input');
      this.toggleElement = this.querySelector('.js-toggle');
    }

    connectedCallback() {
      this.inputs.forEach(input => {
        input.addEventListener('change', this.submit.bind(this));
      })

      this.toggleElement.addEventListener('click', this.toggle.bind(this));
      document.addEventListener('click', this.close.bind(this));
    }

    submit(event) {
      event.target.form.submit();
    }

    toggle(event) {
      event.preventDefault();

      if(this.hasAttribute('open')) {
        this.removeAttribute('open');
      } else {
        this.setAttribute('open', '');
      }
    }

    close(event) {
     if(!event.target.closest('currency-switcher')) {
      this.removeAttribute('open');
     }
    }
  }

  customElements.define('currency-switcher', CurrencySwitcher);
})();
