const $window = $(window);

const stickyContent = () => {
  $('.js-sticky-section').each(function () {
    const $container = $(this);
    const containerHeight = $container.outerHeight();
    let containerOffsetTop = $container.offset().top;
    let containerOffsetBottom = containerOffsetTop + containerHeight;
    const $sidebar = $container.find('.js-sticky-content');
    let sidebarHeight = $sidebar.outerHeight();
    let stickyHeaderHeight = 0; // if you change this, you will also have to change the .section__content height in section.scss
    let winScrollTop = $window.scrollTop();
    let bottomReached = containerOffsetBottom < winScrollTop + $window.height();
    let isInView = containerOffsetTop - stickyHeaderHeight < winScrollTop && !bottomReached;

    if (containerHeight < $window.outerHeight()) {
      $sidebar.removeClass('is-sticky').removeClass('is-fixed at-bottom');
    } else {
      $sidebar.addClass('is-sticky');

      if (isInView) {
        $sidebar.addClass('is-fixed').removeClass('at-bottom');
      } else if (bottomReached) {
        $sidebar.addClass('at-bottom').removeClass('is-fixed');
      } else {
        $sidebar.removeClass('is-fixed');
      }
    }
  });

  $('.js-sticky-section').each(function () {
    const $container = $(this);
    const containerHeight = $container.outerHeight();
    const containerOffsetTop = $container.offset().top;
    const containerOffsetBottom = containerOffsetTop + containerHeight;

    $container.find('.js-sticky-container').each(function () {
      const $sidebar = $(this);
      const sidebarHeight = $sidebar.outerHeight();
      const sidebarOffsetTop = $sidebar.offset().top;
      const sidebarOffsetBottom = $sidebar.offset().top + sidebarHeight;
      let winScrollTop = $window.scrollTop();
      let winScrollTopHalf = $window.scrollTop() + $window.outerHeight() / 2;

      if (containerOffsetTop > winScrollTopHalf) {
        $container.find('.js-sticky-container').first().addClass('is-active').siblings().removeClass('is-active');
      } else if (containerOffsetBottom < winScrollTopHalf) {
        $container.find('.js-sticky-container').last().addClass('is-active').siblings().removeClass('is-active');
      } else {
        if (sidebarOffsetTop < winScrollTopHalf && sidebarOffsetBottom > winScrollTopHalf) {
          $sidebar.addClass('is-active');
        } else {
          $sidebar.removeClass('is-active');
        }
      }

      let $sidebarActive = $container.find('.js-sticky-container.is-active');

      $('.js-sticky-burger li').eq($sidebarActive.index()).addClass('is-active').siblings().removeClass('is-active');
    });
  });
};

$window.on('load scroll', function () {
  stickyContent();
});
