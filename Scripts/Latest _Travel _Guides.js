document.addEventListener("DOMContentLoaded", () => {

  function equalizeDescriptionHeight() {
    $('.Travel_Guides_container .Guides_container_box .description').css('height', 'auto');
    let maxHeight = 0;
    $('.Travel_Guides_container .Guides_container_box .description').each(function() {
      if ($(this).height() > maxHeight) maxHeight = $(this).height();
    });
    $('.Travel_Guides_container .Guides_container_box .description').height(maxHeight);
  }

  $(document).ready(function() {
    const $slider = $('.Travel_Guides_container');
    let resumeTimeout;

    $slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: true,
      dots: true,
      infinite: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 991, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
        { breakpoint: 500, settings: { slidesToShow: 1, arrows: false } }
      ]
    });

    equalizeDescriptionHeight();
    $slider.on('setPosition', equalizeDescriptionHeight);
    $(window).on('resize', equalizeDescriptionHeight);

    // Restart autoplay after swipe/touch
    $slider.on('swipe touchend', () => $slider.slick('slickPlay'));

    // Pause 2 seconds when card is tapped (except Read More), then continue autoplay
    $slider.find('.Guides_container_box').on('click touchstart', function(e) {
      if ($(e.target).closest('.read-more-button').length) return; // ignore Read More

      // pause immediately
      $slider.slick('slickPause');

      // clear previous timeout if any
      clearTimeout(resumeTimeout);

      // resume autoplay after 2 seconds
      resumeTimeout = setTimeout(() => {
        $slider.slick('slickPlay');
      }, 1500);
    });
  });

});

