import 'slick-carousel';

export const sliderProducts = () => {
  const sliderInitial = '.slick-slider-products';
  const sliderSelector = '.js-slider-products';

  const sliderPrevArrow = `${sliderSelector} .slider__prev`;
  const sliderNextArrow = `${sliderSelector} .slider__next`;

  $(sliderInitial).slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $(sliderPrevArrow),
    nextArrow: $(sliderNextArrow),
    responsive: [{
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }]
  });
}

sliderProducts();
