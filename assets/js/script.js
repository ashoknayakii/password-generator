// GIVEN I need a new, secure password



// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// TO DO SET UP PROMPTS FOR USER


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specialArr = ['!', '@', '#', '$', '%', '&', '*', '?']
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


// CREATE PROMPT FOR PASSWORD LENGTH
// -- BETWEEN 8 AND 128 CHARACTERS AND INTEGERS
function chooseCriteria() {
  var passwordLength = prompt("Choose a password length between 8 and 128 characters");
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert('Please choose a valid password length')
    return null;
  }
  var lowerCase = confirm("Choose lowercase characters for your password?");
  var upperCase = confirm("Choose uppercase characters for your password?");
  var numeric = confirm("Choose numeric characters for your password?");
  var specialCharacters = confirm("Choose special characters for your password?");
  if (!specialCharacters && !numeric && !upperCase && !lowerCase) {
    alert('Please choose at least one Character type for your password')
    return null;
  }
  var criteria = {
    passwordLength: passwordLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numeric: numeric,
    specialCharacters: specialCharacters,
  }
  
  return criteria;
}

function randoCharacter(arr) {
  var randI = Math.floor(Math.random() * arr.length)
  var randChar = arr[randI]
  return randChar;
}
// PROMPT THE USER TO CONFIRM OTHER CRITERIA
// -- lowercase, uppercase, numeric, and/or special characters

function generatePassword() {
  var chosenCharacters = []
  var finalPass = []
  var chosenCriteria = chooseCriteria();
  var chosenLength = chosenCriteria.passwordLength
  console.log(chosenLength)

  // Write Conditional Statements for each Criteria
  // -- if criteria = true then concat related array in to chosen characters

  if(chosenCriteria.numeric) {
  chosenCharacters = chosenCharacters.concat(numberArr)
    
  console.log(numberArr);
  }

  if (chosenCriteria.lowerCase) {
    chosenCharacters = chosenCharacters.concat(lowerArr)

  console.log(lowerArr);
    
  }

  if (chosenCriteria.upperCase) {
    chosenCharacters = chosenCharacters.concat(upperArr)
    
  console.log(upperArr);
  }

  if (chosenCriteria.specialCharacters) {
    chosenCharacters = chosenCharacters.concat(specialArr)
   
  console.log(specialArr);
  }

  console.log(chosenCharacters);

 

  // For loop that takes number of random chosenCharacters = chosenLength
  for (let i = 0; i < chosenLength; i++) {
    var newCharacters = randoCharacter(chosenCharacters);
    console.log(newCharacters);
    finalPass.push(newCharacters);

    
    console.log(finalPass);
  }



  return finalPass.join('')


  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // SET A DEFAULT TO CHECK THAT ONE CHARACTER TYPE WAS CHOSEN


};

  // COMBINE NECESSARY CRITERIA TO GENERATE PASSWORD




  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // Assignment Code
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);