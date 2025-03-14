// https://leetcode.com/problems/transform-array-by-parity/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function transformArray(nums) {
    for(let i = 0; i < nums.length; i++) {
        nums[i] = Number(!(nums[i] % 2 === 0))
    }
    return nums.sort();
}
transformArray([4, 3, 2, 1])
