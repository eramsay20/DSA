// Prompt:
// Create some function productArray that accepts an array nums as an argument and returns a new array prods of length nums.length such that the item at each index in prods represents the product of all numbers in nums except for the number at that index in nums.

// Clarifying Questions
    // Make a note of data types of input / outputs
    // Read the question back to the interviewer
    // If we have 1 or 2 items in the array, just return the array, even if there’s other data types
    // Are numbers whole integers greater than 0 ? - They are all whole integers, not necessarily greater than 0
    // There can be repeating numbers
    // Does an array containing at least two 0’s, would the output be an array of length nums filled with 0’s
    // Will our input array always have a length ? No
    // What do we return if we get an empty array ? Return empty array
    // Excluding an empty array, will the array always contain numbers ? No
    //  If given an array that contains something that’s not a number, what do we return? Dancing - banana.gif
    // If we have anything in the array that isn’t a number, what do we return? Dancing - banana.gif
    // What if NaN is in the array(NaN is a number : [) - Don’t worry about NaN
    // Which language should we use ? JavaScript

    // Test I / O
        // [1, 0, 2, 3] => [0, 6, 0, 0]
        // [2, 7, 3] => [21, 6, 14]
        // [0, 1, 0, 5] => [0, 0, 0, 0]
        // [3, ‘b’, 5] => dancing - banana.gif

// Pseudocode
    // Declare your function
    // Var counter = 0, zeroes = 0
    // If array length is less than or equal to 2, return the array itself
    // Loop through the array
    // At each index, check type of data
        // If not a number, return dancing - banana.gif
        // If it === 0, increment zeroes
        // If zeroes > 1 return immediately
    // Get total product of array, and divide each index from the total as we iterate through list.

// Solution
let productArray = (nums) => {
    if(nums.length <= 2) return nums // edge case
    
    let newNums = []
    let zeros = [];
    let product = 1;

    // iterate through loop to check for data type issues, keep track of index pos of zeros, and calculate a non-zero total product value
    for(let i=0; i < nums.length; i++){
        let value = nums[i];
        if(typeof(value) !== "number") return 'danceingbanana.gif' // edge case
        if(value === 0) { // if zero value...
            zeros.push(i)  // keep track of its index pos
            if(zeros.length > 1) return nums.map(num => 0) // if 2+ zero value, immediately return array of zeros
        } else {
            product *= value; // if non-zero value, continue to build up product total
        }
    }

    if (zeros.length === 1){ // if exactly one zero in array
        let zIndex = zeros[0] 
        newNums = nums.map((num, idx) => { // fill return array with zeros EXCEPT for the idx where zero originally was; replace with product
            if (idx === zIndex) {
                return product
            } else {
                return 0
            }
        }) 
    } else {
        newNums = nums.map(value => product / value) // vanilla case
    }
    return newNums
}

arr1 = [1, 0, 2, 3]     // => [0, 6, 0, 0]
arr2 = [2, 7, 3]        // => [21, 6, 14]
arr3 = [0, 1, 0, 5]     // => [0, 0, 0, 0]
arr4 = [3, 'b', 5]      // => dancing - banana.gif

console.log(productArray(arr1))
console.log(productArray(arr2))
console.log(productArray(arr3))
console.log(productArray(arr4))

// Time Complexity: O(n)