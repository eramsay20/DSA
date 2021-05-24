// QUESTION LINK: https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup


// PASSING SOLUTION:


    function sockMerchant(n, ar) {
        // define count return variable
        let pairCount = 0;
        let obj = {}

        // iterate through array, store each num as a key in an obj, with value == count
        for (let i = 0; i < n; i++) {
            // set/increment count whenever duplicate key encountered
            let key = ar[i]
            if (key in obj) {
                obj[key] += 1;
            } else {
                obj[key] = 1
            }
        }

        // loop through key value pairs; if value >2, divide by 2 and round down, 
        for (let color in obj) {
            let colorCount = obj[color]
            if (colorCount > 1) {
                // add to final pair count
                pairCount += Math.floor(colorCount / 2)
            }
        }
        return pairCount
    }
