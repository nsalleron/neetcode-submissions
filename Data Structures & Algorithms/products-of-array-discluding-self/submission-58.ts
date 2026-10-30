class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        const prefixArray = [1]

        for(let i = 0; i < nums.length - 1; i++){
            prefixArray[i + 1] = prefixArray[i] * nums[i]
        }

        const result = []
        let suffix = 1
        for(let i = nums.length - 1; i >= 0; i--){
            result[i] = suffix * prefixArray[i]
            suffix = nums[i] * suffix
        }

        return result
    }
}
