class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {

        let l = 0
        let r = nums.length - 1

        let min = Number.MAX_SAFE_INTEGER
        while (l <= r){
            const m = Math.floor((l +r ) / 2)

            const mV = nums[m]
            min = Math.min(min, mV)

            if(mV > nums[r]){
                l = m + 1
            } else {
                r = m - 1
            }

        }

        return min
    }
}
