class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const cache = Array.from({length: nums.length}, () => -1)

        const dfs = (house) => {
            if(house > nums.length - 1){ return 0 }

            if(cache[house] !== -1){
                return cache[house]
            }

            const res = []
            for(let i = 0; i < nums.length - house; i++){
                res.push(dfs(house + 2 + i))
            }

            cache[house] = nums[house] + Math.max(...res)

            return cache[house]
        }


        return Math.max(dfs(0), dfs(1))
    }
}
