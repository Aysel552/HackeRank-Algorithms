// Day6
/*
Today we will expand our knowledge of strings, combining it with what we have already learned about loops.
*/

function processData(input) {
    //Enter your code here
    let myArray = input.split("\n");
    
    for (i = 1; i< myArray.length; i++){
        let splittedWord = myArray[i].split('');
        
        let evenChar = '';
        let oddChar = '';
        
        for (j = 0; j< splittedWord.length; j++){
            if(j%2===0){
                evenChar+=splittedWord[j]
            } else{
                oddChar+=splittedWord[j]
            }
        }
        
        console.log(evenChar + ' ' + oddChar);
    }
    
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
