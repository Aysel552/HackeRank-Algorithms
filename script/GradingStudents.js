// HackerLand University has the following grading policy:
 
/*
1) every student obtains a grade in the range from 0 to 100
2) if grade < 40  console.log("It is a failing grade")
3) if the difference between the grade and the next multiple of 5 is less than 3 = round grade up to the next multiple to 5
4) if the value of grade is less than 38, no rounding occurs as the result will still be a failing grade
*/

function gradingStudents(grades) {
    // Write your code here
    let multipleToRoundTo = 5;
    let multipleRoundAt = 2;

    for (let i = 0; i < grades.length; i++){
        if (grades[i] >= 38 && grades[i] % multipleToRoundTo > multipleRoundAt) {
            
            grades[i] = grades[i] + (multipleToRoundTo - (grades[i] % multipleToRoundTo))
        }
    }

    return grades;

}

gradingStudents([73, 67, 75, 38, 33])