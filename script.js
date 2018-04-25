const rock = document.getElementById('#rock');
const paper = document.getElementById('#paper');
const scissors = document.querySelector('#scissors');
const icon = document.querySelectorAll('i');
const pcPlayer = document.querySelector('#pcPlayer');

icon.addEventListener("click", function() {
  pcPlayer.classList.toggle('pcPlayerAnimate')
});

// scissors.addEventListener("click", function() {
//   pcPlayer.style.animation = '';
// });
// pic.addEventListener("mouseout", function() {
//   title2.classList.toggle('transform2');
//   title1.classList.toggle('transform1');
// });

// const projects = document.getElementById('projects');
// const dropdown = document.getElementById('dropdown');
//
// projects.addEventListener("mouseenter", function() {
//   dropdown.classList.toggle('dropdownshow');
// });
// projects.addEventListener("mouseout", function() {
//   dropdown.classList.toggle('dropdownshow');
// });