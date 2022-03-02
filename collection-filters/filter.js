$('.js-filter-label').on('click', function(event) {
  event.preventDefault();

  const hasHidden = $(this)
  .parents('.js-filter')
  .find('.filter__group')
  .hasClass('hidden')

  $(this)
  .parents('.js-filter')
  .siblings('.js-filter')
  .removeClass('toggle')
  .find('.filter__group')
  .addClass('hidden')

  if (hasHidden) {
    $(this)
    .parents('.js-filter')
    .addClass('toggle')
    .find('.filter__group')
    .removeClass('hidden');
  } else {
    $(this)
    .parents('.js-filter')
    .removeClass('toggle')
    .find('.filter__group')
    .addClass('hidden')
  }
});

$(document).on('click', function(event) {
  const $outside = $(event.target).parents('.js-filter');

  if ($outside.length === 0) {
    $('.js-filter')
    .removeClass('toggle')
    .find('.filter__group')
    .addClass('hidden');
  }
});
