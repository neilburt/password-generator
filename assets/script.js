// Character-type strings
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "`~!@#$%^()-_+{[}]\\:',./?";

function generatePassword() {
  var lengthSelect = prompt("How long would you like your password to be? (Between 8 and 128 characters.)", 8);
  // If user clicks "Cancel", reset
  if (lengthSelect === null) {
    return "Please choose your password length.\nClick the button again.";
  }
  // If user enters incorrect value, reset
  while (lengthSelect <=7 || lengthSelect >=129) {
    return "Your password must contain between 8 and 128 characters.\nPlease click the button again.";
  }
  // User character-type prompts
  var lowerSelect = confirm("Would you like your password to include lowercase letters");
  var upperSelect = confirm("How about uppercase letters?");
  var numberSelect = confirm("Numbers?");
  var symbolSelect = confirm("Would you like symbols in there?");
  // If user clicks "Cancel" on all character-type options, reset
  while (lowerSelect === false && upperSelect === false && numberSelect === false && symbolSelect === false) {
    return "You must select at least one type of character to include in your password.\nPlease click the button again.";
  }

  var characterSet = "";
  // Building character set
  if (lowerSelect) {
    characterSet += lower
  }
  if (upperSelect) {
    characterSet += upper
  }
  if (numberSelect) {
    characterSet += number
  }
  if (symbolSelect) {
    characterSet += symbol
  }
  // Variable to contain final product
  var randomization = ""
  // Building final product
    for (var i = 0; i < lengthSelect; i++) {
    randomization = randomization + characterSet[Math.floor(Math.random() * characterSet.length)];
    }

    return randomization;
}

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);