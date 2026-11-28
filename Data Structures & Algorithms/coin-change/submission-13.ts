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
                return 1;
            }

            if (remaining < 0) {
                return Number.MAX_SAFE_INTEGER;
            }

            if (memo[remaining] !== undefined) {
                return memo[remaining];
            }

            let res = Number.MAX_SAFE_INTEGER;
            for (let i = coins.length - 1; i >= 0; i--) {
                res = Math.min(dfs(remaining - coins[i]), res);
            }

            return Math.min((memo[remaining] = res + 1), Number.MAX_SAFE_INTEGER);
        };

        const res = dfs(amount);

        return res == Number.MAX_SAFE_INTEGER ? -1 : (res - 1);
    }
}
