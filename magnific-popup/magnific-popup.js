import 'magnific-popup';

/**
 * Popup with video
 */
 $('.js-button').magnificPopup({
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
   callbacks: {
    open: function() {
      jQuery('body').addClass('noscroll');
    },
    close: function() {
      jQuery('body').removeClass('noscroll');
    }
  }
 });
