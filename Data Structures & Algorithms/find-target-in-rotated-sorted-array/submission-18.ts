class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0
        let r = nums.length - 1

        while (l <= r){
            const mid = Math.floor((l + r) / 2)
            const midValue = nums[mid]

            if(target === midValue){
                return mid
            }

            if(nums[l] <= midValue){
                if(target >= nums[l] && target < midValue){
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            } else {
                if(target > midValue && target <= nums[r]){
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            }
        }

        return -1
    }
}
