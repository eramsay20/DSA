/*
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let palindromes = {};

    // helper func to check isPalindrom
    const isPalindrome = (str) => {
        let backwards = str.split('').reverse().join('')
        if (str === backwards) return true
        return false
    }

    // outer loop, grab starting char
    for (let i = 0; i < s.length - 1; i++) {

        // inner loop, grab unique substr combos and check isPalindrome
        for (let j = i + 1; j < s.length; j++) {
            let substr = s.slice(i, j + 1)
            // whenever palindrom found, push to array palindromes
            if (palindromes[substr.length]) continue;
            if (isPalindrome(substr)) palindromes[substr.length] = substr;
        }
    }

    if (Object.keys(palindromes).length === 0) return s[0]
    let key = Math.max(...Object.keys(palindromes))
    return palindromes[key]
};