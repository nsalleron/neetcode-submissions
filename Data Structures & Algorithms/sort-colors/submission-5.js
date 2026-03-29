class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
       let l = 0
       let r = nums.length -1 
       let i = 0

        const swap = (l, r) => {
            let temp = nums[l]
            nums[l] = nums[r]
            nums[r] = temp
        }


        while(r >= i){
            if(nums[i] === 0){
                swap(l, i)
                l++
                i++
            } else if (nums[i] === 2){
                swap(i, r)
                r--
            } else {
                i++
            }
        }








    }
}
