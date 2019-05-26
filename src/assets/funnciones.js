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

function validarInput() {
   $('#pass1').keyup(function() {
    var pass1 = $('#pass1').val();
    var pass2 = $('#pass2').val();

    if ( pass1 != pass2 ) {
        document.getElementById('send').disabled = 'disabled';

                       //document.getElementById("error").style.display = "block";

      return (false)
    } else {
            document.getElementById('send').disabled = '';
                      document.getElementById("send").disabled = !document.getElementById("pass1").value.length;

               //document.getElementById("error").style.display = "none";
    return (true);
    }
});
 }
function validarInput2() {

   $('#pass2').keyup(function() {
    var pass1 = $('#pass1').val();
    var pass2 = $('#pass2').val();

    if ( pass2 != pass1 ) {
        document.getElementById('send').disabled = 'disabled';

                       //document.getElementById("error").style.display = "block";

      return (false)
    } else {
            document.getElementById('send').disabled = '';
              document.getElementById("send").disabled = !document.getElementById("pass2").value.length;

               //document.getElementById("error").style.display = "none";
    return (true);
    };
 
});
 }
window.onload = function() {
  document.getElementById("formulario").style.display = "none";
    document.getElementById("tabla").style.display = "block";
         document.getElementById("formul").style.display = "none";
    document.getElementById("list").style.display = "block";
}
function agregar(){
      document.getElementById("formulario").style.display = "block";
    document.getElementById("tabla").style.display = "none";
    }
   function ver(){
      document.getElementById("formulario").style.display = "none";
    document.getElementById("tabla").style.display = "block";
    }

    function driver(){
      document.getElementById("formul").style.display = "block";
    document.getElementById("list").style.display = "none";
    }
   function list(){
      document.getElementById("formul").style.display = "none";
    document.getElementById("list").style.display = "block";
    }