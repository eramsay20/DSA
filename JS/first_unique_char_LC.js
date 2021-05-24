// Given a string s, return the first non - repeating character in it and return its index. If it does not exist, return -1.

// Input: s = "leetcode"
// Output: 0

// Input: s = "loveleetcode"
// Output: 2

// Input: s = "aabb"
// Output: -1

// s consists of only lowercase English letters.


// define function, string, returns num (index)
const firstUniqChar = (string) => {
    let obj = {};

    for(let i = 0; i<string.length; i++){
        let char = string[i]
        if(char in obj){
            obj[char] += 1
        } else {
            obj[char] = 1
        }
    }

    for (let key in obj){
        if (obj[key] === 1) return string.indexOf(key)
    }

    return -1
}

console.log(firstUniqueCharacter('leetcode')) // 0
console.log(firstUniqueCharacter('loveleetcode')) // 2
console.log(firstUniqueCharacter('aabb')) // -1