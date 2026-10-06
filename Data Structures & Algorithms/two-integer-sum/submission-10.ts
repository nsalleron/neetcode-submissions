class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let l = 0
        let r = 1

        while(l < nums.length){
            if((nums[l] + nums[r]) === target){
                return [l, r]
            } else {
                r += 1
            }

            if(r === nums.length){
                l += 1
                r = l + 1
            }
        }
    }
}
