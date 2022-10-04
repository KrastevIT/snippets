(() => {
  if (customElements.get('card-product')) {
    return;
  }

  class CardProduct extends HTMLElement {
    constructor() {
      super();
      this.variants = JSON.parse(
        this.querySelector('[type="application/json"]').textContent
      );
      this.addEventListener('change', this.onVariantChange);
    }

    onVariantChange() {
      this.updateOptions();
      this.updateVariant();
      this.updateRegion();
    }

    updateOptions() {
      this.options = Array.from(
        this.querySelectorAll('input[type="radio"]:checked, select'),
        el => el.value
      );
    }

    updateVariant() {
      this.currentVariant = this.variants.find(variant => {
        return !variant.options
          .map((option, index) => this.options[index] === option)
          .includes(false);
      });
    }

    updateRegion() {
      const url = `/products/${this.id}?variant=${this.currentVariant.id}&section_id=${this.getAttribute("section-id")}`;

      fetch(url)
      .then(response => response.text())
      .then((result) => {
        const html = new DOMParser()
        .parseFromString(result, 'text/html')

        const handle = this.id;
        const cardProductHtml = html.getElementById(`${handle}`)

        this.updateHtml(cardProductHtml, 'js-price');
      })
    }

    updateHtml(html, classHandle) {
      this.querySelector(`.${classHandle}`).innerHTML = html.querySelector(`.${classHandle}`).innerHTML;
    }
  }

  customElements.define('card-product', CardProduct);
})();
