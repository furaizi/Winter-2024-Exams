// Sum all number values in dict

'use strict';

let getSum = (obj) => {
  let sum = 0;
  let value;

  for (const key in obj) {
    value = obj[key];
    if (typeof value === 'number')
      sum += value;
  }

  return sum;
};

module.exports = getSum;
