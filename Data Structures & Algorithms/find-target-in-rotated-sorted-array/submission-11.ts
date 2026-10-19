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
            const middle = Math.floor((l + r) / 2)
            const middleValue = nums[middle]

            if(middleValue === target){
                return middle
            }

            if(nums[l] <= middleValue){
                if(nums[l] <= target && target < middleValue){
                    r = middle - 1
                } else {
                    l = middle + 1
                }
            } else {
                if(middleValue < target && target <= nums[r]){
                    l = middle + 1
                } else {
                    r = middle - 1
                }
            }

        }

        return -1
        
    }
}
