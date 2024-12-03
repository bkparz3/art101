// index.js - JSON and APIs
// Author: ben parzych <bparzych@ucsc.edu>
// Date: December 2024

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// Define the API endpoint
let endpoint = "https://api.nasa.gov/planetary/apod";

// Configure the AJAX request
let ajaxConfig = {
  url: endpoint,  // API URL
  method: "GET", // HTTP method
  contentType: "application/json", // Payload type
  data: { 
    api_key: "MVjp3RUBIwTDw51jL0jBqriS5aS6HD1yXe1cflGT", // API token
    
  },
  success: function(data) { // Success handler
    
    let record = data[0];
    
    console.log(data); 
    $("#output").append("<h2>" + data.title);
    $("#output").append("<p>" + data.explanation);
    // display data.url
    $("#output").append("<img src='"+ data.hdurl +"'>");
    // add fields to output w append
  }, 
  error: function(xhr, status, error) { // Error handler
    console.error(error); 
  } 
};

// Send the AJAX request
$.ajax(ajaxConfig);