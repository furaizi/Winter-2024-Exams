// Count words in a string

'use strict';

let countWords = function (str) {
  let numberOfWords = 0;
  let flag = false;

  for (let char of str) {
    if (char === ' ')
      flag = false;
    else {
      if (!flag)
        numberOfWords++;
      flag = true;
    }
  }
  
  return numberOfWords;
};

module.exports = countWords;
