// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants
let myTransport = ["bike", "car", "bus"];

let myMainRide = {
    make: "Tesla",
    model: "Model Y",
    year: 2023,
    color: "QuickSilver"
}

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
// let's get this party started
main();
