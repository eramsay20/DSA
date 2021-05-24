// Q: Implement Binary Search 

// A: Solution below...

// define binary search function; NOTE: must be SORTED array only

const bSearch = (sortedArr, searchValue, start, end) => {
    // if start point is ever larger than end, return false 
    if(start > end) return false;

    // define the mid index
    let midIdx = Math.floor((start + end)/2)

    // if match, return true
    if(searchValue === sortedArr[midIdx]) return true

    // else, if the search value is less than 
    if (searchValue < sortedArr[midIdx]) {
        return bSearch(sortedArr, searchValue, start, midIdx-1)
    } else {
        return bSearch(sortedArr, searchValue, midIdx+1, end)
    }
}

let sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 15, 17]
console.log(bSearch(sorted, 5, 1, 17))



// Super simple linear search

const linearSearch = (array, search) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] == search) return true
    }
    return false
}

console.log(linearSearch(sorted, 10))