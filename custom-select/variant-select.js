class VariantSelects extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('change', this.onVariantChange);
  }

  onVariantChange() {
    this.updateOptions();
    this.updateMasterId();
    this.toggleAddButton();
    this.updateURL();
    this.updateVariantInput();
    this.updatePrice();
  }

  updateOptions() {
    this.options = Array.from(this.querySelectorAll('select'), (select) => select.value);
  }

  updateMasterId() {
    this.currentVariant = this.getVariantData().find((variant) => {
      return !variant.options.map((option, index) => {
        return this.options[index] === option;
      }).includes(false);
    });
  }

  toggleAddButton() {
    let disable = !this.currentVariant.available;
    const productForm = document.getElementById('product-form-installment');
    if (!productForm) return;
    const addButton = productForm.querySelector('[name="add"]');
    const addButtonText = productForm.querySelector('[name="add"] > span');

    if (!addButton) return;

    if (disable) {
      addButton.setAttribute('disabled', 'disabled');
      addButtonText.textContent = Shopify.locales.sold_out;
    } else {
      addButton.removeAttribute('disabled');
      addButtonText.textContent = Shopify.locales.add_to_cart;
    }
  }

  updateURL() {
    if (!this.currentVariant || this.dataset.updateUrl === 'false') return;
    window.history.replaceState({ }, '', `${this.dataset.url}?variant=${this.currentVariant.id}`);
  }

  updateVariantInput() {
    const productForms = document.querySelectorAll(`#product-form-${this.dataset.section}, #product-form-installment`);
    productForms.forEach((productForm) => {
      const input = productForm.querySelector('input[name="id"]');
      input.value = this.currentVariant.id;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  updatePrice() {
    let price = document.querySelector(`#price-${this.dataset.section} > p`);
    let compareAtPrice = document.getElementById(`price-compare-${this.dataset.section}`);
    price.textContent = Shopify.formatMoney(this.currentVariant.price, Shopify.current_money_format);

    if(this.currentVariant.compare_at_price > this.currentVariant.price ) {
      compareAtPrice.textContent = Shopify.formatMoney(this.currentVariant.compare_at_price, Shopify.current_money_format);
      compareAtPrice.classList.remove('hidden');
    } else {
      compareAtPrice.classList.add('hidden');
    }
  }

  getVariantData() {
    this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
    return this.variantData;
  }
}

customElements.define('variant-selects', VariantSelects);

class VariantRadios extends VariantSelects {
  constructor() {
    super();
  }

  updateOptions() {
    const fieldsets = Array.from(this.querySelectorAll('fieldset'));
    this.options = fieldsets.map((fieldset) => {
      return Array.from(fieldset.querySelectorAll('input')).find((radio) => radio.checked).value;
    });
  }
}

customElements.define('variant-radios', VariantRadios);
