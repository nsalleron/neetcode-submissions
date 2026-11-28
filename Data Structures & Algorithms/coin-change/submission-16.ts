class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        coins = coins.sort((a, b) => a - b);

        const memo = {};

        const dfs = (remaining: number) => {
            if (remaining === 0) {
                return 0;
            }

            if (remaining < 0) {
                return Infinity
            }

            if (memo[remaining] !== undefined) {
                return memo[remaining];
            }

            let best = Infinity
            for (let i = coins.length - 1; i >= 0; i--) {
                const candidate = dfs(remaining - coins[i]);

                if(candidate !== Infinity){
                    best = Math.min(best, candidate + 1)
                }
            }

            return memo[remaining] = best 
        };

        const res = dfs(amount);

        return res == Infinity ? -1 : res;
    }
}
