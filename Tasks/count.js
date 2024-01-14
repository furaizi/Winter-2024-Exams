// Sum all number values in dict

'use strict';

let getSum = (obj) => {
  let sum = 0;
  let keys = Object.keys(obj);
  let value;

  for (const key of keys) {
    value = obj[key];
    if (typeof value === 'number')
      sum += value;
  }

  return sum;
};

module.exports = getSum;
