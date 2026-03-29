class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const map = new Map()
        const set = new Set()
        for(let i = 0; i < nums.length ; i++){
            const occ = (map.get(nums[i]) || 0)
            if((occ === Math.floor(nums.length / 3))){
                set.add(nums[i])
            } else {
                map.set(nums[i], occ + 1)
            }
        }
        return Array.from(set)



    }
}
