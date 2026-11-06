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
            const m = Math.floor((l + r) / 2)

            res = Math.min(res, nums[m])

            if(nums[l] <= nums[m] && nums[m] <= nums[r]){
                if(nums[l] <= nums[m]){
                    r = m - 1
                } else {
                    l = m + 1
                }
            } else {
                if(nums[l] <= nums[m]){
                   l = m + 1
                } else {
                    r = m - 1
                }
            }
        }

        return res

    }
}
