const $accordion = $('.js-accordion');

$accordion.on('click', '.accordion__head', function(event) {
  event.preventDefault();

  const $this = $(this);

  $this
  .next()
  .stop()
  .slideToggle(400)
  .parent()
  .toggleClass('is-expanded')
  .siblings('.is-expanded')
  .removeClass('is-expanded')
  .children('.accordion__body')
  .stop()
  .slideToggle(400);
});
