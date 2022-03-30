import 'ez-plus';
import 'slick-carousel';

const zoomSetting = {
  zoomType: 'lens',
  lensShape: 'round',
  lensSize: 200
}

$('.js-product-slider .slick-active img').ezPlus(zoomSetting);

$('.js-product-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
   var img = $(slick.$slider.find('.slick-active img'));
   $('.zoomWindowContainer,.zoomContainer').remove();
   $(img).ezPlus(zoomSetting);
});
