class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        if (amount === 0) {
            return 0;
        }

        const q = [0];
        const visited = new Set<number>([0]);
        let front = 0;
        let res = 0;

        while (q.length > front) {
            const len = q.length - front;
            for (let i = 0; i < len; i++) {
                const currentAmout = q[front++];

                if (currentAmout === amount) {
                    return res;
                }
                for (let coin of coins) {
                    const newAmount = currentAmout + coin;
                    if (newAmount > amount || visited.has(newAmount)) {
                        continue;
                    }

                    visited.add(newAmount);
                    q.push(newAmount);
                }
            }
            res++;
        }

        return -1;
    }
}