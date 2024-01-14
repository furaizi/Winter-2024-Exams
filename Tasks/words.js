// Count words in a string

'use strict';

let countWords = function (str) {
  let numberOfWords = 0;
  let flag = false;
  for (let char of str) {
    if (!flag) {
      if (char === ' ') {
        flag = false;
      } else {
        flag = true;
        numberOfWords++;
      }
    }
    else {
      if (char === ' ') {
        flag = false;
      } else {
        flag = true;
      }
    }
  }
  return numberOfWords;
};

module.exports = countWords;
