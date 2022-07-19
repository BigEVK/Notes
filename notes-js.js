var playerName = window.prompt("What is your robot's name?");

// Note the lack of quotation marks around playerName
// The following will show a box with whatever name the player has chosen
window.alert(playerName);

console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10+10);

// what is this?
console.log("Our robot's name is " + playerName);

// this creates a function named "fight"
// Here we declare the function
function fight() {
    window.alert("The fight has begun!");
}
// here we call on the function
fight();

// There are two ways to create a function:
// Function declaration: when we create a function using the <function> keyword first...

// create a fight function
function fight() {
// The <alert> function tells the borwser to display a message
    window.alert("Welcome to Robot Gladiators!");
}
// this executes function
fight();

// Function expression: when we create a function by assigning it to a variable.

// create function ay assigning it to a variable
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};

// execute function
fight();

// Declare an Array of Enemy Combatants
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// To declare an array, we use the <var> keyword followed by the array name.
//  We assign the array using brackets <[ ]> that contain the array elements. Array elements are the 
//  values stored within the array. In our case, the <enemyNames> array contains three array elements, 
//  which are strings, separated by commas.

// Just like <if> statements, <for> statements also have conditions...
for([initial expression]; [condition]; [increment expression]) {
    statement
}
// THESE ARE GOOD FOR THE PASSWORD GENERATOR
Math.floor() rounds down to the nearest whole Number
Math.random() returns a radom deciam number bet 0 and 1 but not including 1 (so you would never get 1 as an answer)

// The following code shows an example of a generic function that will catch incorrect responses:
var test = function() {
    var response = prompt("Question?");
    if (response === "" || response === null) {
      window.alert("You need to provide a valid answer! Please try again."); 
      test();
    }
    return response;
  }
// if the `promptFight` is NOT a valid value, then execute the following statements.
// This conditional statement with the "not", or !, operator will act similarly to our original conditional if statement, 
// which executes if a blank or null response is evaluated.
if (!promptFight) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
   }
//    Here's an example of a conditional statement that will display heads or tails 
//    depending on the Math.random() output:
   if (Math.random() > .5) {
    console.log("heads");
  }
  else {
    console.log("tails");
  }

  How can you use the following in the passwrod generator for the variable test questions?
  if (true) {
    // this will run because true is true
      console.log("Is true true? Yes.");
    }
    
    if (false) {
    // this will not run because false is not true
      console.log("Is false true? No.");
    }
    
    if (3 === 10 || "a" === "a") {
    // this will run because at least one of the conditions is true
      console.log("Does 3 equal 10? No.");
      console.log("Does the letter 'a' equal the letter 'a'? Yes.");
    }
    
    if (3 === 10 && "a" === "a") {
    // this will not run because both conditions have to be true to run
      console.log("Does 3 equal 10? No.");
      console.log("Does the letter 'a' equal the letter 'a'? Yes.");
    }