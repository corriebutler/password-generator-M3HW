// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['@','%','$','!','#','^','&','*','(',')','?','/','[',']',':',';','<','>'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  
}

function generatePassword() {
  var possibleCharacters = [];
  var finalPassword = [];
  var length = parseInt(prompt("How many characters would you like your password to contain?"));
    if (length < 8 || length > 128) {
      return alert('Invalid lenght'); 
    }

  var shouldContainSpecial = confirm("Click OK to confirm including special characters.");
  var shouldContainNum = confirm("Click OK to confirm including numeric characters.");
  var shouldContainLower = confirm("Click OK to confirm including lowercase characters.");
  var shouldContainUpper = confirm("Click OK to confirm including uppercase characters.");
    if (shouldContainSpecial === false && 
        shouldContainNum === false && 
        shouldContainLower === false &&
        shouldContainUpper === false) {
          return alert('Must include one character type.');
        }

  if (shouldContainSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  if (shouldContainLower) {
    possibleCharacters = possibleCharacters.concat(lowerCaseLetters);
  }
  if (shouldContainUpper) {
    possibleCharacters = possibleCharacters.concat(upperCaseLetters);
  }
  if (shouldContainNum) {
    possibleCharacters = possibleCharacters.concat(numeric);
  }
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    let temp = possibleCharacters[randomIndex];
    finalPassword.push(temp);
  }
  return finalPassword.toString();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
