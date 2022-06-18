$(document).on('click', function (e) {
  const target = $(e.target);
  const outside = target.closest('.selector').length === 0

  if (outside) {
      $('.selector').slideUp(100)
  }
});
