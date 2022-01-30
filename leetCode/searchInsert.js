/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target, min = 0, max = nums.length) {
  const diff = Math.floor((max + min) / 2);
  if (max - min === 0) return max;
  if (nums[diff] > target) return searchInsert(nums, target, min, diff);
  if (nums[diff] < target) return searchInsert(nums, target, diff + 1, max);
  if (nums[diff] === target) return diff;
};
