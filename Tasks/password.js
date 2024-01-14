// Generate random password

'use strict';

let generatePassword = (alphabet, passwordLength) => {
  let key = '';
  let index;

  for (let i = 0; i < passwordLength; i++) {
    index = Math.floor( Math.random() * alphabet.length );
    key += alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
