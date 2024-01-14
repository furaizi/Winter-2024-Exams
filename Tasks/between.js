// Extract substring between prefix and suffix

'use strict';

let getValueBetween = (str, prefix, suffix) => {
  let prefixStart = str.indexOf(prefix);
  let suffixStart = str.indexOf(suffix);

  if (prefixStart === -1)
    return '';
  if (suffixStart === -1)
    return '';

  let prefixEnd = prefixStart + prefix.length;
  let substring = str.substring(prefixEnd, suffixStart);

  return substring;
};

module.exports = getValueBetween;
