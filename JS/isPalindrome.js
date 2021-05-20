// isPalindrome
// Write a JavaScript function that takes a string and returns true if it's a palindrome, false if it's not. Use JavaScript.

// word that can be spelt the same backwards as it is forwards; ex. racecar, 
// inputs: string  // no emptys // lowercase
// output: boolean value // true/false
// fast as O(n)

// Pseudo
// 1. define our function, isPalindrome, string
// 2. Loop through string length / 2, rounded down
// 3. If first and last differ; return early as false... else, return true


// Solution
const isPalindrome = (str) => {
    for (let i = 0; i< Math.floor(str.length/2); i++){
        let front = str[i]
        let back = str[str.length - (i + 1)] 
        if(front !== back) return false
    }
    return true
}

let str1 = 'racecar' // true
let str2 = 'radar' // true
let str3 = 'redder' // true
let str4 = 'test' // false
let str5 = 'try' // false

console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))
console.log(isPalindrome(str4))
console.log(isPalindrome(str5))