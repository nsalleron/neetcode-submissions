class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let lower = 0
        let upper = nums.length - 1
        while(lower <= upper){
            const mid = Math.floor((upper + lower) / 2)
            const value = nums[mid]

            if(value > target){
                upper = mid - 1
            } else if (value < target){
                lower = mid + 1
            } else {
                return mid
            }
        }

        return - 1
    }
}
