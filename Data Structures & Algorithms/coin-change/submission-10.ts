class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const memo = {}
        const dfs = (amount: number) => {
            if(amount < 0){
                return Infinity
            }
            if(amount === 0){
                return 0
            }

            if(memo[amount]){
                return memo[amount]
            }

            let min = Infinity 
            for(let i = 0; i < coins.length; i++){
                min = Math.min(min, dfs(amount - coins[i]) + 1)
            }

            memo[amount] = min
            return memo[amount]
        }   

       

        return dfs(amount) === Infinity ? -1 : dfs(amount)
    }
}
