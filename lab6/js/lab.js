// index.js - Arrays and Objects
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
// Define Variables
const myTransport = ["car", "bike", "scooter", "legs"];

//create an object for my main ride
var myMainRide = {
    make: "Subaru",
    model: "Forester", 
    color: "red", 
    year: 2021, 
    age: function() {
        return 2024 - this.year;
    }
}

//age
myMainRide.age()
3

//output
document.writeln("Ways I Move: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");