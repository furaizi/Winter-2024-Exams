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
  let normalizedMonth = month.toLowerCase();
  let monthNumber = -1;

  for (let i = 0; i < MONTHS.length; i++) {
    if (normalizedMonth.startsWith(MONTHS[i])) {
      monthNumber = i + 1;
      return monthNumber;
    }
  }
  
  return monthNumber;
};

module.exports = getMonthNumber;
