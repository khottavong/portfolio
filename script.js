const skill1 = document.querySelector('#skill1');
const skill2 = document.querySelector('#skill2');
const skill3 = document.querySelector('#skill3');
const area = document.querySelector('#specialty');



window.addEventListener('load', function() {
  console.log('hello');
  skill1.classList.add('skill1');
  skill2.classList.add('skill2');
  skill3.classList.add('skill3');
});

$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});