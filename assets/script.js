var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
// Utilize escape character to allow backslash in symbol string
var symbol = "`~!@#$%^()-_+[{]}\\:',./?";
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lengthSelect = prompt("How long would you like your password to be? (Must be between 8 and 128 characters.)", 8);

  // If user clicks 'Cancel' on length prompt, produce instruction message
  if (lengthSelect === null) {
    return "Please choose your password length.\nClick the 'Generate Password' button again.";
  }
  // If user enters incorrect length value, produce instruction message
  if (lengthSelect <= 7 || lengthSelect >= 129) {
    return "Your password must contain between 8 and 128 characters.\nPlease click the 'Generate Password' button again.";
  }
  var lowerSelect = confirm("Would you like your password to include lowercase letters?");
  var upperSelect = confirm("How about uppercase letters?");
  var numberSelect = confirm("Numbers?");
  var symbolSelect = confirm("Would you like symbols in there?");
  
  // If user clicks 'Cancel' on all character-type prompts, produce instruction message
  if (!lowerSelect && !upperSelect && !numberSelect && !symbolSelect) {
    return "You must select at least one type of character to include.\nPlease click the 'Generate Password' button again.";
  }
  var characterSet = "";
  
  // Build character set
  if (lowerSelect) {
    characterSet += lower;
  }
  if (upperSelect) {
    characterSet += upper;
  }
  if (numberSelect) {
    characterSet += number;
  }
  if (symbolSelect) {
    characterSet += symbol;
  }
  // Variable to contain final product
  var randomization = "";

  // Build final product with user-determined character set
  for (var i = 0; i < lengthSelect; i++) {
    randomization = randomization + characterSet[Math.floor(Math.random() * characterSet.length)];
  }
  return randomization;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);