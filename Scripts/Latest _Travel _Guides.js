
document.addEventListener("DOMContentLoaded", () => {

    function equalizeDescriptionHeight() {
      const $descriptions = $('.Travel_Guides_container .Guides_container_box .description');
      $descriptions.css('height', 'auto'); // reset height
      let maxHeight = 0;
      $descriptions.each(function() {
        maxHeight = Math.max(maxHeight, $(this).height());
      });
      $descriptions.height(maxHeight);
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

      // Initial equalization
      equalizeDescriptionHeight();
  
      // Equalize on slider events & window resize/orientation change
      $slider.on('setPosition', equalizeDescriptionHeight);
      $(window).on('resize orientationchange', equalizeDescriptionHeight);
  
      // Restart autoplay after swipe/touch
      $slider.on('swipe touchend', () => $slider.slick('slickPlay'));
  
      // Tap on slide (except Read More) pauses 2s, then resumes autoplay
      $slider.find('.Guides_container_box').on('click touchstart', function(e) {
        if ($(e.target).closest('.read-more-button').length) return; // ignore Read More
        $slider.slick('slickPause');
        clearTimeout(resumeTimeout);
        resumeTimeout = setTimeout(() => {
          $slider.slick('slickPlay');
        }, 2000);
    });
  });

});


