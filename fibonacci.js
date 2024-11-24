const readline = require("readline-sync");

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
// console.log(fibs(Number(readline.question("Enter number : "))));


//recursive fibonacci to calculate nth fibonacci (this has  O(2^n) time complexity)
function fibsRec(n){
    if ( n === 0 ) return 0;
	if ( n === 1 ) return 1;
    return fibsRec(n-1)+fibsRec(n-2);
}
// console.log(fibsRec(Number(readline.question("Enter number : "))));


//recursive fibonacci returning fibonacci array (This implementation has O(n) time complexity)
function fibsRecArr(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    let arr = fibsRecArr(n-1);
    arr.push(arr[arr.length-1]+arr[arr.length-2])
    return arr;
}
// console.log(fibsRecArr(Number(readline.question("Enter number : "))));



//get userInput
const choice = Number(readline.question("Do you want to test Iterative or Recursive fibonacci function?(1/2) : "));
const getNum = () => Number(readline.question("Enter number : "));
switch(choice){
    case 1: console.log(fibs(getNum()));
            break;
    case 2: console.log(fibsRecArr(getNum()));
            break;
    default: console.log("Enter proper choice!")
}


// testcases for reference
// console.log(fibsRecArr(0));  // should return []
// console.log(fibsRecArr(1));  // should return [0]
// console.log(fibsRecArr(2));  // should return [0, 1]
// console.log(fibsRecArr(5));  // should return [0, 1, 1, 2, 3]
// console.log(fibsRecArr(8));  // should return [0, 1, 1, 2, 3, 5, 8, 13]