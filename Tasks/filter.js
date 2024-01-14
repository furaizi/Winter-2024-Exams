// Filter array by type name

'use strict';

let Filter = (T, t) => {
  let remove = [];
  for (let C of T) {
    let x = T.indexOf(C);
    if (typeof T[x] !== t) {
      remove.unshift(x);
    }
  }
  for (let x of remove) T.splice(x, 1);
  return T;
};

module.exports = Filter;
