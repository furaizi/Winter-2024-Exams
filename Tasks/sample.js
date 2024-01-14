// Get one random element from an array

'use strict';

let getRandomElement = (arr) => {
  let randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

module.exports = getRandomElement;
