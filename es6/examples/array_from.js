/*
Array from let's us convert an iterable object (aka array like object) into an array. We can use Array.from()
on DOM nodes, hence converting them into array so that we can use methods like Array.filter() and Array.forEach()
*/

const products =
  Array.from(document.querySelectorAll('.product'));

products
  .filter(product => parseFloat(product.innerHTML) < 10)
  .forEach(product => product.style.color = 'red');