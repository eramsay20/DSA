/**
 * @param {number} n
 * @return {number}
 */
const isPrime = (num) => {
    if(num <= 1) return false
    if(num === 2) return true
    if(num % 2 === 0) return false;
    
    for(let i = 3; i<num; i++){
        if(num % i === 0) return false
    } 
    
    return true
}

var countPrimes = function(n) {
    
    let count = 0;
    for(let i = 2; i<n; i++){
        if(isPrime(i)) {
            count++
        }
    }
    return count;
};