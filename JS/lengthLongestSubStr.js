/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 1) return 1

    // define return max variable and substr
    let max = 0;
    let sub = "";

    // if str.length > 1, loop through string
    for (let i = 0; i < s.length; i++) {
        if (sub.length > max) max = sub.length; // check if substr > max before resetting the substr to next char
        let start = s[i]; // grab starting char
        sub = start // set starter as 1st in substr

        for (let j = i + 1; j < s.length; j++) {
            let char = s[j] // grab next char
            if (sub.includes(char) || char === undefined) break; // if next char already included in sub, break
            else sub += char; // else, add it to the substr and continue
        }
    }
    return max;
};

// TIME: O(n^2), SPACE: O(1)