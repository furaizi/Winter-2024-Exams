// Count words in a string

'use strict';

let countWords = (str) => {
  const spaceDelimiter = /\s+/;
  const wordsArray = str.split(spaceDelimiter);
  const nonEmptyWords = wordsArray.filter(word => word.length > 0);

  return nonEmptyWords.length;
};

module.exports = countWords;
