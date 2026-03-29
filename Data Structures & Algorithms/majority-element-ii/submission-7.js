class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const map = new Map()
        for(let i = 0; i < nums.length ; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }
        const set = []
        for(const [key, value] of map.entries()){
            if (value > Math.floor(nums.length / 3)){
                set.push(key)
            } 
        }


        return Array.from(set)



    }
}
