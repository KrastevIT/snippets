import 'slick-carousel';

export const init = (slider = '.js-slider-multicolumn') => {
  const showPerRow = Number($(slider).attr('show-per-row'));
  const slidesToScroll = Number($(slider).attr('slides-to-scroll'));

  const config ={
    infinite: false,
    autoplay: false,
    slidesToShow: showPerRow,
    slidesToScroll: slidesToScroll
  };

   $(slider)
    .not('.slick-initialized')
    .slick(config);
}

init();

$(window).on('shopify:section:load', function() {
  init();
});
