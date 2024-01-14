// Generate random password

'use strict';

let generatePassword = (alphabet, passwordLength) => {
  let key = '';
  let randomIndex;
  let randomChar;

  for (let i = 0; i < passwordLength; i++) {
    randomIndex = Math.floor(Math.random() * alphabet.length);
    randomChar = alphabet[randomIndex];
    key += randomChar;
  }

  return key;
};

module.exports = generatePassword;
