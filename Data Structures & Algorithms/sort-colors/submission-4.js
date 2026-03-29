class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let l = 0
        let r = nums.length - 1
        let i = 0

        const swap = (i, j) => {
            let tmp = nums[i]
            nums[i] = nums[j]
            nums[j] = tmp
        }
        while(i <= r){
            if(nums[i] === 0){
                swap(l, i)
                l++;
                i++;
            } else if (nums[i] === 2){
                swap(i, r)
                r--;
            } else {
                i++
            }
        }


    }
}
