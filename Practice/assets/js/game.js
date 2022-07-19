// var a = "a";

// var logStuff = function() {

//     var b = "b";

//     console.log(a);
//     console.log(b);
// };
// console.log(a);
// logStuff();


// console.log(Math.floor(Math.random() * 10));

// var food = {
//     name: "Banana",
//     type: "fruit",
//     calories: 105
//     // note there is no comma at the end of the last line
//   };
//   console.log(food.name);
//   console.log(food.type);
//   console.log(food.calories);
// const getMaxCallStackSize = (i) => {
//   try {
//     return getMaxCallStackSize(++i);
//   } catch {
//     return i;
//   }
// };

// console.log(getMaxCallStackSize(5));

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  // returns a password
 var chars = "0123456789";
 var passwordLength = 12;
 var password = "";

 for (var i = 0; i <= passwordLength; i++){
var randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber +1);

 }
 
}

console.log(generatePassword);
generatePassword();