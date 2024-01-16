// Count words in a string

'use strict';

const countWords = (str) => {
  let numberOfWords = 0;
  let isWordBoundary = true;

  for (const char of str) {
    if (char === ' ')
      isWordBoundary = true;
    else {
      if (isWordBoundary)
        numberOfWords++;
      isWordBoundary = false;
    }
  }

  return numberOfWords;
};

module.exports = countWords;
