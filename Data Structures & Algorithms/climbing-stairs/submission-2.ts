class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const memo = {}

        const dfs = (index: number) => {
            if(index >= n) return index == n ? 1 : 0
            if(memo[index] !== undefined) return memo[index]            
            return (memo[index] = dfs(index + 1) + dfs(index + 2))
        }

        return dfs(0)

    }
}
