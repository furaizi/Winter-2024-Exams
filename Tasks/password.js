// Generate random password

'use strict';

let generatePassword = (alphabet, passwordLength) => {
  let key = '';
  for (let i = 0; i < passwordLength; i++) {
    let index = Math.floor(Math.random() * alphabet.length);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
