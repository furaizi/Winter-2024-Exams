// Find key by value

'use strict';

let find = (object, ...rest) => {
  let value = rest.pop();
  for (let name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  return undefined;
};

module.exports = find;
