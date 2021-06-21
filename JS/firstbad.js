var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    const inner = (n, low = 1, high = n, mid = Math.floor((low + high) / 2)) => {
        if (high === 1) return 1;
        if (low === n) return n;
        if (isBadVersion(mid) === true && isBadVersion(mid - 1) === false) return mid;
        else if (isBadVersion(mid) === true) {
            return inner(n, low, high = mid - 1, mid = Math.floor((low + high) / 2))
        } else {
            return inner(n, low = mid + 1, high, mid = Math.floor((low + high) / 2))
        }
    };
    return inner;
};
// check from 1 - n
// bsearch
// return the number of the first function call that comes back true
// variables => high = n, low = 1, mid (mid=i)
// endpoints
// edge case : i === n, i === 1
    // high === 1 return 1;
    // low === n return n;
// base case : ibv(i) === true && ibv(i-1) === false
// recursive steps : 
// ibv(i) === true => i = Math.floor(low + high / 2), high = i - 1, low = low
// ibv(i) === false => low = i + 1, high = high, i = Math.floor(low + high / 2)