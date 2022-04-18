// Day5
/*
For loop - iterative loop.
Syntax:

for (i = 0; i < arr.length; i++)

Ex: 

int endOfRange = 4;
for(int i = 0; i < endOfRange; i++){
    System.out.println(i);
}
*/

/*
While loop - This type of loop requires a single boolean condition and continues looping as long as that condition continues to be true.
Each time the the end of the loop is reached, it loops back to the top and checks if the condition is still true. 
If it's true, the loop will run again; if it's false, then the program will skip over the loop and continue executing the rest of the code.

Syntax:

int min = 0;
int max = 4;
while(min < max){
    System.out.println(min++);
}
*/

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



function main() {
    const n = parseInt(readLine().trim(), 10);

    for (let i = 1; i <=10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
