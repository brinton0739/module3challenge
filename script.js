// Assignment code here
// for (initialize variable; evaluate condition; run after loop)
// for (i = 0; i <= 10; i++) {
//   alert(i)
// }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  // prompt
  // validate at least one of the following is true
  var hasSpecialCharacters = promptYesOrNo("special characters");
  var hasNumbers = promptYesOrNo("numbers");
  var hasUpperCase = promptYesOrNo("upper case");
  var hasLowerCase = promptYesOrNo("lower case");
  
  // validate
  if (!hasSpecialCharacters && !hasNumbers && !hasUpperCase && !hasLowerCase) {
    alert("You must answer yes to atleast one character type");
    return "";
  }

  var numberOfCharacters = promptNumberOfCharacters();

  // generate password
  return generateRandomPassword(numberOfCharacters, hasSpecialCharacters, hasNumbers, hasLowerCase, hasUpperCase);
}

// prompts for yes or no returnes true for yes or false for no
function promptYesOrNo(question) {
  for (validated = false; validated === false;) {
    var answer = prompt("Should include " + question + "? Enter yes or no", "");
    if (answer.toLowerCase() === "yes") {
      return true;
    } else if (answer.toLowerCase() === "no") {
      return false;
    }
    alert("Please enter yes or no");
  }
}

function promptNumberOfCharacters() {
  for (;true;) {
    var answer = prompt("please choose the length of your password, enter a number between 8 and 128");
    if (answer >= 8 && answer <= 128) {
      return answer;
    }
    alert("you must ender a number between 8 and 128");
  }
}

function generateRandomPassword(numberOfCharacters, hasSpecialCharacters, hasNumbers, hasLowerCase, hasUpperCase) {
  const specialCharacters = "!@#$%^&*";
  const numberCharacters = "1234567890";
  const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var password = "";

  // create string to generate password
  var randomString = "";
  if (hasSpecialCharacters) {
    randomString = randomString + specialCharacters;
    password = password + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }
  if (hasNumbers) {
    randomString = randomString + numberCharacters;
    password = password + numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
  }
  if (hasLowerCase) {
    randomString = randomString + lowerCaseCharacters;
    password = password + lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)];
  }
  if (hasUpperCase) {
    randomString = randomString + upperCaseCharacters;
    password = password + upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)];
  }

  for (var i = 0; password.length < numberOfCharacters; i++) {
    password = password + randomString[Math.floor(Math.random() * randomString.length)]
  }

  var output = scramblePassword(password);

  return output;
}

function scramblePassword(input) {
  var passwordArray = [];
  var newPassword = "";
  for (var i = 0; i < input.length; i++) {
    passwordArray.push({ k: Math.random(), v: input[i] });
  }

  passwordArray.sort(function (a, b) {
    return a.k - b.k;
  });

  for (var i = 0; i < passwordArray.length; i++) {
    newPassword = newPassword + passwordArray[i].v;
  }

  return newPassword;
}
