class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0
        let r = 1
        let res = 0
        for(let r = 0; r < prices.length ; r++){
            const profit = prices[r] - prices[l]
            if(prices[r] < prices[l]){
                l = r
            }   else {
                res = Math.max(res, profit)
            }
        }

        return res

    }
}
