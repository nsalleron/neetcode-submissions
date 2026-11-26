class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const memo = {}
        const dfs = (stair: number) => {
            if(stair >= n){
                return 1
            }
            if(memo[stair] !== undefined){
                return memo[stair]
            }

            let res = 0
            res += dfs(stair + 1)
            if((stair + 2) <= n){
                res += dfs(stair + 2)
            }

            return memo[stair] = res
        }

        return dfs(0)
    }
}
