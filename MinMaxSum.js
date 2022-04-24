// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
let minval=arr[0];
let maxval=0;
let totalSum=0;
for(let i=0;i<arr.length;i++){
    if (arr[i]>maxval){
        maxval=arr[i];
    }
    if (arr[i]<minval){
        minval=arr[i];
    }
    totalSum=totalSum+arr[i];
    
}

let minsum=totalSum - maxval;
let maxsum=totalSum - minval;

console.log( minsum,maxsum);

}


function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
