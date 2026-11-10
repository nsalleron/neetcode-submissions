class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0
        let r = 1
        let res = 0
        while(r < prices.length){
            const profit = prices[r] - prices[l]
            res = Math.max(res,profit)
            if(profit < 0){
                l++
            } else {
                r++
            }
        }

        return res

    }
}
