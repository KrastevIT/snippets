$(document).on('click', function (e) {
  event.preventDefault();
  event.stopPropagation();

  const target = $(e.target);
  const outside = target.closest('.selector').length === 0

  if (outside) {
      $('.selector').slideUp(100)
  }
});
