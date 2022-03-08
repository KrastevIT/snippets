import 'ez-plus';
import 'slick-carousel';

const zoomSetting = {
  zoomType: 'lens',
  lensShape: 'round',
  lensSize: 200
}

$('.js-product-slider .slick-active img').ezPlus(zoomSetting);

$('.js-product-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
   var img = $(slick.$slides[nextSlide]).find("img");
   $('.zoomWindowContainer,.zoomContainer').remove();
   $(img).ezPlus(zoomSetting);
});
