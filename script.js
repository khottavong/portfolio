const contactbtn = document.querySelector('#contactbtn');
const form = document.querySelector('#form')





contactbtn.addEventListener("click", function() {
  contactbtn.style.display = 'none';
  form.classList.toggle('hide');
  form.classList.toggle('heighttransition');
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