// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  prompt("How many characters would you like your password to contain?");
  confirm("Click OK to confirm including special characters.");
  confirm("Click OK to confirm including numeric characters.");
  confirm("Click OK to confirm including lowercase characters.");
  confirm("Click OK to confirm including uppercase characters."); 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
