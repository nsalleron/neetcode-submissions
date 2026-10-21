class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buy = prices[0]
        let profit = 0

        for(let i = 0; i < prices.length; i++){
            buy = Math.min(buy, prices[i])
            profit = Math.max(profit, prices[i] - buy)
        }

        return profit
    }
}
