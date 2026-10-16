class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const res = []

        const prefixArray = [1]
        for(let i = 0; i < nums.length - 1; i++){
            prefixArray[i + 1] = prefixArray[i] * nums[i]
        }

        let suffix = 1
        for(let i = nums.length - 1 ; i >= 0; i--){
            res[i] = prefixArray[i] * suffix
            suffix = nums[i] * suffix

        }

        return res
    }
}
