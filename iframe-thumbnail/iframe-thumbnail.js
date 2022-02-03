let player = new Vimeo.Player(document.querySelector('.js-video iframe'));

$('.js-button-play').on('click', function(event) {
  event.preventDefault();
  player.play();
});
