/*
 * Lab 8: Anon Functions and Callbacks
 * Author: Jessica Chen
 * Date: May 8, 2025
 *
 * This JavaScript file demonstrates the use of the map() function
 * with both named and anonymous callback functions to manipulate 
 * an array of numbers. Results are printed to the console.
 */
console.log("JavaScript is loaded!");

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Named function to square a number
// Takes a single number x and returns x squared
function squareNumber(x) {
    var result = x * x;
    return result;
}

// Use map() with the named function
var squaredResults = numbers.map(squareNumber);

// Print the results to the console
console.log("Squared Results: ", squaredResults);  // [1, 4, 9, 16, 25]

// Use map() with an anonymous function to add 10
var addTenResults = numbers.map(function(x) {
    var result = x + 10;
    return result;
});

// Print the new results to the console
console.log("Added 10 Results: ", addTenResults);  // [11, 12, 13, 14, 15]
