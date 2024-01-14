// Filter array by type name

'use strict';

let filter = (array, type) => {
  let filtered = [];
  for (let element of array) {
    if (typeof element == type) {
      filtered.push(element);
    }
  }
  return filtered;
};

module.exports = filter;
