class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const memo = {}

        const dfs = (index) => {
            if(index >= cost.length) return 0
            if(memo[index] !== undefined){
                return memo[index]
            }

            return (memo[index] = cost[index] + Math.min(dfs(index + 1), dfs(index + 2)))
        }

        return Math.min(dfs(0), dfs(1))
        
    }
}
