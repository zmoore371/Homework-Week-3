// Assignment Code
var generateBtn = document.querySelector("#generate");
// var answers = []


// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var getCharacters = window.prompt("How many characters do you want your password to have?");
  var getLowercase = window.confirm("Would you like your password to have lower case letters? y/n");
  var getUppercase = window.confirm("Would you like your password to have upper case letters? y/n");
  var getNumbers = window.confirm("Would you like your password to have numbers? y/n");
  var getSpecialCharacters = window.confirm("Would you like your password to have special characters? (! \" # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { } | ` ) y/n");
  var lengh = Number(getCharacters);

  function characters(){
  if (!getCharacters) {
    return;  
  } if (getCharacters <= 7) {
      window.alert("Selection must be between 8 and 128 characters!")
  } else if (getCharacters >= 129) {
      window.alert("Selection must be between 8 and 128 characters!")
  } else  { 
    return getCharacters
  }

}  

  
 characters();    
 console.log(getCharacters);
 console.log(typeof getCharacters);
 console.log(getLowercase);
 console.log(getUppercase);
 console.log(getNumbers);
 console.log(getSpecialCharacters);
 console.log(lengh)
}

//write to password area

var passwordText = document.querySelector("#password");
passwordText.value = password;







// Add event listener to generate button
// this is looking for a button click and calls the writePassword function
generateBtn.addEventListener("click", writePassword);





//Generator functions

const randomFunction = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol,
};


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
// console.log(answers);