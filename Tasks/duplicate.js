// Return an array without duplicates

'use strict';

let duplicate = (value, times) => {
  if (times <= 0) return [];
  else {
    let duplicates = [];
    for (let i = 0; i < times; i++) {
      duplicates[i] = value;
    }
    return duplicates;
  }
};

module.exports = duplicate;
