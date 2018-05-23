//Cache reference to window and animation items
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);


  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);


    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      // $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');



//smooth anchor scrolling

$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});


const form = $('form');
const hamburger = $('.hamburger');
const burgernav = $('.burger-nav');
const burgerList = $('.burger-nav a')



hamburger.on('click', function() {
  hamburger.toggleClass('change');
  burgernav.toggleClass('burger-transition');
})




burgerList.on('click', function() {
  burgernav.toggleClass('burger-transition');
  hamburger.toggleClass('change');
})