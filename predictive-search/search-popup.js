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
      this.input = this.querySelector('input[type="search"]');
      this.header = document.querySelector('.header');
      this.body = document.querySelector('body');
    }

    connectedCallback() {
      this.buttonOpen.addEventListener('click', this.open.bind(this));
      this.buttonClose.addEventListener('click', this.close.bind(this));
    }

    open(e) {
      e.preventDefault();
      this.searchPopup.classList.add('is-visible');
      this.input.focus();
      this.header.setAttribute('is-open', '');

      if(this.header.hasAttribute('transparent')) {
        this.header.classList.remove('header--transparent');
      }

      if(this.searchPopup.querySelector('.card-product')) {
        this.body.classList.add('no-scroll');
      }
    }

    close(e) {
      e.preventDefault();
      this.searchPopup.classList.remove('is-visible');
      this.header.removeAttribute('is-open');
      this.body.classList.remove('no-scroll');

      if(this.header.hasAttribute('transparent')) {
        this.header.classList.add('header--transparent');
      }
    }
  }

  customElements.define('search-popup', SearchPopup);
})();
