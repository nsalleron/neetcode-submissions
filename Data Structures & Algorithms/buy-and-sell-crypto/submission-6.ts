class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let res = Number.MIN_SAFE_INTEGER

        let l = 0
        for(let r = 0; r < prices.length ; r++){
            if(prices[r] < prices[l]){
                l = r
            }   else {
                res = Math.max(res, prices[r] - prices[l])
            }
        }

        return res
    }
}
