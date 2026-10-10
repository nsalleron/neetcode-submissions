class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {


        //          1 2 4 6 
        //p       1 1 2 8
        //s      48 24 6 1
        //r     [48,24,12,8]
        const prefix = [1]
        for(let i = 0; i < nums.length - 1  ; i++){
            prefix[i + 1] = prefix[i] * nums[i]
        }

        const res = []
        let suffix = 1
    
        for(let i = nums.length; i > 0; i--){
            res[i-1] = prefix[i -1] * suffix
            suffix = nums[i -1] * suffix
           
        }

        return res
    }
}
