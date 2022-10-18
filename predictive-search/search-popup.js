(() => {
  if (customElements.get('search-popup')) {
    return;
  }

  class SearchPopup extends HTMLElement {
    constructor() {
      super();
      this.buttonOpen = this.querySelector('.js-open');
      this.buttonClose = this.querySelector('.js-close');
      this.searchPopup = this.querySelector('.predictive-search');
    }

    connectedCallback() {
      this.buttonOpen.addEventListener('click', this.open.bind(this));
      this.buttonClose.addEventListener('click', this.close.bind(this));
    }

    open(e) {
      e.preventDefault();
      this.searchPopup.classList.add('is-visible');
    }

    close(e) {
      e.preventDefault();
      this.searchPopup.classList.remove('is-visible');
    }
  }

  customElements.define('search-popup', SearchPopup);
})();
