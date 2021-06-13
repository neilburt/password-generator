var lengthSelect = prompt("How long would you like your password to be? (Between 8 and 128 characters.)", 8);
// if user clicks "Cancel", reset
if (!lengthSelect) {
  return;
}
// if user enters incorrect value, reset
while (lengthSelect <=7 || lengthSelect >=129) {
  alert("Your password must contain between 8 and 128 characters.");
  return;
}
// user character-type prompts
var lowerSelect = confirm("Would you like your password to include lowercase letters");
var upperSelect = confirm("How about uppercase letters?");
var numberSelect = confirm("Numbers?");
var symbolSelect = confirm("Would you like symbols in there?");
// if user clicks "Cancel" on all character-type options, reset
while (lowerSelect, upperSelect, numberSelect, symbolSelect === false) {
  alert("You must select at least one type of character to include in your password.");
  return;
}

function generatePassword() {
  // character-type strings
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789"
  var symbol = "`~!@#$%^()-_+{[}]\\:',./?"
  var characterSet = []

  if (lowerSelect) {
    characterSet = characterSet.concat(lower)
  }
  if (upperSelect) {
    characterSet = characterSet.concat(upper)
  }
  if (numberSelect) {
    characterSet = characterSet.concat(number)
  }
  if (symbolSelect) {
    characterSet = characterSet.concat(symbol)
  }

  var randomization = ""

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