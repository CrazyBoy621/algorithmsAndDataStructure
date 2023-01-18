// LEETCODE #4 MEDIAN TWO SORTED ARRAYS
// --------------------------------------------

var findMedianSortedArrays = function (nums1, nums2) {
  //Merge 2 arrays
  const fullArr = nums1.concat(nums2).sort(function (a, b) {
    return a - b;
  });
  // Find middle index
  const middle = Math.trunc(fullArr.length / 2);

  if (fullArr.length % 2 === 0) {
    return (fullArr[middle] + fullArr[middle - 1]) / 2;
  } else {
    return fullArr[Math.trunc(fullArr.length / 2)];
  }
};

// Examples
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([3], [-2, -1]));
