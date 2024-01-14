// Get month number

'use strict';

const MONTHS = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

let getMonthNumber = (month) => {
  month = month.toLowerCase();

  for (let i = 0; i < MONTHS.length; i++) {
    if (month.startsWith(MONTHS[i]))
      return i + 1;
  }
  
  return -1;
};

module.exports = getMonthNumber;
