// Find an intersection of two dictionaries

'use strict';

let intersection = (firstObject, secondObject) => {
  let intersectionObject = {};
  let firstObjectKeys = Object.keys(firstObject);

  for (let key of firstObjectKeys) {
    if (firstObject[key] === secondObject[key])
      intersectionObject[key] = firstObject[key];
  }

  return intersectionObject;
};

module.exports = intersection;
