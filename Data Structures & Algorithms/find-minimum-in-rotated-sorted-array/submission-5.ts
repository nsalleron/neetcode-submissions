class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l = 0
        let r = nums.length - 1 


        let res = Number.MAX_SAFE_INTEGER

        while(l <= r){
            if(nums[l] <= nums[r]){
                res = Math.min(res, nums[l])
                return res
            } 

            const middle = Math.floor((l + r) / 2)
            res = Math.min(res, nums[middle])
            
            if (nums[middle] < nums[r]){
                r = middle - 1
            } else {
                l = middle + 1
            }

        }

        return res
    }
}
