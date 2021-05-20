// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length. No array copies. 

const removeDuplicates = (nums) => {

    //loop through my nums array (nums.length-1)
    for (let i = 0; i < nums.length - 1; i++){       // watch to make sure popping mid loop doesn't lose values
        // track two variables for comparison; num[i], num[i+1] 
        let first = nums[i];
        let second = nums[i+1]

        // if same numbers, 
        if(first === second){
            // store last = num[nums.length - 1]
            let last = nums[nums.length - 1]

            // num[nums.length-1] == num[i+1]
            nums[nums.length-1] = first;

            // num[i+1] = last;
            nums[i] = last;

            // nums.pop()
            nums.pop()

            // nums.sort((a, b) => a-b)
            nums.sort((a,b) => a-b)

            i-- 
        }
    }

    // return nums.length
    return nums.length
};

arr1 = [1, 2, 3, 3, 3, 5, 6, 7] // 6
arr2 = [1, 1, 3, 3, 4, 5, 6, 6] // 5
arr3 = [1, 2, 3, 3, 4, 5, 6, 7] // 7
arr4 = [1, 2, 2, 3] // 3

console.log(removeDuplicates(arr1))
console.log(removeDuplicates(arr2))
console.log(removeDuplicates(arr3))
console.log(removeDuplicates(arr4))


