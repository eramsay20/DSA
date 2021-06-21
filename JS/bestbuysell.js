// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/572/

var maxProfit = function (prices) {
    // want to keep track of max and min values in an array
    let min = prices[0];
    let max = prices[0];
    let profits = []

    // loop through prices once
    for (let i = 1; i < prices.length; i++) {
        let price = prices[i];
        if (price < min) {
            profits.push(max - min);
            min = price;
            max = price;
        } else if (price > max) {
            max = price
        }
    }
    // save last profit margin to profits arr
    profits.push(max - min)

    // return max value from profits array
    return Math.max(...profits)

};