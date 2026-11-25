class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {

        const memo = {}

        const dfs = (index: number, total: number) => {
            if(index >= nums.length){
                return false
            }

            if(total === 0){
                return true
            }

            if(memo[total]){
                return memo[total]
            }

            for(let i = index; i < nums.length; i++){
                if(dfs(i + 1, total - nums[i])){
                    return memo[total - nums[i]] = true
                }
            }

            return false
        }

        return dfs(0, nums.reduce((a, b) => a + b, 0) / 2)
    }
}
