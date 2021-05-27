// Q: Implement Quick Sort 

// A: Solution below...

// define function to take in array of nums to sort
const quickSort = (array) => {
    if(array.length <= 1) return array // return if length 1 or less since already leftSorted (base case)

    // grab the 1st el from the array as the pivot
    let pivot = array.shift()

    // create left and right subarrays
    let left = [] 
    let right = []
    
    // loop through input array, pushing values in left when < pivot, and right when > pivot
    for (let i = 0; i<array.length; i++){
        let el = array[i];
        if(el < pivot) left.push(el)
        else right.push(el)
    }

    // recursively run quickSort on each subarray 
    let leftSorted = []
    let rightSorted = [];
    if(left) leftSorted = quickSort(left)
    if(right) rightSorted = quickSort(right)
    
    // return ...left, pivot, ...right
    return [...leftSorted, pivot, ...rightSorted]
}


let a1 = [1, 3, 5, 2, 4, 7, 1, 13, 11, 8]
console.log(quickSort(a1))