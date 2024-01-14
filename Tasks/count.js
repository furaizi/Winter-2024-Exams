// Sum all number values in dict

'use strict';

let getSum = (object) => {
  let sum = 0;
  let objectValues = Object.values(object);

  for (const value of objectValues) {
    if (typeof value === 'number')
      sum += value;
  }

  return sum;
};

module.exports = getSum;
