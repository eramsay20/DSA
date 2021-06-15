// https://leetcode.com/problems/container-with-most-water/submissions/

var maxArea = function (height) {
    let maxVolume = 0;
    let leftIdx = 0;
    let rightIdx = height.length - 1;
    let width = height.length - 1;

    while (width > 0) {
        let containerHeight = Math.min(height[leftIdx], height[rightIdx])
        width = rightIdx - leftIdx;
        let volume = width * containerHeight;
        if (volume > maxVolume) maxVolume = volume;

        if (containerHeight === height[leftIdx]) {
            leftIdx++;
        } else {
            rightIdx--;
        }
    }
    return maxVolume;
};