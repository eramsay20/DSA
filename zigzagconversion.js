/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * https://leetcode.com/problems/zigzag-conversion/
 */
var helper = function (stringArray, numRows, arrays, counter = 0, direction = 1) {
    if (stringArray.length === 0) {
        return arrays.flat().join("") // return the flattened 2d array, joined in a str
    }
    arrays[counter].push(stringArray.shift()); // remove 1st ele, add to 2d arr

    if (counter === numRows - 1) direction = -1; // if bottom reached, change dir
    else if (counter === 0) direction = 1; // if top reached again, change dir

    counter = counter + direction // step to next letter
    return helper(stringArray, numRows, arrays, counter, direction) // recursively call
}

var convert = function (s, numRows) {
    if (numRows === 1) return s
    const arrays = []; // init return 2d arr

    for (let i = 0; i < numRows; i++) {
        arrays.push([])  // iterate to create numRow sub arrs
    }

    const stringArray = s.split(''); // split str into array of chars
    let answers = helper(stringArray, numRows, arrays); // use helper 
    return answers
};