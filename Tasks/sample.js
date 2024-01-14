// Get one random element from an array

'use strict';

let getRandomElement = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length);
  let randomElement = array[randomIndex];
  
  return randomElement;
};

module.exports = getRandomElement;
