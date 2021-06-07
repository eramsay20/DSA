/*
 * @param {number[]} cost
 * @return {number}
 * 
 * https://leetcode.com/explore/challenge/card/june-leetcoding-challenge-2021/603/week-1-june-1st-june-7th/3770/
 */

var minCostClimbingStairs = function (cost, idx = -1, memo = {}) {
    // Input: cost = [1, 20] // 1
    // Input: cost = [10,15,20] // 15
    // Input: cost = [13,10,15,20] // 25
    // Input: cost = [1,100,1,1,1,100,1,1,100,1] // 6
    if (idx >= cost.length) return 0

    if (idx in memo) return memo[idx]
    else {
        if (cost[idx] === undefined) {
            memo[idx] = Math.min(minCostClimbingStairs(cost, idx + 1, memo), minCostClimbingStairs(cost, idx + 2, memo))
        } else {
            memo[idx] = cost[idx] + Math.min(minCostClimbingStairs(cost, idx + 1, memo), minCostClimbingStairs(cost, idx + 2, memo))
        }
        return memo[idx]
    }
};
