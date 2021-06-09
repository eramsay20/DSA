/*
https://leetcode.com/submissions/detail/499425336/?from=explore&item_id=3758
 * @param {number[]} nums
 * @return {number}
    Input: nums = [4,2,4,5,6]
    Output: 17
 */
var maximumUniqueSubarray = function (nums) {
    // define start and end pointers; subarrs
    let maxSum = nums[0];
    let start = 0;
    let end = 1

    for (start; start < nums.length; start++) {
        let unique = []; // reset unique array with every new start index
        let sum = 0; // reset sum for this sub arr
        let end = start + 1; // reset end ptr when start ptr changes

        let first = nums[start]; // grab first index value
        unique.push(first); // add to temp array

        for (end; end < nums.length; end++) {
            let next = nums[end] // grab next value
            if (unique.includes(next)) {
                let sum = unique.reduce((sum, val) => sum += val, 0);
                if (sum > maxSum) maxSum = sum
                break;
            } else {
                unique.push(next);
            }
            let sum = unique.reduce((sum, val) => sum += val, 0);
            if (sum > maxSum) maxSum = sum
        }
    }
    return maxSum
};