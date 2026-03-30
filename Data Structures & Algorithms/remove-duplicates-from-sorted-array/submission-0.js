class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0
        let r = l + 1

        while(l < nums.length - 1) {
            let lValue = nums[l]
            let rValue = nums[r]
            while(r <= nums.length - 1){
                rValue = nums[r]
                if(lValue === rValue){
                    nums.splice(r,1)
                } else { 
                    r++
                }    
            }
            l++  
            r = l + 1       
        }

        return nums.length

    }
}