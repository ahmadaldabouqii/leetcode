// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let start = 0;

    while (start < nums.length) {
        for (let i = start + 1; i < nums.length; i++)
        {
            if ((nums[start] + nums[i]) === target) {
                return [start, i];
            }
        }
        start++;
    }
    return [];
}

console.log(twoSum([2, 11, 54, 7], 9))
// console.log(twoSum([3, 2, 4], 6))
