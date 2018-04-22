const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
const pic = document.querySelector('#pic');

pic.addEventListener("mouseenter", function() {
  title2.classList.toggle('transform2');
  title1.classList.toggle('transform1');
});
pic.addEventListener("mouseout", function() {
  title2.classList.toggle('transform2');
  title1.classList.toggle('transform1');
});

// const projects = document.getElementById('projects');
// const dropdown = document.getElementById('dropdown');
//
// projects.addEventListener("mouseenter", function() {
//   dropdown.classList.toggle('dropdownshow');
// });
// projects.addEventListener("mouseout", function() {
//   dropdown.classList.toggle('dropdownshow');
// });