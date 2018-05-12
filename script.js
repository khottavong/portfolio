// const skill1 = document.querySelector('#skill1');
// const skill2 = document.querySelector('#skill2');
// const skill3 = document.querySelector('#skill3');
// const area = document.querySelector('#specialty');

// window.addEventListener('load', function() {
//   console.log('hello');
//   skill1.classList.add('skill1');
//   skill2.classList.add('skill2');
//   skill3.classList.add('skill3');
// });








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
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');




$(window).scroll(function() {
  if ($(this).width() < 992) {
    if ($(this).height() <= 768) {
      if ($(this).scrollTop() < 500) {
        // apply effects
      }
      if ($(this).scrollTop() > 1000) {
        // apply effects
      }
    }
  }
});

//smooth anchor scrolling

$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});