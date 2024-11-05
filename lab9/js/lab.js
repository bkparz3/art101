// index.js - Libraries and JQuery
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
// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});

// add button to challenge section
$("#problems").append("<button id='button-problems'>Make Special</button>");

// add a click listener to the challenge button
$("button-problems").click(function(){
  // now add (or subtract) the "special" class to the section
  $("problems").toggleClass("special");
});

// add button to challenge section
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the challenge button
$("button-results").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#results").toggleClass("special");
});