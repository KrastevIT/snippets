const subscriptionSelectorInit = () => {
    const selectors = {
      productSelect: '#js-product-select',
      sellingPlanInput: '.js-selling-plan-id',
      plansSelector: '.js-subscription-selector',
      frequencyWrapper: '.js-product-frequency-wrapper',
      countInput: '.js-subscription-count',
      subscriptionDown: '.js-subscription-down',
      subscriptionUp: '.js-subscription-up',
      submit: '.js-submit-subscription'
    }

  /** Change selling plan selector */
  $(selectors.productSelect).change(function(event) {
    const productId = $(this).val();
    const wrapper = $(`.js-product-frequency-wrapper[product-id="${productId}"]`)

    wrapper
    .removeClass('hidden')
    .siblings()
    .addClass('hidden');

    const planId = wrapper
    .find('select')
    .val();

    $(selectors.sellingPlanInput).val(planId);
  });

  /** Change selling plan input */
  $(selectors.plansSelector).change(function(event) {
    const id = $(this).val();
    $(selectors.sellingPlanInput).val(id);
  });

  /** Submit */
  $(selectors.submit).on('click', function(event) {
    event.preventDefault();

    const productId = $(selectors.productSelect).val();
    const planId = $(selectors.sellingPlanInput).val();
    const quantity = $(selectors.countInput).val();

    const data = {
      id: productId,
      quantity: quantity,
      selling_plan: planId
    };

    Cart.add(data);
  });

  /** Increase count */
  $(selectors.subscriptionUp).on('click', function(event) {
    event.preventDefault();
    let count = Number($(selectors.countInput).val()) + 1;
    $(selectors.countInput).val(count)
  });

  /** Decrease count */
  $(selectors.subscriptionDown).on('click', function(event) {
    event.preventDefault();
    let count = Number($(selectors.countInput).val()) - 1;
    if (count <= 0) {count = 1};
    $(selectors.countInput).val(count)
  });
}

subscriptionSelectorInit();

