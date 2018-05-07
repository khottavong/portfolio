const skill1 = document.querySelector('#skill1');
const skill2 = document.querySelector('#skill2');
const skill3 = document.querySelector('#skill3');
const area = document.querySelector('#specialty');

area.addEventListener("mouseenter", function() {
  console.log('hovered');
  skill1.classList.add('skill1');
  skill2.classList.add('skill2');
  skill3.classList.add('skill3');
});