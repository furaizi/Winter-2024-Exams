// Generate int array from given range

'use strict';

let getNumberSequence = (...range) => {
  let [from, to] = range;
  let numberSequence = [];
  let index;

  for (let element = from; element <= to; element++) {
    index = element - from;
    numberSequence[index] = element;
  }

  return numberSequence;
};

module.exports = getNumberSequence;
