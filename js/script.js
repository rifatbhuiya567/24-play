$(window).scroll(function(){
    let scrolling = $(this).scrollTop();

    if( scrolling > 40){
      $(".myNavbar").addClass("navAnim");
    }
    else{
      $(".myNavbar").removeClass("navAnim");
    }
});
// Scroll function end

var bannerSlide = $('.mainBannerSlide');

bannerSlide.slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
});
// MainBannerSlide