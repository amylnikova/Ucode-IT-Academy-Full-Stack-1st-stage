'use strict'
function transformation() {
  let name = document.getElementById('hero')
  let background = document.getElementById('lab')
  if(name.innerHTML === 'Bruce Banner') {
      name.innerHTML = 'Hulk';
      name.style.fontSize = '130px';
      name.style.letterSpacing = '6px';
      background.style.backgroundColor = '#70964b';
  }else {
    name.innerHTML = 'Bruce Banner';
    name.style.fontSize = '60px';
      name.style.letterSpacing = '2px';
      background.style.backgroundColor = '#ffb300';
  }
  
  
}