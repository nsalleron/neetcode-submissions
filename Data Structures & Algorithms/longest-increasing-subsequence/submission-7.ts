class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const memo = {}

        const dfs = (index: number) => {
            if(index == nums.length - 1 ){
                return 1
            }
            if(memo[index] !== undefined){
                return memo[index]
            }

            let res = 0
            for(let i = index; i < nums.length; i++){
                if(nums[i] > nums[index]){
                    res = Math.max(res, dfs(i))
                }
            }

            memo[index] = 1 + res
            return memo[index]
        }

        let maxRes = 0
        for(let i = 0; i < nums.length; i++){
            maxRes = Math.max(maxRes,dfs(i))
        }

        return maxRes
    }
}
