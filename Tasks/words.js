// Count words in a string

'use strict';

let countWords = function (str) {
  let numberOfWords = 0;
  let flag = false;
  for (let char of str) {
    if (!flag) {
      if (char === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
        numberOfWords++;
      }
    } else {
      if (char === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
      }
    }
  }
  return numberOfWords;
};

module.exports = countWords;
