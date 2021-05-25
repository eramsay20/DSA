


// var removeElement = function (nums, val) {
//     return nums.filter(num => num !== val).length
// };

// let arr1 = [3, 2, 2, 3]
// console.log(removeElement(arr1, 3));


var reverse = function (x) {
    let string = String(x)
    let reversedString = string.split("").reverse().join("")
    let reversedNum = Number(reversedString) 
    if (reversedNum < -1*(2^31) || reversedNum > (2^31 -1)) return 0
    return reversedNum
};

let num = 321

console.log(reverse(num))