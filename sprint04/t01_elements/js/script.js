'use strict'
const li = document.querySelectorAll('li');

li.forEach(item1 => {
  const attribute = item1.getAttribute('class');
  let element = item1.getAttribute('data-element')
  if (attribute == null) {
      item1.classList.add('unknown');
  };
  if (element === null) {
    item1.setAttribute('data-element', 'none')
  }
  item1.append(document.createElement('br'));
  element = item1.getAttribute('data-element').split(' ');
  element.forEach(item2 => {
    const div = document.createElement('div');
    item1.append(div);
    div.setAttribute('class', `elem ${item2}`)
    if (item2 == 'none') {
        const div2 = document.createElement('div');
        div2.setAttribute('class', 'line');
        div.append(div2);
    }
  })
})  
// const li = document.querySelectorAll('li');

// li.forEach(item1 => {
//     const classAttribute = item1.getAttribute('class');
//     let dataElement = item1.getAttribute('data-element');
//     if (classAttribute == null) {
//         item1.classList.add('unknown');
//     };
//     if (dataElement == null) {
//         item1.setAttribute('data-element', 'none');
//     };
//     item1.append(document.createElement('br'));
//     dataElement = item1.getAttribute('data-element').split(' ');
//     dataElement.forEach(item2 => {
//         const div = document.createElement('div');
//         item1.append(div);
//         div.setAttribute(`class`, `elem ${item2}`);
//         if (item2 == 'none') {
//             const div2 = document.createElement('div');
//             div2.setAttribute(`class`, `line`);
//             div.append(div2);
//         };
//     });
// });  


// })