// Generate int array from given range

'use strict';

let getNumberSequence = (...range) => {
  let [from, to] = range;
  let numberSequence = [];

  for (let i = from; i <= to; i++) {
    numberSequence[i - from] = i;
  }

  return numberSequence;

};

module.exports = getNumberSequence;
