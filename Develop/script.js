// Assignment Code
var generateBtn = document.querySelector("#generate");
const randomFunction = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol,
};

var passwordText = document.querySelector("#password");
passwordText.value = password;

// Write password to the #password input
function writePassword() {
  
  var getCharacters = window.prompt("How many characters do you want your password to have?");
  var getLowercase = window.confirm("Would you like your password to have lower case letters? y/n");
  var getUppercase = window.confirm("Would you like your password to have upper case letters? y/n");
  var getNumbers = window.confirm("Would you like your password to have numbers? y/n");
  var getSpecialCharacters = window.confirm("Would you like your password to have special characters? (! \" # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { } | ` ) y/n");
  var length = Number(getCharacters);
  

  function numCharacters(){
  if (getCharacters <= 7) {
      window.alert("Selection must be between 8 and 128 characters!")
  } else if (getCharacters >= 129) {
      window.alert("Selection must be between 8 and 128 characters!")
  } else  { 
    return getCharacters
  }
  }  
  
  

  

  
 numCharacters();    
 let answers = [length, getLowercase, getUppercase, getNumbers, getSpecialCharacters];

 console.log(answers);

 password = generatePassword(length, getLowercase, getUppercase, getNumbers, getSpecialCharacters);

}

function generatePassword(length, lower, upper, number, symbol) {
 
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  console.log('typesCount: ', typesCount);

  const typesArray = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0]);

  if(typesCount === 0) {
		return '';
	}
	
	for(let i=0; i<length; i+=typesCount) {
		typesArray.forEach(type => {
			const funcName = Object.keys(type)[0];

      console.log(funcName);
			generatedPassword += randomFunction[funcName]();
		});

	}
  const password = generatedPassword.slice(0, length);
	console.log(password);
	return password;
  
}


//write to password area



// Add event listener to generate button
// this is looking for a button click and calls the writePassword function
generateBtn.addEventListener("click", writePassword);




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
