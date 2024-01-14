// Filter array by type name

'use strict';

let filter = (array, type) => {
  let remove = [];
  for (let element of array) {
    let index = array.indexOf(element);
    if (typeof array[index] !== type) {
      remove.unshift(index);
    }
  }
  for (let x of remove)
    array.splice(x, 1);
  return array;
};

module.exports = filter;
