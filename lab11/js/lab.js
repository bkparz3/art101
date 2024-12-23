// index.js - JavaScript Events and Forms
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
function sortString(inputString) {
  return inputString.split('').sort().join('');
}

$("#submit").click(function() {
  const userName = $("#user-name").val();
  const userNameSorted = sortString(userName);
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});