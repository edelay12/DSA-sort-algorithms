/* 
1. Understanding merge sort
Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

What is the resulting list that will be sorted after 3 recursive calls to mergesort?
21, 1, 26, 45
What is the resulting list that will be sorted after 16 recursive calls to mergesort?
nothing, there are only 15 recursive calls

What are the first 2 lists to be merged?
 21,  1, 26, 45,
  29, 28,  2,  9

  and 

    16, 49, 39, 27,
  43, 34, 46, 40
Which two lists would be merged on the 7th merge?
29 
and 
28 
*/

let input = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

let recursions = 0;

function mergeSort(array) {
    
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    recursions++
    console.log(recursions)
console.log(left)
console.log(right)
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

mergeSort(input);
