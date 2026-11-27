class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        
        let prefix = 1
        let suffix = 1

        let prefixArray = []
        let suffixArray = []

        for(let i = 0; i < nums.length; i ++){
            if(prefix === 0){
                prefix = 1
            }
            if(suffix === 0){
                suffix = 1
            }
            prefixArray[i] = prefix * nums[i] 
            prefix = prefixArray[i]
            suffixArray[nums.length - 1 - i] = suffix * nums[nums.length - 1 - i] 
            suffix = suffixArray[nums.length - 1 - i]
        }

        console.log({prefixArray, suffixArray})
        const res = Math.max(...prefixArray, ...suffixArray)
        return res === -0 ? 0 : res
    }
}
