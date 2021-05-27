/*
 * @param {string[]} words
 * @return {number}
 * https://leetcode.com/explore/challenge/card/may-leetcoding-challenge-2021/601/week-4-may-22nd-may-28th/3757/
 */
var maxProduct = function (words) {
    let complements = []; // define arr to store complement subarrs
    let charCount, i, j, k;

    // loop words; create new obj key for each word[i]
    for (i = 0; i < words.length; i++) {
        let first = words[i]; // save 1st comparison word

        for (j = i + 1; j < words.length; j++) {
            charCount = 0;
            let second = words[j].split('') // save 2nd comparison word, split into chars

            for (k = 0; k < second.length; k++) { // loop over 2nd chars to check if 1st includes
                if (first.includes(second[k])) charCount++
            }
            if (charCount === 0) // if none found
                complements.push([first, second.join('')]) // store first & second as complements
        }
    }

    if (complements.length > 0) { // if at least one pair found
        let products = complements.map(pair => pair[0].length * pair[1].length) // map strs to nums
        return Math.max(...products) // return max of nums array
    } else {
        return 0 // if no pairs found, return 0
    }
};