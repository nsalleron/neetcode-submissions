class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const memo = new Map();
        const rec = (i, bought) => {
            if (i === prices.length) {
                return 0;
            }
            const key = `${i}-${bought}`;
            if (memo.has(key)) return memo.get(key);

            let res = rec(i + 1, bought);
            if (bought) {
                res = Math.max(res, prices[i] + rec(i + 1, false));
            } else {
                res = Math.max(res, -prices[i] + rec(i + 1, true));
            }
            memo.set(key, res);
            return res;
        };
        return rec(0, false);
    }
}