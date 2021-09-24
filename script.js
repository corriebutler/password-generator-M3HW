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
  var length = parseInt(prompt("How many characters would you like your password to contain?"));
    if (length < 8 || length > 128) {
      return alert('Invalid Length. Must be more than 8 characters, but less than 128.');
    }
  

  confirm("Click OK to confirm including special characters.");
  confirm("Click OK to confirm including numeric characters.");
  confirm("Click OK to confirm including lowercase characters.");
  confirm("Click OK to confirm including uppercase characters."); 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
