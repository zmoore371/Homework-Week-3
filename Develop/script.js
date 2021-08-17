// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   // var password = generatePassword();
//   // var passwordText = document.querySelector("#password");


//   // passwordText.value = password;

//   window.confirm("Would you like to generate a random password?");

//   var getCharacters = window.prompt("How many characters do you want your password to have?");
//   var getLowercase = window.prompt("Would you like your password to have lower case letters? y/n");
//   var getUppercase = window.prompt("Would you like your password to have upper case letters? y/n");
//   var getNumbers = window.prompt("Would you like your password to have numbers? y/n");
//   var getSpecialCharacters = window.prompt("Would you like your password to have special characters? (! \" # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { } | ` ) y/n");
//   var answers = [getCharacters, getLowercase, getUppercase, getNumbers, getSpecialCharacters]
  
//   function characters(){
//   if (!getCharacters) {
//     return;  
//   } if (getCharacters <= 7) {
//       window.alert("Selection must be between 8 and 128 characters!")
//       writePassword();
//   } else if (getCharacters >= 129) {
//       window.alert("Selection must be between 8 and 128 characters!")
//   } else  { 
//     return getCharacters
//   }
//   }


//   function lowercase(){
//     if (!getLowercase) {
//       return;
//     } else if (getLowercase === 'y') {
//       return getLowercase
//     } else if(getLowercase === 'n') {
//       return getLowercase
//     } else {
//       window.alert("Not a valid response for lowercase!")
//     }

//   }

//   function uppercase(){
//     if (!getUppercase) {
//       return;
//     } else if (getUppercase === 'y') {
//       return getUppercase
//     } else if(getUppercase === 'n') {
//       return getUppercase
//     } else {
//       window.alert("Not a valid response for uppercase!")
//     }

//   }

//   function numbers(){
//     if (!getNumbers) {
//       return;
//     } else if (getNumbers === 'y') {
//       return getNumbers
//     } else if(getNumbers === 'n') {
//       return getNumbers
//     } else {
//       window.alert("Not a valid response for numbers!")
//       return getNumbers === 'false';
//     }

//   }

//   function specialCharacters(){
//     if(!getSpecialCharacters) {
//       return;
//     } else if (getSpecialCharacters === 'y') {
//       return getSpecialCharacters 
//     } else if (getSpecialCharacters === 'n') {
//       return getSpecialCharacters
//     } else {
//       window.alert("Not a valid respose for special characters!")
//     }
//   }


//   characters();
//   lowercase();
//   uppercase();
//   numbers();
//   specialCharacters();
//   // console.log(answers);
  
// }


// Add event listener to generate button
// this is looking for a button click and calls the writePassword function
// generateBtn.addEventListener("click", writePassword);
// console.log(writePassword.characters);
// console.log(writePassword.answers);


//Generator functions

function randomLower() { 
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97 )
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65 )
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48 )
}

function randomSymbol() {
  const symbols = "!\"#$%&\'()*+,-./:;<=>?@[]^_`{}|`)";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(randomSymbol());