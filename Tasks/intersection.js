// Find an intersection of two dictionaries

'use strict';

let intersection = (firstObject, secondObject) => {
  let firstObjectKeys = Object.keys(firstObject);

  for (let key of firstObjectKeys) {
    if (firstObject[key] !== secondObject[key])
      delete firstObject[key];
  }

  return firstObject;
};

module.exports = intersection;
