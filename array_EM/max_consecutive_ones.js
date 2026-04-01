/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let countone = 0;
  let maxone = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      countone++;
      maxone = Math.max(maxone, countone);
    } else {
      countone = 0;
    }
  }
  return maxone;
};
