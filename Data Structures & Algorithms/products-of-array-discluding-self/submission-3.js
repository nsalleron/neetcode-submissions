class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arr = Array.from({ length: nums.length }).fill(1)

        let prefix = 1
        for(let i = 0; i < nums.length ; i++){
           arr[i] = prefix
           prefix = nums[i] * prefix
        }

        
        let suffix = 1
        for(let i = nums.length - 1; i >= 0 ; i--){
           arr[i] = arr[i] * suffix
           suffix = suffix * nums[i]
        }
        

        return arr

    }
}
