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
            let middle = Math.floor((l + r) / 2)
            if(nums[middle] === target){
                return middle
            } else if(nums[middle] < target){
                l = middle + 1
            } else if (nums[middle] > target){
                r = middle - 1
            }
        }

        return -1
    }
}