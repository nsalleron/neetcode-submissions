class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const memo = {}
        const dfs = (currentStair) => {
            if(currentStair === n){
                return 1
            }
            if(currentStair > n){
                return 0
            }
            if(memo[currentStair] !== undefined){
                return memo[currentStair]
            }

            memo[currentStair] = dfs(currentStair + 1) + dfs(currentStair + 2)
            
            return memo[currentStair]
        }    

        
        return dfs(0)
    }
}
