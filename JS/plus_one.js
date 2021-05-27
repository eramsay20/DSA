
/*
https://leetcode.com/problems/plus-one/submissions/
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
    // keep track of # of 9s to catch edges like [9, 9, 9]
    let countNines = digits.filter(num => num === 9).length

    // set the initial pointer to increment to the last item in the array
    pointer = digits.length - 1

    // if length == # of nines, all are nines, handle edge
    if (digits.length === countNines) {
        let newArray = digits.map(num => 0)
        newArray.unshift(1)
        return newArray
    }
    // else, overwrite the last 9 with zero and decrement pointer
    while (digits[pointer] === 9) {
        digits[pointer] = 0
        pointer--;
    }
    // increment preceeding digit
    digits[pointer] = digits[pointer] + 1
    return digits
};

// [9] => [1,0]
// [1,0] => [2,0]
// [9,9] => [1,0,0]