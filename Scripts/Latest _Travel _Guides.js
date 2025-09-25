document.addEventListener("DOMContentLoaded", () => {


    
function equalizeDescriptionHeight() {
  $('.Travel_Guides_container .Guides_container_box .description').css('height', 'auto'); // reset
    let maxHeight = 0;

    // find tallest description
    $('.Travel_Guides_container .Guides_container_box .description').each(function(){
        if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
        }
    });

    // apply tallest height to all
    $('.Travel_Guides_container .Guides_container_box .description').height(maxHeight);
}


$(document).ready(function(){
    $('.Travel_Guides_container').on('init', function(){
        equalizeDescriptionHeight();
    });

    $('.Travel_Guides_container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        dots: true,
        infinite: true,
        responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 991, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
        { breakpoint: 500, settings: { slidesToShow: 1, arrows: false } }
        ]
    });

    // run after every slide change to adjust heights
    $('.Travel_Guides_container').on('setPosition', function(){
        equalizeDescriptionHeight();
    });

    // also run on window resize
    $(window).on('resize', function(){
        equalizeDescriptionHeight();
    });
});
  
});