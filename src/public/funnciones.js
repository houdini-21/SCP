
$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({
   fullWidth: true,
   indicators: true
 });
  autoplay()   
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4000);
  }      
  $('.scrollspy').scrollSpy({
   scrollOffset: 30, 
   
 });
 $('.single-item').slick();

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'

});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true

});

$('.sliderfor').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slidernav'

});
$('.slidernav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sliderfor',
  dots: true,
  centerMode: true,
  focusOnSelect: true

});
  $('.dropdown-button').dropdown();
    $('.dropdown-b').dropdown();


$('.sliderfor2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slidernav2'

});
$('.slidernav2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sliderfor2',
  dots: true,
  centerMode: true,
  focusOnSelect: true

});

  $('.parallax').parallax();
  $('.tabs').tabs();
});

AOS.init({
  duration: 1200,
})

function day(){
      body.className='day';
    }
    function night(){
      body.className='night';
    }