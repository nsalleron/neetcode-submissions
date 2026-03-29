class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for(let i = 0; i < nums.length; i++){
            const result = target - nums[i]
            if(map.has(result)){
                return [map.get(result), i]
            }
            map.set(nums[i], i)
        }

        return []
    }
}
