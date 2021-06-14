/*
Implment MergeSort

*/

const mergeSorted = (nums1, nums2) => {
    let result = [];
    // while both have values...
    while(nums1.length > 0 && nums2.length > 0) {
        if (nums1[0] < nums2[0]){
            result.push(nums1.shift())
        } else {
            result.push(nums2.shift())
        }
    }
    result = [...result, ...nums1, ...nums2] // spread any remaining higher nums out at the back of the result arr
    return result;
}

let numsA = [2, 4, 5, 7]
let numsB = [1, 4, 8, 10]
let numsC = [1, 3, 2, 14, 7, 5, 8, 12]

// console.log(mergeSorted(numsA, numsB))

const mergeSort = (array) => {
    // establish base case; when array.length < 2 (i.e = 0 or 1) return array (already sorted if only 1 or no value)
    if(array.length < 2) return array;
    
    // establish a midpoint to pivot around
    let midIdx = Math.floor(array.length / 2);

    // slice left and right sides of the pivot; recurse left and right
    let leftSorted = mergeSort(array.slice(0, midIdx))
    let rightSorted = mergeSort(array.slice(midIdx))

    // apply mergeSorted to left and right subarrays as the return value
    return mergeSorted(leftSorted, rightSorted)
}

console.log(mergeSort(numsC))