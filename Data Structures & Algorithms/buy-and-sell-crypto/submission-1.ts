class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0
        for(let i = 0; i < prices.length; i++){
            let buy = prices[i]
            let sell = prices[i]
            let r = i
            while(sell - buy >= 0 && r < prices.length - 1) {
                r ++
                sell = prices[r]
                profit = Math.max(profit, sell - buy)
                //console.log({ buy, sell, profit: sell-buy})
            }
        }

        return profit
    }
}
