// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength = 0; // this should change everytime user pick how long password will be
var mixedPassword = []; //this is were the random password should be stored after in generates
var lowerCase = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var specialChar = "~!@#$%^*()_+=-<>?/".split("");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//this event listener is attached to var generateBtn from html with id generate when clicked it should write password.

function writePassword() {
  // when the botton is clicked this function will run and check if all prompts are true
  var answeredPrompts = prompts();
  var passwordText = document.querySelector("#password");
  //this var passwordText = document.querySelector("#password"); is to display the  text in the text area

  if (answeredPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  }
  localStorage.setItem("password", password);
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomize = Math.floor(Math.random() * mixedPassword.length);
    password += mixedPassword[randomize];
  }
  return password;
}

function prompts() {
  mixedPassword = [];

  characterLength = prompt(
    "How many Characters do you want your password to be? Enter 8-128 characters."
  );
  //the entered length of password need to be a number between 8 and 128.
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please enter a number between 8 and 128. Thank you try again");
    return false;
  }
  if (confirm("Would you like lowercase letters?")) {
    mixedPassword = mixedPassword.concat(lowerCase);
  }
  if (confirm("Would you like uppercase letters?")) {
    mixedPassword = mixedPassword.concat(upperCase);
  }
  if (confirm("Would you like numbers?")) {
    mixedPassword = mixedPassword.concat(numbers);
  }
  if (confirm("Would you like special characters?")) {
    mixedPassword = mixedPassword.concat(specialChar);
  }
  return true;
}

// i need to see what starter code is linked to
// i need to asign var and arreys need
// var characterLength = ;   has to be 8 to 128
// var lowerCase = []; abc
// var upperCase = []; ABC
// var numbers = []; 0-9
// var specialChar = []; anything thats not a number or letter
// i need to make prompt for the questions confirms and alerts.
// search up how to randomize

// use split  ("")
