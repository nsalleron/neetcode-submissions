class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const map = new Map()
        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            if(num < 0){
                nums[i] = 0
            } else {
                map.set(num, 1)
            }
        }


        let current = 1
        while(map.get(current) !== undefined){
            current += 1
        }






        return current
    }
}
