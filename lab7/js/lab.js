// index.js - Functions
// Author: ben parzych <bparzych@ucsc.edu>
// Date: October 2024

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;


 
  while (0 !== currentIndex) {
     
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;


     
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}




function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
);
}


function randomizeName(userName) {

var nameArray = userName.toLowerCase().split("");
console.log("nameArray =", nameArray);

var shuffledArray = shuffleArray(nameArray);
console.log("shuffledArray =", shuffledArray);
var shuffledString = shuffledArray.join("");

var newName = toTitleCase(shuffledString);


return newName;
}


function main() {
var userName = window.prompt("Hello, Whats you name? I want it.");
document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
var randomName = randomizeName(userName);
document.writeln("Just for you!");
document.writeln("<div class='name'>" + randomName + "</div>")
}


main();

