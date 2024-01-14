// Extract substring between prefix and suffix

'use strict';

let getValueBetween = (str, prefix, suffix) => {
  let prefixStart = str.indexOf(prefix);

  if (prefixStart === -1)
    return '';

  let substringStart = prefixStart + prefix.length;
  str = str.substring(substringStart);
  let suffixStart = str.indexOf(suffix);

  if (suffixStart === -1)
    return '';
  str = str.substring(0, suffixStart);

  return str;
};

module.exports = getValueBetween;
