// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.

// Input: nums = [1]
// Output: 1

// Input: nums = [5, 4, -1, 7, 8]
// Output: 23


// V1. 2 loops, whenever we encounter a higher sum subarr, replace max


//v2. 1 loop, keep track of starting pointer, and a net value variable// when net value < 0, break and start the next check

// define function
const maxSubArray = (array) => {
    // define netValue, max variables
    let max = array[0];
    let netValue = 0;
    // loop through array 
    for(let i = 0; i< array.length; i++){
        // add 'int' to netValue with each loop step
        let int = array[i]
        netValue += int;

        // whenever adding a new arr[i] to netValue >> max, save new value for max
        if(netValue > max){
            max = netValue
        }
        // if netValue < 0, reset netValue = 0 and continue from next idx position
        if(netValue < 0){
            netValue = 0;
            continue;
        }
    }
    return max
}





console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([-9, -4, -2, -72, -8])); // -1