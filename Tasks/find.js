// Find key by value

find = (object, ...rest) => {
  value = rest.pop();
  for (name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  return undefined;
};

module.exports = find;
