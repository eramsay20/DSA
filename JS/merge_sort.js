// Q: Implement Merge Sort

    // A: Solution Below...

        // create merge helper function to merge two sorted arrays
        const merge = (arr1, arr2) => {
            let merged = [];
            while(arr1.length && arr2.length){
                if(arr1[0] > arr2[0]){
                    merged.push(arr2.shift())
                } else {
                    merged.push(arr1.shift())
                }
            }
            return [...merged, ...arr1, ...arr2]
        }

        let a1 = [1, 3, 5]
        let a2 = [2, 3, 6]

        console.log(merge(a1, a2))

        // create merge sort function
        const mergeSort = (array) => {
            // if array input length 1 or 0, already sorted, return
            if (array.length < 2) return array

            // select a pivot value/idx (i'm choosing the midpoint idx)
            let pivot = Math.floor(array.length/2)

            // split array into left/right based on pivot idx
            let left = array.slice(0, pivot);
            let right = array.slice(pivot);

            // recursively sort each subarr
            let leftSorted = mergeSort(left);
            let rightSorted = mergeSort(right);

            // merged the sorted left/right subarrs together using helper merge function
            return merge(leftSorted, rightSorted)
        }


        let a3 = [1, 3, 5, 4, 8, 3, 10, 12, 2, 6]
        console.log(mergeSort(a3))
