// Day01 - Data Types

// Complete the code in the editor below. The variables  i, d, and s are already declared and initialized for you. You must:
// 1. Declare 3 variables: one of type int, one of type double, and one of type String.
// 2. Read 3 lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your  variables.
// Use the  operator to perform the following operations:
// Print the sum of i plus your int variable on a new line.
// Print the sum of d plus your double variable to a scale of one decimal place on a new line.
// Concatenate s  with the string you read as input and print the result on a new line.


// Solution

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    // Read and save an integer, double, and String to your variables.
    let integer = +(readLine())
    let double = +(readLine())
    let string = (readLine())

    // Print the sum of both integer variables on a new line.
    console.log(i + integer)

    // Print the sum of the double variables on a new line.
    console.log((d + double).toFixed(1))
    // Concatenate and print the String variables on a new line
    console.log(s + string)
    // The 's' variable above should be printed first.

}