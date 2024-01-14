// Return an array without duplicates

'use strict';

let duplicate = (value, times) => {
  let duplicates = [];

  for (let i = 0; i < times; i++)
    duplicates[i] = value;
  
  return duplicates;
};

module.exports = duplicate;
