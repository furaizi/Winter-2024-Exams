// Generate random password

'use strict';

let generatePassword = (alphabet, passwordLength) => {
  const MAX = alphabet.length;
  let key = '';
  for (let i = 0; i < passwordLength; i++) {
    let index = Math.floor(Math.random() * MAX);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
