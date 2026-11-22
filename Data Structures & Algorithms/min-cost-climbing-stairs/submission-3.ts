class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {

        const memo = {}
        const dfs = (floor) => {
            if(floor >= cost.length){
                return 0// end of work
            }
            if(memo[floor] !== undefined){
                return memo[floor]
            }

            return memo[floor] = Math.min(cost[floor] + dfs(floor + 1), cost[floor] + dfs(floor + 2))
        }

        return Math.min(dfs(0), dfs(1))



    }
}
