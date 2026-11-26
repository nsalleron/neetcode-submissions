class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const memo = {}
        const dfs = (floor) => {
            if(floor >= cost.length){
                return 0
            }    

            if(memo[floor] !== undefined){
                return memo[floor]
            }


            return memo[floor] = cost[floor] + Math.min(dfs(floor + 1), dfs(floor + 2))
        }


        return Math.min(dfs(0), dfs(1))   
    }
}
