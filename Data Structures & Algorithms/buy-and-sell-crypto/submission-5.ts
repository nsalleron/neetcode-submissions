class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0
        let maxProfit = 0

        for(let r = 0; r < prices.length; r++){
            let sell = prices[r]
            maxProfit = Math.max(maxProfit, sell - prices[l])
            if(prices[l] > prices[r]){
                l = r
            }
        }

        return maxProfit
    }
}
