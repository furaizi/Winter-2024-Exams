// Generate random password

let generatePassword = (alphabet, passwordLength) => {
  const MAX = alphabet.length;
  key = '';
  for (let i = 0; i < passwordLength; i++) {
    index = Math.floor(Math.random() * MAX);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
