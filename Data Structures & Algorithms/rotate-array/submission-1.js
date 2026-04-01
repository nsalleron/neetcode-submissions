class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        for(let i = 0; i < k; i++){
            const last = nums[nums.length - 1]
            let right = nums.length - 1
            while(right > 0){
                nums[right] = nums[right - 1]
                right--
            }
            nums[0] = last
        }
    }
}
