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
            const middle = nums[m]

            if(target === middle){
                return m
            }

            if(nums[l] <= middle){
                if(nums[l] <= target && target < middle){
                    r = m - 1
                } else {
                    l = m + 1
                }
            } else {
                if(middle < target && target <= nums[r]){
                    l = m + 1
                } else {
                    r = m - 1
                }

            }
        }

        return - 1

    }
}
