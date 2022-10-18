(() => {
  if (customElements.get('predictive-search')) {
    return;
  }

  class PredictiveSearch extends HTMLElement {
    constructor() {
      super();
      this.input = this.querySelector('input[type="search"]');
      this.body = document.querySelector('body');
    }

    connectedCallback() {
      this.input.addEventListener('input', this.search.bind(this))
    }

    search() {
      let predictiveSearchSection = document.querySelector('.predictive-search__result');
      let terms = this.input.value;


      if(!terms) {
        terms = null;
      }

      fetch(window.Shopify.routes.root + `search/suggest?q=${terms}&resources[type]=product&section_id=predictive-search`)
        .then((response) => response.text())
        .then((text) => {
          const resultsMarkup = new DOMParser()
          .parseFromString(text, 'text/html')
          .querySelector('#shopify-section-predictive-search').innerHTML;

          if(text.includes('card-product')) {
            this.body.classList.add('no-scroll');
          }else {
            this.body.classList.remove('no-scroll');
          }

          predictiveSearchSection.innerHTML = resultsMarkup;
        }
      );
    }
  }

  customElements.define('predictive-search', PredictiveSearch);
})();
