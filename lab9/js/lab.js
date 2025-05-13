// function main() {
//     console.log("Main function started.");
//     // the code that makes everything happen
// }

// // let's get this party started
// main();

/*
Lab.js - This simple JavaScript/jQuery script uses button to modify same elements on the page.

Requirements: jQuery must be loaded for this scrip to work.

Author: Jessica Chen
Date: May 12 202
*/

// Add buttons to each section
$(document).ready(function() {
    $("#challenge").append("<button id='button-challenge'>challenge</button>");
    $("#problems").append("<button id='button-problems'>problems</button>");
    $("#results").append("<button id='button-results'>results</button>");

    // Add click listeners to each button
    $("#button-challenge").click(function(){
        $("#challenge").toggleClass("special");
    });

    $("#button-problems").click(function(){
        $("#problems").toggleClass("special");
    });

    $("#button-results").click(function(){
        $("#results").toggleClass("special");
    });
});
