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
            const m = Math.floor((l+r)/2)
            if(nums[m] === target){
                return m
            } else if(nums[m] < target){
                l++
            } else {
                r--
            }
        }

        return -1
    }
}
