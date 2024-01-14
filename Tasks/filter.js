// Filter array by type name

'use strict';

let Filter = (array, type) => {
  let remove = [];
  for (let C of array) {
    let x = array.indexOf(C);
    if (typeof array[x] !== type) {
      remove.unshift(x);
    }
  }
  for (let x of remove) array.splice(x, 1);
  return array;
};

module.exports = Filter;
