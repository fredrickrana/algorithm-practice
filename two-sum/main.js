// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0, 1]

// SOLUTION ATTEMPT
// Psuedo Code:
// look through each index in the array
// subtract target by the selected index number and store within variable
// check the rest of the numbers within the array
// if the result matches another number within the array, return the index of the selected number and the index of the matching number

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const number = target - nums[i];
    for (let x = i + 1; x < nums.length; x++) {
      if (number === nums[x]) {
        return [i, x];
      }
    }
  }
};

const answer = twoSum([2, 7, 11, 15], 9);
// eslint-disable-next-line
console.log(answer);
