//  Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1 + 5+ 9. The right to left diagonal =  3 + 5 + 9. Their absolute difference is |15-17| = 2  .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let n = arr.length;
    let diagonal1 = 0;
    let diagonal2 = 0;
    for (let i = 0; i < n; i++ ){
        for (let j = 0; j< n; j++ ) {
            // an element from the first diagonal
            if (i === j){
                diagonal1 += arr[i][j];
            }
            // an element from the second diagonal
            
            if ( i+ j === n - 1){
                diagonal2+= arr[i][j]
            }
        }
    }
    
return Math.abs(diagonal1 - diagonal2)
}

console.log(diagonalDifference([[2,4,8], [9,8,1], [2,1,4]]))

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
