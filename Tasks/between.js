// Extract substring between prefix and suffix

'use strict';

const getValueBetween = (str, prefix, suffix) => {
  const prefixStart = str.indexOf(prefix);
  const suffixStart = str.indexOf(suffix);

  if (prefixStart === -1)
    return '';
  if (suffixStart === -1)
    return '';

  const prefixEnd = prefixStart + prefix.length;
  const substring = str.substring(prefixEnd, suffixStart);

  return substring;
};

module.exports = getValueBetween;
