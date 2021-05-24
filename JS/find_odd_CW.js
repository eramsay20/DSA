// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// [1, 1, 2, 3, 4, 2, 3, 5, 4, 3, 5] // 3

function findOdd(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num in obj) obj[num] += 1
        else obj[num] = 1
    }

    for (let num in obj) {
        if (obj[num] % 2 > 0) return Number(num)
    }
}

console.log(findOdd([1, 1, 2, 3, 4, 2, 3, 5, 4, 3, 5])) // 3