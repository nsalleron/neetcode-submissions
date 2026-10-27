class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0
        let r = nums.length - 1

        while(l <= r){
            const m = Math.floor((l + r) / 2)
            const val = nums[m]


            if(val === target){
                return m
            }

            if(nums[l] <= val){
                if(nums[l] <= target && target < val){
                    r = m - 1
                } else {
                    l = m + 1
                }
            } else {
                if(nums[r] >= target && target > val){
                    l = m + 1
                } else {
                    r = m - 1
                }
            }
        }

        return -1
    }
}
