function mergeSort(arr){
    //base case: 
    if(arr.length==1) {
        return arr;        
    }

    //merge sort left
    let arrLeft = mergeSort(arr.slice(0 , arr.length/2));
    //merge sort right
    let arrRight = mergeSort(arr.slice(arr.length/2 , arr.length));

  
    return merge(arrLeft, arrRight);
}

function merge(arrLeft, arrRight){
    // merge the left and right
    let sortedArr = [];
    let i=0;
    let j=0;
    //loop throgh leftArr and rightArr and add lowest into sortedArr; //HOW>!
    while(i<arrLeft.length && j<arrRight.length){
        if(arrLeft[i]<=arrRight[j]){
            sortedArr.push(arrLeft[i]);
            i++;
        }
        else {
            sortedArr.push(arrRight[j]);
            j++;
        }
    }
    // Add remaining elements from left array, if any
    while (i < arrLeft.length) {
        sortedArr.push(arrLeft[i]);
        i++;
    }

    // Add remaining elements from right array, if any
    while (j < arrRight.length) {
        sortedArr.push(arrRight[j]);
        j++;
    }

    return sortedArr;
}
// const inputArr = [3, 2, 1, 13, 8, 5, 0, 1];
const inputArr = [2,4,3,1]
console.log(mergeSort(inputArr));
