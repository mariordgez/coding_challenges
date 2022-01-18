var twoSum = function (nums, target) {
  let res;
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (i !== j && nums[i] + nums[j] === target) res = [j, i];
    }
  }
  return res;
};
