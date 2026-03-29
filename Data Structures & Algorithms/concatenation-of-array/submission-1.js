class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const array = Array.from({length: nums.length * 2})
        for(let i = 0; i < array.length; i++){
            array[i] = nums[i % nums.length]
        }
        return array
    }
}
