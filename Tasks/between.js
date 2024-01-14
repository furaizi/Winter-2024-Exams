// Extract substring between prefix and suffix

'use strict';

let getvaluebetween = (str, prefix, suffix) => {
  let prefixStart = str.indexOf(prefix);

  if (prefixStart === -1)
    return '';
  else {
    let substringStart = prefixStart + prefix.length;
    str = str.substring(substringStart);

    let suffixStart = str.indexOf(suffix);

    if (suffixStart === -1)
      return '';
    else
      str = str.substring(0, suffixStart);
  }

  return str;
};

module.exports = getvaluebetween;
