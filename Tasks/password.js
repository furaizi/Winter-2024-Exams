// Generate random password

'use strict';

const getRandomIndex = (maxIndex) => {
  const randomDouble = Math.random() * maxIndex;
  const randomIndex = Math.floor(randomDouble);

  return randomIndex;
};

const generatePassword = (alphabet, passwordLength) => {
  let password = '';
  let randomIndex;
  let randomChar;

  for (let i = 0; i < passwordLength; i++) {
    randomIndex = getRandomIndex(alphabet.length);
    randomChar = alphabet[randomIndex];
    password += randomChar;
  }

  return password;
};

module.exports = generatePassword;
