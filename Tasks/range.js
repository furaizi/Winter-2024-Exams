// Generate int array from given range

'use strict';

let getRange = (...range) => {
  let [from, to] = range;

  if (to < from)
    return [];

  range = [];
  for (let i = from; i <= to; i++) {
    range[i - from] = i;
  }

  return range;

};

module.exports = getRange;
