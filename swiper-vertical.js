import Swiper from 'swiper/swiper-bundle';

const slides = $('.mySwiper .swiper-slide');
const slidesLength = slides.length;

var swiper = new Swiper(".mySwiper", {
  observer: true,
  observeParents: true,

  speed: 1200,
  direction: 'vertical',
  mousewheel: {
    releaseOnEdges: false
  },

  followFinger: false,
  touchReleaseOnEdges: true,
  longSwipes: false,
  parallax: true,
  on: {
    slideChange: (swiper) => {
      const {offsetTop} = swiper.el;
      window.pageYOffset !== offsetTop && window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    },
    slideChangeTransitionEnd: (swiper) => {
      const activeIndex = swiper.activeIndex;
      swiper.params.mousewheel.releaseOnEdges = activeIndex === 0 || (activeIndex === slidesLength - 1);
    }
  }
});
