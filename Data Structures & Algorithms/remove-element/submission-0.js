class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        for(let i = 0; i < nums.length ; i++){
            if(nums[i] === val){
                nums.splice(i,1)
                i -= 1
            } 
        }
        return nums.length
    }
}
