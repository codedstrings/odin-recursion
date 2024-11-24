const readline = require("readline-sync");

// Sample fibonacci for input 8 :  o,1,1,2,3,5,8,13

//iterative fibonacci  
function fibs(num){
    fibArr = [0,1];
    if ( num === 1 ) return [0];
	if ( num === 2 ) return arr;
    while(fibArr.length<num){
        prev = fibArr[fibArr.length-2];
        curr = fibArr[fibArr.length-1];
        fibArr.push(prev+curr);
    }
    return fibArr;
}
let num = Number(readline.question("Enter number : "));
console.log(fibs(num));

