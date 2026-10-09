class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
    
    const prefix = new Array(nums.length).fill(1)

    for(let i = 1; i < nums.length; i++){
        prefix[i] = nums[i-1] * prefix[i-1]
    }

    const suffix = new Array(nums.length).fill(1)
    for(let i = nums.length - 1; i > 0 ; i--){
        suffix[i - 1] = nums[i] * suffix[i]
    }

    const res = []

    for(let i = 0; i < nums.length ; i ++){
        res[i]=prefix[i] * suffix[i]
    }

    return res



    }


    // array = [1,2,4,6]
    //prefixArray = [1,1,2,8]
    //suffixArray = [48,24,6,1]


    // [48,24,12,8]





}
