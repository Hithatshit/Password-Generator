let password = document.getElementById("password");
let passwordLength = document.getElementById("passwordLength");
let saveButton = document.getElementById("saveButton");


const generatePassword = (length) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*()_+=-{}[];:?/.,<>`~";

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";
  for (let index = 0; index < length; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
}

const  getPassword = () => {
  const newPassowrd = generatePassword(passwordLength.value);
  password.value = newPassowrd;
}

const savePassword = () => {
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password : ${password.value}`));
    saveButton.setAttribute('download', 'MyPasswordGenertatorLOG.txt');
}
