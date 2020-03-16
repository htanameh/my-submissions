// https://www.hackerrank.com/challenges/js10-arrays/problem

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
* */
function getSecondLargest(nums) {
  // Complete the function
  let secondLargestSum = nums[0];
  let largestSum = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > largestSum) {
      secondLargestSum = largestSum;
      largestSum = nums[i];
    } else if (nums[i] >= secondLargestSum && nums[i] !== largestSum) {
      secondLargestSum = nums[i];
    }
  }
  return secondLargestSum;
}

getSecondLargest([1, 2, 3, 4, 5]);
